-- DROP SCHEMA public CASCADE;
-- CREATE SCHEMA public;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    phone VARCHAR(15) NOT NULL,
    password VARCHAR(100) NOT NULL,
    recovery_code VARCHAR(6), /* for password recovery */
    recovery_code_sent_time TIMESTAMP /* password recovery code sent time */
);

CREATE TABLE IF NOT EXISTS roles (
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS permissions (
    user_id INTEGER NOT NULL,
    role VARCHAR(30) NOT NULL,
    PRIMARY KEY (user_id, role),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (role) REFERENCES roles (name) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS clients (
    id INTEGER NOT NULL UNIQUE,
    verification_code CHAR(6),
    verification_code_sent_time TIMESTAMP,
    email_verified BOOL DEFAULT false,
    patient_description VARCHAR NOT NULL DEFAULT '',
    FOREIGN KEY (id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS doctors (
    id INTEGER NOT NULL UNIQUE,
    started_working_from TIMESTAMP,
    available BOOL DEFAULT false,
    work_experience INTEGER,
    about VARCHAR,
    FOREIGN KEY (id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS education (
    doctor_id INTEGER NOT NULL,
    institution VARCHAR(150) NOT NULL DEFAULT '',
    enrollment_date TIMESTAMP,
    graduation_date TIMESTAMP,
    FOREIGN KEY (doctor_id) REFERENCES doctors (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS certificates (
    doctor_id INTEGER NOT NULL,
    url VARCHAR NOT NULL,
    FOREIGN KEY (doctor_id) REFERENCES doctors (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS specialties (
    title VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS doctor_specialties (
    doctor_id INTEGER NOT NULL,
    specialty VARCHAR(50) NOT NULL,
    FOREIGN KEY (doctor_id) REFERENCES doctors (id) ON DELETE CASCADE,
    FOREIGN KEY (specialty) REFERENCES specialties (title) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS consultation (
    id SERIAL PRIMARY KEY,
    client_id INTEGER NOT NULL,
    body VARCHAR(300) NOT NULL,
    sent_time TIMESTAMP NOT NULL,
    is_client BOOL NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS services (
    title VARCHAR(50) UNIQUE,
    approx_duration_min INTEGER,
    approx_cost VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS doctor_services (
    service VARCHAR(30) NOT NULL,
    doctor_id INTEGER NOT NULL,
    FOREIGN KEY (service) REFERENCES services (title) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES doctors (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS appointment_statuses (
    name VARCHAR(30) UNIQUE
);

CREATE TABLE IF NOT EXISTS appointments (
    id SERIAL PRIMARY KEY,
    doctor_id INTEGER DEFAULT NULL,
    client_id INTEGER,
    service VARCHAR(30) DEFAULT NULL,
    status VARCHAR(30) NOT NULL,
    approved_time TIMESTAMP,
    requested_time TIMESTAMP,
    duration_min INTEGER,
    cost DECIMAL NOT NULL DEFAULT 0,
    confirmed BOOL NOT NULL DEFAULT false,
    client_message VARCHAR(500) NOT NULL DEFAULT '',
    FOREIGN KEY (doctor_id) REFERENCES doctors (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (service) REFERENCES services (title) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (status) REFERENCES appointment_statuses (name) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(50) NOT NULL,
    body varchar(5000) NOT NULL,
    rating INTEGER
);

CREATE TABLE IF NOT EXISTS ordered_calls (
     id SERIAL PRIMARY KEY,
     name VARCHAR(30) NOT NULL,
     phone VARCHAR(15) NOT NULL
);

-- INSERT INTO roles VALUES ('ADMIN');
-- INSERT INTO roles VALUES ('MANAGER');
-- INSERT INTO roles VALUES ('DOCTOR');
-- INSERT INTO roles VALUES ('RECEPTION');
-- INSERT INTO roles VALUES ('CONSULTANT');
-- INSERT INTO roles VALUES ('CLIENT');

-- INSERT INTO appointment_statuses VALUES ('pending');
-- INSERT INTO appointment_statuses VALUES ('approved');
-- INSERT INTO appointment_statuses VALUES ('success');
-- INSERT INTO appointment_statuses VALUES ('cancelled');

-- INSERT INTO services VALUES ('лечение десен');
-- INSERT INTO services VALUES ('имплантация');

SELECT * FROM consultation;
SELECT * FROM services;
SELECT * FROM users JOIN permissions p on users.id = p.user_id;
SELECT * FROM appointment_statuses;
SELECT * FROM permissions;
SELECT * FROM appointments;
SELECT doctor_id, service, approved_time, cost FROM appointments WHERE EXTRACT(MONTH FROM approved_time) = 1 AND status = 'success'