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

//******Login******
router.get('/login', (req, res, next) => {
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
});



  return router;
}
module.exports = createRouter;


