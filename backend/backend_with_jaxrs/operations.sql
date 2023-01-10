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
SELECT doctor_id, service, approved_time, cost FROM appointments WHERE EXTRACT(MONTH FROM approved_time) = 1 AND status = 'success';
SELECT * FROM users JOIN permissions p on users.id = p.user_id;
SELECT * FROM permissions;
SELECT * FROM consultation