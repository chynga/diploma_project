-- DROP SCHEMA public CASCADE;
-- CREATE SCHEMA public;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    phone VARCHAR(15) NOT NULL,
    profile_image_url VARCHAR,
    password VARCHAR(100) NOT NULL,
    recovery_code VARCHAR(6),
    recovery_code_sent_time TIMESTAMP
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
    about VARCHAR,
    image_url VARCHAR,
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
    id INTEGER NOT NULL UNIQUE,
    title VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS doctor_specialties (
    doctor_id INTEGER NOT NULL,
    specialty_id INTEGER NOT NULL,
    FOREIGN KEY (doctor_id) REFERENCES doctors (id) ON DELETE CASCADE,
    FOREIGN KEY (specialty_id) REFERENCES specialties (id) ON DELETE CASCADE
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
    doctor_id INTEGER NOT NULL,
    client_id INTEGER NOT NULL,
    service_id INTEGER NOT NULL,
    status VARCHAR(30) NOT NULL,
    time TIMESTAMP NOT NULL,
    duration_min INTEGER NOT NULL,
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
    body varchar(5000) NOT NULL,
    rating INTEGER,
    FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS ordered_calls (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100),
    phone_number VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS push_notification_subscriptions (
    client_id INTEGER UNIQUE NOT NULL,
    token VARCHAR NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS notification_types (
    title VARCHAR(30) UNIQUE
);

CREATE TABLE IF NOT EXISTS notifications (
    id SERIAL PRIMARY KEY,
    client_id INTEGER NOT NULL,
    type VARCHAR(30) NOT NULL,
    is_viewed BOOL DEFAULT false,
    message VARCHAR NOT NULL,
    time TIMESTAMP NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (type) REFERENCES notification_types (title) ON DELETE CASCADE ON UPDATE CASCADE
);
