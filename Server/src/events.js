const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here

  //******Insertar escuela******
  router.get('/insertar_escuela', (req, res, next) => {
    db.query(
      'INSERT INTO ESCUELA(id_escuela, nombre) VALUES(?,?)',
      [req.body.id, req.body.nombre],
      (error) => {
        if(error)
        {
          console.error(error);
          res.status(500).json({status:'error'});
        }
        else
        {
          res.status(200).json({status:'ok'});
        }
      }
    );
  });

/*
********************************
**********METODOS POST**********
********************************
*/

  //******Insertar escuela******
  router.post('/insertar_escuela', (req, res, next) => {
    db.query(
      'INSERT INTO ESCUELA(id_escuela, nombre) VALUES(?,?)',
      [req.body.id, req.body.nombre],
      (error) => {
        if(error)
        {
          console.error(error);
          res.status(500).json({status:'error'});
        }
        else
        {
          res.status(200).json({status:'ok'});
        }
      }
    );
  });

  //******Insertar escuela******
  router.post('/registro', (req, res, next) => {
    db.query(
      'INSERT INTO ESCUELA(id_escuela, nombre) VALUES(?,?)',
      [req.body.id, req.body.nombre],
      (error) => {
        if(error)
        {
          console.error(error);
          res.status(500).json({status:'error'});
        }
        else
        {
          res.status(200).json({status:'ok'});
        }
      }
    );
  });

  //******Obtener cursos para mostrarlos al momento de asignar******
router.post('/obtener_seccion', (req, res, next) => {
  db.query(
    'SELECT * FROM SECCION WHERE id_curso',
    [req.body.curso],
    (error, results) => {
      if(error)
      {
        console.error(error);
        res.status(500).json({status:'error'});
      }
      else
      {
        res.status(200).json(results);
      }
    }
  );
});

/*
*******************************
**********METODOS GET**********
*******************************
*/

//******Login******
router.get('/login', (req, res, next) => {
  if(req.body.rol = 'E')
  {
    db.query(
      'SELECT * FROM ESTUDIANTE_CUENTA WHERE login = ? AND password = ?',
      [req.body.login, req.body.password],
      (error, results) => {
        if(error)
        {
          console.error(error);
          res.status(500).json({status:'error'});
        }
        else
        {
          res.status(200).json(results);
        }
      }
    );
  }
  
});

//******Obtener cursos para mostrarlos al momento de asignar******
router.get('/obtener_cursos', (req, res, next) => {
  db.query(
    'SELECT CU.nombre, SE.seccion, SA.numero, ED.nombre,CAT.nombre FROM CURSO CU INNER JOIN SECCION SE ON CU.id_curso = SE.id_curso INNER JOIN SALON SA ON SE.id_salon = SA.id_salon INNER JOIN EDIFICIO ED ON SA.id_edificio = ED.id_edificio INNER JOIN DETALLE_CAT_CURSO DC ON SE.id_seccion = DC.id_seccion INNER JOIN ASIG_CATEDRATICO ASGC ON DC.id_asig_cate = ASGC.id_asig_cate INNER JOIN CATEDRATICO CAT ON ASGC.id_catedratico = CAT.id_catedratico',
    [req.body.login, req.body.password],
    (error, results) => {
      if(error)
      {
        console.error(error);
        res.status(500).json({status:'error'});
      }
      else
      {
        res.status(200).json(results);
      }
    }
  );
});

  return router;
}
module.exports = createRouter;


