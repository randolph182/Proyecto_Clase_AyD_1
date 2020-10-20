--- INSERTANDO EN ESTUDIANTE ---- 
INSERT INTO ESTUDIANTE(nombre,apellido,carnet,dpi)VALUES('usuario1',"apellido1","202014225","2566257140101");
INSERT INTO ESTUDIANTE_CUENTA(login,password,activo,id_estudiante)
VALUES('usuario1@usac.com','123','1',1);


--- INSERTANDO EN CATEDRATICO---- 
INSERT INTO CATEDRATICO(nombre,apellido)VALUES('catedratico1',"apellido1");
INSERT INTO CATE_CUENTA(login,password,activo,id_catedratico)
VALUES('catedratico1@usac.com','123','1',1);

INSERT INTO CATEDRATICO(nombre,apellido)VALUES('catedratico2',"apellido2");
INSERT INTO CATE_CUENTA(login,password,activo,id_catedratico)
VALUES('catedratico2@usac.com','123','1',2);

INSERT INTO CATEDRATICO(nombre,apellido)VALUES('catedratico3',"apellido3");
INSERT INTO CATE_CUENTA(login,password,activo,id_catedratico)
VALUES('catedratico3@usac.com','123','1',3);

INSERT INTO CATEDRATICO(nombre,apellido)VALUES('catedratico4',"apellido4");
INSERT INTO CATE_CUENTA(login,password,activo,id_catedratico)
VALUES('catedratico4@usac.com','123','1',4);


INSERT INTO CATEDRATICO(nombre,apellido)VALUES('catedratico5',"apellido5");
INSERT INTO CATE_CUENTA(login,password,activo,id_catedratico)
VALUES('catedratico5@usac.com','123','1',5);

--- INSERTANDO EN ADMINISTRADOR---- 
INSERT INTO ADMINISTRADOR(nombre,apellido)VALUES('administrador1','apellido1');
INSERT INTO ADMIN_CUENTA(login,password,activo,id_admin)
VALUES('administrador1@usac.com','123','1',1);


-- INSERTANDO EN ESCUELA ----
INSERT INTO ESCUELA(nombre) VALUES('Ingeniería en Ciencias y Sistemas');

-- INSERTANDO EN CICLO_ACADEMICO ----
INSERT INTO CICLO_ACADEMICO(nombre,anio) VALUES('segundo semestre',2020);



-- INSERTANDO EN CURSO -------
-- ESCUELA DE SISTEMAS--
INSERT INTO CURSO(nombre,no_creditos,descripcion,id_escuela)
VALUES('INTRODUCCION A LA PROGRAMACION Y COMPUTACION 1',4,'',1);
INSERT INTO CURSO(nombre,no_creditos,descripcion,id_escuela)
VALUES('LENGUAJES FORMALES Y DE PROGRAMACION',3,'',1);
INSERT INTO CURSO(nombre,no_creditos,descripcion,id_escuela)
VALUES('INTRODUCCION A LA PROGRAMACION Y COMPUTACION 2',5,'',1);
INSERT INTO CURSO(nombre,no_creditos,descripcion,id_escuela)
VALUES('ORGANIZACION DE LENGUAJES Y COMPILADORES 1',4,'',1);
INSERT INTO CURSO(nombre,no_creditos,descripcion,id_escuela)
VALUES('ESTRUCTURA DE DATOS',5,'',1);
INSERT INTO CURSO(nombre,no_creditos,descripcion,id_escuela)
VALUES('TEORIA DE SISTEMAS 1',5,'',1);
INSERT INTO CURSO(nombre,no_creditos,descripcion,id_escuela)
VALUES('ORGANIZACION DE LENGUAJES Y COMPILADORES 2',5,'',1);
INSERT INTO CURSO(nombre,no_creditos,descripcion,id_escuela)
VALUES('TEORIA DE SISTEMAS 2',5,'',1);
INSERT INTO CURSO(nombre,no_creditos,descripcion,id_escuela)
VALUES('SISTEMAS DE BASES DE DATOS 1',5,'',1);
INSERT INTO CURSO(nombre,no_creditos,descripcion,id_escuela)
VALUES('REDES DE COMPUTADORAS 1',5,'',1);

