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
    nombre               VARCHAR(100) NOT NULL,
    no_creditos          INTEGER NOT NULL,
    descripcion          VARCHAR(300),
    id_escuela           INTEGER NOT NULL,
    PRIMARY KEY (id_curso),
    CONSTRAINT fk_esc_curso FOREIGN KEY(id_escuela) REFERENCES ESCUELA(id_escuela)
);




CREATE TABLE EDIFICIO (
    id_edificio   INTEGER AUTO_INCREMENT,
    nombre        VARCHAR(50) NOT NULL,
    PRIMARY KEY(id_edificio)
);


CREATE TABLE SALON (
    id_salon               INTEGER AUTO_INCREMENT,
    numero                 INTEGER NOT NULL,
    capacidad              INTEGER,
    id_edificio             INTEGER NOT NULL,
    PRIMARY KEY(id_salon),
    CONSTRAINT fk_edif_salon FOREIGN KEY(id_edificio) REFERENCES EDIFICIO(id_edificio)
);



CREATE TABLE  SECCION (
    id_seccion                  INTEGER AUTO_INCREMENT,
    seccion                     CHAR(1) NOT NULL,
    id_curso                    INTEGER NOT NULL,
    id_salon                    INTEGER NOT NULL,
    PRIMARY KEY(id_seccion),
    CONSTRAINT fk_cur_secc FOREIGN KEY(id_curso) REFERENCES CURSO(id_curso),
    CONSTRAINT fk_saln_secc FOREIGN KEY(id_salon) REFERENCES SALON(id_salon)
);

CREATE TABLE LABORATORIO (
    id_laboratorio       INTEGER AUTO_INCREMENT,
    horario              DATE NOT NULL,
    id_seccion           INTEGER NOT NULL,
    PRIMARY KEY(id_laboratorio),
    CONSTRAINT fk_secc_lab FOREIGN KEY(id_seccion) REFERENCES SECCION(id_seccion),
    CONSTRAINT uk_lab_secc UNIQUE (id_seccion)
);

CREATE TABLE CATEDRATICO (
    id_catedratico   INTEGER AUTO_INCREMENT,
    nombre           VARCHAR(30) NOT NULL,
    apellido         VARCHAR(30) NOT NULL,
    PRIMARY KEY(id_catedratico)
);

CREATE TABLE CATE_CUENTA (
    id_cate_cuenta INTEGER AUTO_INCREMENT,
    login           VARCHAR(50) NOT NULL,
    password        VARCHAR(20) NOT NULL,
    activo          CHAR(1) NOT NULL,
    id_catedratico INTEGER NOT NULL,
    PRIMARY KEY(id_cate_cuenta),
    CONSTRAINT fk_cate_cuenta FOREIGN KEY (id_catedratico) REFERENCES CATEDRATICO(id_catedratico),
    CONSTRAINT uk_catcuent_login UNIQUE(login)
);


CREATE TABLE CICLO_ACADEMICO (
    id_cl_acad   INTEGER AUTO_INCREMENT,
    nombre        VARCHAR(50) NOT NULL,
    anio          INTEGER NOT NULL,
    PRIMARY KEY(id_cl_acad)
);

CREATE TABLE ASIG_CATEDRATICO (
    id_asig_cate   INTEGER AUTO_INCREMENT,
    id_cl_acad        INTEGER NOT NULL,
    id_catedratico          INTEGER NOT NULL,
    PRIMARY KEY(id_asig_cate),
    CONSTRAINT fk_cl_acad_asig_cat FOREIGN KEY(id_cl_acad) REFERENCES CICLO_ACADEMICO(id_cl_acad),
    CONSTRAINT fk_cate_asig_cat FOREIGN KEY(id_catedratico) REFERENCES CATEDRATICO(id_catedratico)
);

CREATE TABLE ESTUDIANTE (
    id_estudiante   INTEGER AUTO_INCREMENT,
    nombre          VARCHAR(30) NOT NULL,
    apellido        VARCHAR(30) NOT NULL,
    PRIMARY KEY(id_estudiante)
);

