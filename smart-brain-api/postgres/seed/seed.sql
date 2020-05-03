BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) values('Jessie', 'jessie@gmail.com', 5, '2020-01-01');
INSERT into login (hash, email) values('$2a$10$ahThb//oAyjVtpGejWpmXOQOtqcnRnwAr2OmPqbBkGD470JnZ9oua', 'jessie@gmail.com');

INSERT into users (name, email, entries, joined) values('Tim', 'tim@gmail.com', 5, '2020-01-01');
INSERT into login (hash, email) values('$2a$10$ahThb//oAyjVtpGejWpmXOQOtqcnRnwAr2OmPqbBkGD470JnZ9oua', 'tim@gmail.com');

COMMIT;