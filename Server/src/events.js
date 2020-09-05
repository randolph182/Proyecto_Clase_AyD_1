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
************************************************************************************************
******************************************METODOS POST******************************************
************************************************************************************************
*/

  //******Registrar cuenta******
  router.post('/registrar_cuenta', (req, res, next) => {
    if(req.body.rol = 1)
    {
      db.query(
        'INSERT INTO ESTUDIANTE_CUENTA(login, password, activo, id_estudiante) VALUES(?,?,?,?)',
        [req.body.login, req.body.password, req.body.activo, req.body.id],
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
    }
    else if(req.body.rol = 2)
    {
      db.query(
        'INSERT INTO CATE_CUENTA(login, password, activo, id_estudiante) VALUES(?,?,?,?)',
        [req.body.login, req.body.password, req.body.activo, req.body.id],
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
    }
    else
    {
      db.query(
        'INSERT INTO ADMIN_CUENTA(login, password, activo, id_estudiante) VALUES(?,?,?,?)',
        [req.body.login, req.body.password, req.body.activo, req.body.id],
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
    }
  });


  /*
  *****************************************************
  ******************Registrar usuario******************
  *****************************************************
  */
  router.post('/registrar_usuario', (req, res, next) => {
    if(req.body.rol = 1)
    {
      db.query(
        'INSERT INTO ESTUDIANTE(nombre, apellido) VALUES(?,?)',
        [req.body.nombre, req.body.apellido],
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
    }
    else if(req.body.rol = 2)
    {
      db.query(
        'INSERT INTO CATEDRATICO(nombre, apellido) VALUES(?,?)',
        [req.body.nombre, req.body.apellido],
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
    }
    else
    {
      db.query(
        'INSERT INTO ADMINISTRADOR(nombre, apellido) VALUES(?,?)',
        [req.body.nombre, req.body.apellido],
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
    }
  });

  /*
  ****************************************************************************
  ************Obtener cursos para mostrarlos al momento de asignar************
  ****************************************************************************
  */
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

//******Login******
router.post('/login', (req, res, next) => {
  if(req.body.rol = 1)
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
          res.status(200).json({status:'ok'});
        }
      }
    );
  }
  if(req.body.rol = 2)
  {
    db.query(
      'SELECT * FROM CATE_CUENTA WHERE login = ? AND password = ?',
      [req.body.login, req.body.password],
      (error, results) => {
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
  }
  else
  {
    db.query(
      'SELECT * FROM ADMIN_CUENTA WHERE login = ? AND password = ?',
      [req.body.login, req.body.password],
      (error, results) => {
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
  }
});

/*
************************************************************************************************
******************************************METODOS POST******************************************
************************************************************************************************
*/

//******Obtener cursos para mostrarlos al momento de asignar******
router.get('/obtener_cursos', (req, res, next) => {
  db.query(
    'SELECT CU.nombre AS curso, SE.seccion AS seccion, SA.numero AS salon, ED.nombre AS edificio, CAT.nombre AS catedratico FROM CURSO CU INNER JOIN SECCION SE ON CU.id_curso = SE.id_curso INNER JOIN SALON SA ON SE.id_salon = SA.id_salon INNER JOIN EDIFICIO ED ON SA.id_edificio = ED.id_edificio INNER JOIN DETALLE_CAT_CURSO DC ON SE.id_seccion = DC.id_seccion INNER JOIN ASIG_CATEDRATICO ASGC ON DC.id_asig_cate = ASGC.id_asig_cate INNER JOIN CATEDRATICO CAT ON ASGC.id_catedratico = CAT.id_catedratico',
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

/*
*****************************************************************
************Obtener lista dependiendo del rol enviado************
*****************************************************************
*/
router.post('/obtener_usuarios', (req, res, next) => {
  if(req.body.rol = 1)
  {
    db.query(
      'SELECT * FROM ESTUDIANTE',
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
  if(req.body.rol = 2)
  {
    db.query(
      'SELECT * FROM CATEDRATICO',
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
  else
  {
    db.query(
      'SELECT * FROM ADMINISTRADOR',
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

  return router;
}
module.exports = createRouter;


