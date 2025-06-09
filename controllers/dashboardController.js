const Room = require('../models/Room');
const Reservation = require('../models/Reservation');

// Renderiza a página de dashboard com salas e reservas do usuário
exports.getDashboard = async (req, res) => {
    // Exemplo: user_id fictício (depois use sessão/autenticação real)
    const user_id = 1;
    const reservas = await Reservation.findByUser(user_id);
    res.render('dashboard', { salas: [], reservas, search: {} });
};

// Busca salas disponíveis
exports.searchRooms = async (req, res) => {
    const { date, start, duration } = req.body;
    const user_id = 1;
    // Calcular horário final
    const [h, m] = start.split(':').map(Number);
    const startDate = new Date(`${date}T${start}:00`);
    const endDate = new Date(startDate.getTime() + duration * 60 * 60 * 1000);
    const end = endDate.toTimeString().slice(0,5);

    const check_in = `${date} ${start}`;
    const check_out = `${date} ${end}`;

    const salas = await Room.findAvailable(check_in, check_out);
    const reservas = await Reservation.findByUser(user_id);
    res.render('dashboard', { salas, reservas, search: { date, start, duration } });
};

// Realiza agendamento
exports.bookRoom = async (req, res) => {
    const { room_id, date, start, duration } = req.body;
    const user_id = 1; // Exemplo
    // Calcular horário final
    const [h, m] = start.split(':').map(Number);
    const startDate = new Date(`${date}T${start}:00`);
    const endDate = new Date(startDate.getTime() + duration * 60 * 60 * 1000);
    const end = endDate.toTimeString().slice(0,5);
    await Reservation.create({
        user_id,
        room_id,
        check_in: `${date} ${start}`,
        check_out: `${date} ${end}`
    });
    res.redirect('/dashboard');
}; 