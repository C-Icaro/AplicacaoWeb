const Room = require('../models/Room');
const Reservation = require('../models/Reservation');

// Função auxiliar para validar horário
const isValidOperatingHours = (startDate, endDate) => {
    const startHour = startDate.getHours();
    const endHour = endDate.getHours();
    const startMinutes = startDate.getMinutes();
    const endMinutes = endDate.getMinutes();
    
    // Verifica se está dentro do horário de funcionamento (7:00 às 21:00)
    // O último horário válido é 20:00-21:00
    if (startHour < 7 || startHour > 20 || endHour > 21) {
        return false;
    }
    
    // Verifica se o horário de início é em hora cheia (minutos = 0)
    if (startMinutes !== 0) {
        return false;
    }
    
    // Verifica se a duração é exatamente 1 hora
    const durationMs = endDate - startDate;
    if (durationMs !== 60 * 60 * 1000) {
        return false;
    }
    
    return true;
};

// Renderiza a página de dashboard com salas e reservas do usuário
exports.getDashboard = async (req, res) => {
    const user_id = 1;
    const reservas = await Reservation.findByUser(user_id);
    res.render('dashboard', { salas: [], reservas, search: {}, error: null });
};

// Busca salas disponíveis
exports.searchRooms = async (req, res) => {
    const { date, start } = req.body;
    const user_id = 1;
    const [h] = start.split(':').map(Number);
    const startDate = new Date(`${date}T${start}:00`);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Sempre 1 hora
    const end = endDate.toTimeString().slice(0,5);

    if (!isValidOperatingHours(startDate, endDate)) {
        const reservas = await Reservation.findByUser(user_id);
        return res.render('dashboard', {
            salas: [],
            reservas,
            search: { date, start },
            error: 'Os agendamentos só podem ser feitos em blocos de 1 hora, em horários cheios (ex: 7:00, 8:00, etc.) entre 7:00 e 21:00. O último horário disponível é 20:00-21:00.'
        });
    }

    const check_in = `${date} ${start}:00`;
    const check_out = `${date} ${end}:00`;
    const salas = await Room.findAvailable(check_in, check_out);
    const reservas = await Reservation.findByUser(user_id);
    res.render('dashboard', { salas, reservas, search: { date, start }, error: null });
};

// Realiza agendamento
exports.bookRoom = async (req, res) => {
    const { room_id, date, start } = req.body;
    const user_id = 1;
    const [h] = start.split(':').map(Number);
    const startDate = new Date(`${date}T${start}:00`);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Sempre 1 hora
    const end = endDate.toTimeString().slice(0,5);

    if (!isValidOperatingHours(startDate, endDate)) {
        const reservas = await Reservation.findByUser(user_id);
        return res.render('dashboard', {
            salas: [],
            reservas,
            search: { date, start },
            error: 'Os agendamentos só podem ser feitos em blocos de 1 hora, em horários cheios (ex: 7:00, 8:00, etc.) entre 7:00 e 21:00'
        });
    }

    const check_in = `${date} ${start}:00`;
    const check_out = `${date} ${end}:00`;
    try {
        await Reservation.create({ user_id, room_id, check_in, check_out });
        res.redirect('/dashboard');
    } catch (error) {
        const reservas = await Reservation.findByUser(user_id);
        res.render('dashboard', {
            salas: [],
            reservas,
            search: { date, start },
            error: 'Erro ao realizar agendamento. Por favor, tente novamente.'
        });
    }
};

exports.cancelReservation = async (req, res) => {
    const { id } = req.body;
    const user_id = req.session.userId || 1;
    await Reservation.deleteById(id, user_id);
    res.redirect('/dashboard');
};

// Renderiza a página de agendamentos passados
exports.getPastBookings = async (req, res) => {
    const user_id = 1;
    await Reservation.concludePastReservations(user_id);
    const bookings = await Reservation.findPastByUser(user_id);
    res.render('past-bookings', { bookings });
}; 