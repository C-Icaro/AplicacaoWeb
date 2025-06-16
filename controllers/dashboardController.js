const Room = require('../models/Room');
const Reservation = require('../models/Reservation');

// Função auxiliar para validar horário
const isValidOperatingHours = (startDate, endDate) => {
    const startHour = startDate.getHours();
    const endHour = endDate.getHours();
    return startHour >= 7 && endHour <= 20;
};

// Renderiza a página de dashboard com salas e reservas do usuário
exports.getDashboard = async (req, res) => {
    const user_id = 1;
    const reservas = await Reservation.findByUser(user_id);
    res.render('dashboard', { salas: [], reservas, search: {}, error: null });
};

// Busca salas disponíveis
exports.searchRooms = async (req, res) => {
    const { date, start, duration } = req.body;
    const user_id = 1;
    const [h, m] = start.split(':').map(Number);
    const startDate = new Date(`${date}T${start}:00`);
    const endDate = new Date(startDate.getTime() + duration * 60 * 60 * 1000);
    const end = endDate.toTimeString().slice(0,5);

    if (!isValidOperatingHours(startDate, endDate)) {
        const reservas = await Reservation.findByUser(user_id);
        return res.render('dashboard', {
            salas: [],
            reservas,
            search: { date, start, duration },
            error: 'Os agendamentos só podem ser feitos entre 7:00 e 20:00'
        });
    }

    const check_in = `${date} ${start}:00`;
    const check_out = `${date} ${end}:00`;
    const salas = await Room.findAvailable(check_in, check_out);
    const reservas = await Reservation.findByUser(user_id);
    res.render('dashboard', { salas, reservas, search: { date, start, duration }, error: null });
};

// Realiza agendamento
exports.bookRoom = async (req, res) => {
    const { room_id, date, start, duration } = req.body;
    const user_id = 1;
    const [h, m] = start.split(':').map(Number);
    const startDate = new Date(`${date}T${start}:00`);
    const endDate = new Date(startDate.getTime() + duration * 60 * 60 * 1000);
    const end = endDate.toTimeString().slice(0,5);

    if (!isValidOperatingHours(startDate, endDate)) {
        const reservas = await Reservation.findByUser(user_id);
        return res.render('dashboard', {
            salas: [],
            reservas,
            search: { date, start, duration },
            error: 'Os agendamentos só podem ser feitos entre 7:00 e 20:00'
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
            search: { date, start, duration },
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