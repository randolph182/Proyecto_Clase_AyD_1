--- MOSTRAR  NOMBRE_CURSO, SECION, SALON, EDIFICIO, CATEDRATICO QUE LA IMPARTE


SELECT CU.nombre, SE.seccion, SA.numero, ED.nombre,CAT.nombre
FROM CURSO CU
INNER JOIN SECCION SE
ON CU.id_curso = SE.id_curso
INNER JOIN SALON SA
ON SE.id_salon = SA.id_salon
INNER JOIN EDIFICIO ED
ON SA.id_edificio = ED.id_edificio
INNER JOIN DETALLE_CAT_CURSO DC
ON SE.id_seccion = DC.id_seccion
INNER JOIN ASIG_CATEDRATICO ASGC
ON DC.id_asig_cate = ASGC.id_asig_cate
INNER JOIN CATEDRATICO CAT
ON ASGC.id_catedratico = CAT.id_catedratico
;