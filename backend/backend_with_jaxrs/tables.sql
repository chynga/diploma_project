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
    consultant_id INTEGER,
    body VARCHAR(300) NOT NULL,
    sent_time TIMESTAMP NOT NULL,
    is_client BOOL NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE,
    FOREIGN KEY (consultant_id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) UNIQUE,
    description VARCHAR,
    approx_duration_min INTEGER,
    approx_cost VARCHAR(50),
    img_main_url VARCHAR,
    img_before_url VARCHAR,
    img_after_url VARCHAR
);

CREATE TABLE IF NOT EXISTS doctor_services (
    service_id INTEGER NOT NULL,
    doctor_id INTEGER NOT NULL,
    FOREIGN KEY (service_id) REFERENCES services (id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES doctors (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS appointment_statuses (
    name VARCHAR(30) UNIQUE
);

CREATE TABLE IF NOT EXISTS appointments (
    id SERIAL PRIMARY KEY,
    doctor_id INTEGER DEFAULT NULL,
    client_id INTEGER,
    service_id INTEGER DEFAULT NULL,
    status VARCHAR(30) NOT NULL,
    approved_time TIMESTAMP,
    requested_time TIMESTAMP,
    duration_min INTEGER,
    cost DECIMAL NOT NULL DEFAULT 0,
    confirmed BOOL NOT NULL DEFAULT false,
    client_message VARCHAR(500) NOT NULL DEFAULT '',
    FOREIGN KEY (doctor_id) REFERENCES doctors (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (service_id) REFERENCES services (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (status) REFERENCES appointment_statuses (name) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS teeth_brush_sessions (
    id SERIAL PRIMARY KEY,
    client_id INTEGER NOT NULL,
    teeth_brushed_time TIMESTAMP,
    duration INTEGER,
    FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    client_id INTEGER NOT NULL,
    full_name VARCHAR(50) NOT NULL,
    body varchar(5000) NOT NULL,
    rating INTEGER,
    FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS ordered_calls (
    id SERIAL PRIMARY KEY,
    client_id INTEGER NOT NULL,
    name VARCHAR(30) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS notification_subscriptions (
    client_id INTEGER UNIQUE NOT NULL,
    token VARCHAR NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE ON UPDATE CASCADE
)