-- DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    phone VARCHAR(15) NOT NULL,
    password VARCHAR(100) NOT NULL,
    verificationCode VARCHAR(6) DEFAULT NULL, /* for verifying email */
    verificationCodeSent timestamp DEFAULT NULL, /* verifying code sent time */
    recoveryCode VARCHAR(6) DEFAULT NULL, /* for password recovery */
    recoveryCodeSent timestamp DEFAULT NULL, /* password recovery code sent time */
    emailVerified bool DEFAULT false,
    role user_role DEFAULT 'client'
);

SELECT * FROM users