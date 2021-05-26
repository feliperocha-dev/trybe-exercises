CREATE DATABASE IF NOT EXISTS albuns;

USE albuns;

CREATE TABLE artist(
	artist_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    artist_name VARCHAR(100) NOT NULL,
    solo BOOLEAN NOT NULL,
    band BOOLEAN NOT NULL
);

CREATE TABLE style(
	style_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    style_name VARCHAR(100) NOT NULL
);

CREATE TABLE album(
	album_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(100) NOT NULL,
	style_id INT NOT NULL,
	artist_id INT NOT NULL,
    price DOUBLE NOT NULL,
	FOREIGN KEY (style_id) REFERENCES style (style_id),
	FOREIGN KEY (artist_id) REFERENCES artist (artist_id)
);

CREATE TABLE music(
	music_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	music_name VARCHAR(100) NOT NULL,
	album_id INT NOT NULL,
    duration TIME NOT NULL,
	FOREIGN KEY (album_id) REFERENCES album (album_id)
);

INSERT INTO artist(artist_name, solo, band) VALUES('Sum 41', false, true);
INSERT INTO style(style_name) VALUES('punk rock');
INSERT INTO album(title, style_id, artist_id, price) VALUES('Chuck', 1, 1, 145.00);
INSERT INTO music(music_name, album_id, duration) VALUES('Some Say', 1, '00:03:25');

SELECT * FROM artist;
SELECT * FROM style;
SELECT * FROM album;
SELECT * FROM music;
