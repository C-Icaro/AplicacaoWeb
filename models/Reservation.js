const pool = require('../config/database');

module.exports = {
    async create({ user_id, room_id, check_in, check_out }) {
        const result = await pool.query(
            'INSERT INTO reservations (user_id, room_id, check_in, check_out, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [user_id, room_id, check_in, check_out, 'pendente']
        );
        return result.rows[0];
    },
    async findByUser(user_id) {
        const result = await pool.query(
            `SELECT r.*, ro.name as room_name
             FROM reservations r
             JOIN rooms ro ON r.room_id = ro.id
             WHERE r.user_id = $1
             ORDER BY r.check_in DESC`,
            [user_id]
        );
        return result.rows;
    }
}; 