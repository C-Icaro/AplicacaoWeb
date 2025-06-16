-- init.sql

-- Criar extensão para suportar UUIDs, se ainda não estiver ativada
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Criar tabela de tarefas
CREATE TABLE IF NOT EXISTS tarefas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    status VARCHAR(20) DEFAULT 'pendente',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email TEXT,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS reservations (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    room_id INT NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'pendente',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS rooms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    capacity INT NOT NULL,
    location VARCHAR(100) NOT NULL,
    status VARCHAR(20) DEFAULT 'disponivel'
);

-- Alterar check_in e check_out para timestamp
ALTER TABLE reservations
    ALTER COLUMN check_in TYPE timestamp USING check_in::timestamp,
    ALTER COLUMN check_out TYPE timestamp USING check_out::timestamp;

-- Inserir salas padrão
INSERT INTO rooms (name, description, capacity, location, status) VALUES
    ('R01', 'Salinha R01', 5, 'Prédio 5 - Térreo', 'disponivel'),
    ('R02', 'Salinha R02', 5, 'Prédio 5 - Térreo', 'disponivel'),
    ('R03', 'Salinha R03', 5, 'Prédio 5 - Térreo', 'disponivel'),
    ('R04', 'Salinha R04', 5, 'Prédio 5 - Térreo', 'disponivel'),
    ('R05', 'Salinha R05', 5, 'Prédio 5 - Térreo', 'disponivel'),
    ('R06', 'Salinha R06', 5, 'Prédio 5 - Térreo', 'disponivel'),
    ('R07', 'Salinha R07', 5, 'Prédio 5 - Térreo', 'disponivel'),
    ('R10', 'Salinha R10', 5, 'Prédio 5 - Térreo', 'disponivel'),
    ('R08', 'Salinha R08', 2, 'Prédio 5 - Mezanino 1', 'disponivel'),
    ('R09', 'Salinha R09', 5, 'Prédio 5 - Mezanino 2', 'disponivel');