CREATE TABLE ESTUDIANTE_CUENTA (
    id_est_cuenta INTEGER AUTO_INCREMENT,
    login           VARCHAR(50) NOT NULL,
    password        VARCHAR(20) NOT NULL,
    activo          CHAR(1) NOT NULL,
    id_estudiante   INTEGER NOT NULL,
    PRIMARY KEY(id_est_cuenta),
    CONSTRAINT fk_est_cuenta FOREIGN KEY (id_estudiante) REFERENCES ESTUDIANTE(id_estudiante),
    CONSTRAINT uk_estcuent_login UNIQUE(login)

);


CREATE TABLE ASIG_ESTUDIANTE (
    id_asig_est                 INTEGER AUTO_INCREMENT,
    id_estudiante      INTEGER NOT NULL,
    id_cl_acad   INTEGER NOT NULL,
    PRIMARY KEY(id_asig_est),
    CONSTRAINT fk_est_asig_est FOREIGN KEY(id_estudiante) REFERENCES ESTUDIANTE(id_estudiante),
    CONSTRAINT fk_cl_acad_asig_est FOREIGN KEY(id_cl_acad) REFERENCES CICLO_ACADEMICO(id_cl_acad)
);

CREATE TABLE DETALLE_CAT_CURSO (
    id_seccion      INTEGER NOT NULL,
    id_asig_cate    INTEGER NOT NULL,
    PRIMARY KEY(id_seccion,id_asig_cate),
    CONSTRAINT fk_secc_det_cc FOREIGN KEY(id_seccion) REFERENCES SECCION(id_seccion),
    CONSTRAINT fk_asig_cate_det_cc FOREIGN KEY(id_asig_cate) REFERENCES ASIG_CATEDRATICO(id_asig_cate)
    
);

CREATE TABLE DETALLE_ASIG_EST ( 
    id_asig_est             INTEGER NOT NULL, 
    id_seccion              INTEGER NOT NULL,
    nota                    INTEGER NOT NULL,
    zona                    INTEGER NOT NULL, 
    CONSTRAINT fk_asig_est_det_a_e FOREIGN KEY(id_asig_est) REFERENCES ASIG_ESTUDIANTE(id_asig_est),
    CONSTRAINT fk_sec_det_a_e FOREIGN KEY(id_seccion) REFERENCES SECCION(id_seccion)
);

CREATE TABLE CONGRESO (
    id_congreso          INTEGER AUTO_INCREMENT,
    nombre               VARCHAR(30) NOT NULL,
    ubicacion            VARCHAR(100),
    descripcion          VARCHAR(200),
    anio                 INTEGER NOT NULL,
    id_escuela   INTEGER NOT NULL,
    PRIMARY KEY(id_congreso),
    CONSTRAINT fk_esc_congre FOREIGN KEY (id_escuela) REFERENCES ESCUELA(id_escuela),
    CONSTRAINT uk_anio_cgr UNIQUE(anio)
);


CREATE TABLE ASIG_CONGRESO (
    id_asig_congr              INTEGER AUTO_INCREMENT,
    id_estudiante   INTEGER NOT NULL,
    id_congreso       INTEGER NOT NULL,
    fecha                      DATE NOT NULL,
    PRIMARY KEY(id_asig_congr),
    CONSTRAINT fk_est_asig_cgr FOREIGN KEY(id_estudiante) REFERENCES ESTUDIANTE(id_estudiante),
    CONSTRAINT fk_cgr_asig_cgr FOREIGN KEY(id_congreso) REFERENCES CONGRESO(id_congreso)
);



CREATE TABLE ADMINISTRADOR (
    id_admin   INTEGER AUTO_INCREMENT,
    nombre          VARCHAR(30) NOT NULL,
    apellido        VARCHAR(30) NOT NULL,
    PRIMARY KEY(id_admin)
);

CREATE TABLE ADMIN_CUENTA (
    id_admin_cuenta   INTEGER AUTO_INCREMENT,
    login           VARCHAR(50) NOT NULL,
    password        VARCHAR(20) NOT NULL,
    activo          CHAR(1) NOT NULL,
    id_admin        INTEGER NOT NULL,
    PRIMARY KEY(id_admin_cuenta),
    CONSTRAINT fk_admin_cuenta FOREIGN KEY (id_admin) REFERENCES ADMINISTRADOR(id_admin),
    CONSTRAINT uk_admincuent_login UNIQUE(login)
);