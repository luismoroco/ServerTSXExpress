CREATE DATABASE db;
USE db;

CREATE TABLE IF NOT EXISTS Users (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    estado TINYINT NOT NULL DEFAULT 1,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP
);