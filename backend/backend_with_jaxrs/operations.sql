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
-- SELECT * FROM roles;
-- SELECT * FROM permissions;
-- SELECT * FROM teeth_brush_sessions;
-- SELECT * FROM users JOIN permissions p on users.id = p.user_id;
-- SELECT * FROM users JOIN doctors ON users.id = doctors.id;
-- SELECT * FROM doctors;
-- SELECT * FROM notification_subscriptions;
-- SELECT * FROM appointments;