const pool = require('../config/database');

class TarefaModel {
    // Criar uma nova tarefa
    static async criar(nome, descricao) {
        const query = 'INSERT INTO tarefas (nome, descricao) VALUES ($1, $2) RETURNING *';
        const values = [nome, descricao];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    // Listar todas as tarefas
    static async listar() {
        const query = 'SELECT * FROM tarefas';
        const result = await pool.query(query);
        return result.rows;
    }

    // Buscar uma tarefa por ID
    static async buscarPorId(id) {
        const query = 'SELECT * FROM tarefas WHERE id = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    // Editar uma tarefa
    static async editar(id, nome, descricao, status) {
        const query = `
            UPDATE tarefas 
            SET nome = $1, 
                descricao = $2, 
                status = $3, 
                updated_at = CURRENT_TIMESTAMP
            WHERE id = $4 
            RETURNING *`;
        const values = [nome, descricao, status, id];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    // Excluir uma tarefa
    static async excluir(id) {
        const query = 'DELETE FROM tarefas WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    }
}

module.exports = TarefaModel; 