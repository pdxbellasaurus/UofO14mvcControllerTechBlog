-- DROP DATABASE
DROP DATABASE IF EXISTS tech-blog_db;

-- CREATE DATABASE
CREATE DATABASE tech-blog_db;

-- DATA FOR TESTING

INSERT INTO post (title, post_body, date_created, user_id) 
VALUES ('Post Test', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2021-05-05 23:07:54', '1');
INSERT INTO post (title, post_body, date_created, user_id)
VALUES ('Test Post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2021-05-03 23:07:54', '1');
INSERT INTO post (title, post_body, date_created, user_id)
VALUES ('Tester', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2021-05-04 23:07:54', '1');

INSERT INTO comment (content, date_created, user_id, post_id)
VALUES('Test Comment 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','2021-05-05 23:07:54','1','1');
INSERT INTO comment (content, date_created, user_id, post_id)
VALUES('Test Comment 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','2021-05-05 23:07:54','1','2');
INSERT INTO comment (content, date_created, user_id, post_id)
VALUES('Test Comment 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','2021-05-05 23:07:54','1','3');