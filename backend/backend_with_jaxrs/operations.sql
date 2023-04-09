-- INSERT INTO roles VALUES ('ADMIN');
-- INSERT INTO roles VALUES ('DOCTOR');
-- INSERT INTO roles VALUES ('CONSULTANT');
-- INSERT INTO roles VALUES ('CLIENT');
--
-- INSERT INTO appointment_statuses VALUES ('pending');
-- INSERT INTO appointment_statuses VALUES ('success');
-- INSERT INTO appointment_statuses VALUES ('cancelled');
--
-- INSERT INTO services (title) VALUES ('лечение десен');
-- INSERT INTO services (title) VALUES ('имплантация');
--
-- INSERT INTO notification_types VALUES ('message');
-- INSERT INTO notification_types VALUES ('appointment');

SELECT * FROM users;
SELECT * FROM permissions;
SELECT * FROM notifications;

SELECT * FROM ordered_calls;
-- DELETE FROM notifications