-- INSERTANDO EN EDIFICIO ----
INSERT INTO EDIFICIO(nombre)
VALUES('T3');


--- INSERTANDO EN SALON -----
INSERT INTO SALON(numero,capacidad,id_edificio)
VALUES(101,70,1);
INSERT INTO SALON(numero,capacidad,id_edificio)
VALUES(102,70,1);
INSERT INTO SALON(numero,capacidad,id_edificio)
VALUES(103,70,1);
INSERT INTO SALON(numero,capacidad,id_edificio)
VALUES(106,70,1);
INSERT INTO SALON(numero,capacidad,id_edificio)
VALUES(107,70,1);
INSERT INTO SALON(numero,capacidad,id_edificio)
VALUES(108,70,1);
INSERT INTO SALON(numero,capacidad,id_edificio)
VALUES(109,70,1);
INSERT INTO SALON(numero,capacidad,id_edificio)
VALUES(110,70,1);
INSERT INTO SALON(numero,capacidad,id_edificio)
VALUES(111,70,1);


--- INSERTANDO EN SECCION -----
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('A',1,1);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('B',1,2);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('C',1,3);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('A',2,1);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('B',2,2);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('C',2,3);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('A',3,1);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('B',3,2);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('C',3,3);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('A',4,1);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('B',4,2);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('C',4,3);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('A',5,4);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('B',5,5);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('C',5,6);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('A',6,4);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('B',6,5);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('C',6,6);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('A',7,4);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('B',7,5);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('C',7,6);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('A',8,4);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('B',8,5);
INSERT INTO SECCION(seccion,id_curso,id_salon)
VALUES('C',8,6);


--- INSERTANDO EN ASIG_CATEDRATICO -----
INSERT INTO  ASIG_CATEDRATICO(id_cl_acad,id_catedratico)
VALUES(1,1);
INSERT INTO  ASIG_CATEDRATICO(id_cl_acad,id_catedratico)
VALUES(1,2);
INSERT INTO  ASIG_CATEDRATICO(id_cl_acad,id_catedratico)
VALUES(1,3);
INSERT INTO  ASIG_CATEDRATICO(id_cl_acad,id_catedratico)
VALUES(1,4);
INSERT INTO  ASIG_CATEDRATICO(id_cl_acad,id_catedratico)
VALUES(1,5);


--- INSERTANDO EN DETALLE_CAT_CURSO -----
INSERT INTO DETALLE_CAT_CURSO(id_seccion,id_asig_cate)
VALUES(1,1);
INSERT INTO DETALLE_CAT_CURSO(id_seccion,id_asig_cate)
VALUES(2,1);
INSERT INTO DETALLE_CAT_CURSO(id_seccion,id_asig_cate)
VALUES(3,2);
INSERT INTO DETALLE_CAT_CURSO(id_seccion,id_asig_cate)
VALUES(4,2);
INSERT INTO DETALLE_CAT_CURSO(id_seccion,id_asig_cate)
VALUES(5,3);
INSERT INTO DETALLE_CAT_CURSO(id_seccion,id_asig_cate)
VALUES(6,3);
INSERT INTO DETALLE_CAT_CURSO(id_seccion,id_asig_cate)
VALUES(7,4);
INSERT INTO DETALLE_CAT_CURSO(id_seccion,id_asig_cate)
VALUES(8,4);
INSERT INTO DETALLE_CAT_CURSO(id_seccion,id_asig_cate)
VALUES(9,5);
INSERT INTO DETALLE_CAT_CURSO(id_seccion,id_asig_cate)
VALUES(10,5);
INSERT INTO DETALLE_CAT_CURSO(id_seccion,id_asig_cate)
VALUES(11,1);
INSERT INTO DETALLE_CAT_CURSO(id_seccion,id_asig_cate)
VALUES(12,1);
INSERT INTO DETALLE_CAT_CURSO(id_seccion,id_asig_cate)
VALUES(13,2);


select * from ESTUDIANTE;
SELECT * FROM ESTUDIANTE_CUENTA;
