const pool = require('../config/database');

module.exports = {
    async findAvailable(check_in, check_out) {
        // Busca salas que NÃO estão reservadas no período informado
        const result = await pool.query(
            `SELECT * FROM rooms WHERE id NOT IN (
                SELECT room_id FROM reservations
                WHERE ($1::timestamp, $2::timestamp) OVERLAPS (check_in, check_out)
            )`,
            [check_in, check_out]
        );
        return result.rows;
    },
    async findAll() {
        const result = await pool.query('SELECT * FROM rooms');
        return result.rows;
    }
}; 