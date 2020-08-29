CREATE TABLE ESCUELA (
    id_escuela   INTEGER AUTO_INCREMENT,
    nombre       VARCHAR(50) NOT NULL,
    PRIMARY KEY(id_escuela)
);


CREATE TABLE DEPARTAMENTO (
    id_departamento      INTEGER AUTO_INCREMENT,
    nombre               VARCHAR(50) NOT NULL,
    id_escuela   		 INTEGER NOT NULL,
    PRIMARY KEY (id_departamento),
    CONSTRAINT fk_esc_dep FOREIGN KEY(id_escuela) REFERENCES ESCUELA(id_escuela)
);

CREATE TABLE CURSO (
    id_curso             INTEGER AUTO_INCREMENT,
    nombre               VARCHAR(30) NOT NULL,
    no_creditos          INTEGER NOT NULL,
    descripcion          VARCHAR(100),
    id_escuela           INTEGER NOT NULL,
    PRIMARY KEY (id_curso),
    CONSTRAINT fk_esc_curso FOREIGN KEY(id_escuela) REFERENCES ESCUELA(id_escuela)
);

CREATE TABLE LABORATORIO (
    id_laboratorio       INTEGER NOT NULL,
    horario              DATE NOT NULL,
    seccion              CHAR(1) NOT NULL,
);