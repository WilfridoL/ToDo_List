USE todo_db;
DROP TABLE user_tb;
CREATE TABLE user_tb (
	user_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    user_name VARCHAR(50) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    user_password VARCHAR(12) NOT NULL
);

INSERT USER_TB (user_name, user_email, user_password)
VALUE (
	'LUCHO',
    'luismendoza@gmail.com',
    '123456789'
);

CREATE TABLE todo_list_tb (
	list_id INT NOT NULL PRIMARY KEY,
    text_list text NOT NULL,
    user_id int,
    FOREIGN KEY(user_id) REFERENCES user_tb(user_id)
);
INSERT todo_list_tb (list_id, text_list)
VALUE (
	1,
    'ahkahskahkshkshdkahdljakd'
);
INSERT todo_list_tb (list_id, text_list)
VALUE (
	2,
    'ahkahskahkshkshdkahdljakd'
);

SELECT * FROM user_tb, todo_list_tb; 