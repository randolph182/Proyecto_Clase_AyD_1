const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here

/*
************************************************************************************************
******************************************METODOS POST******************************************
************************************************************************************************
*/

  //******Registrar cuenta******
  router.post('/registrar_cuenta', (req, res, next) => {
    if(req.body.rol == 1)
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
    else if(req.body.rol == 2)
    {
      db.query(
        'INSERT INTO CATE_CUENTA(login, password, activo, id_catedratico) VALUES(?,?,?,?)',
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
    else if(req.body.rol == 3)
    {
      db.query(
        'INSERT INTO ADMIN_CUENTA(login, password, activo, id_admin) VALUES(?,?,?,?)',
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
    if(req.body.nombre != null && req.body.apellido != null)
    {
      if(req.body.rol == 1 && req.body.carnet != null && req.body.dpi != null)
      {
        db.query(
          'INSERT INTO ESTUDIANTE(nombre, apellido, carnet, dpi) VALUES(?,?,?,?)',
          [req.body.nombre, req.body.apellido, req.body.carnet, req.body.dpi],
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
      else if(req.body.rol == 2)
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
      else if(req.body.rol == 3)
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
      else
      {
        res.status(500).json({status:'error'});
      }
    }
    else
    {
      res.status(500).json({status:'error'});
    }
  });


/*
***********************************
  ************ ESCUELA ************
  *********************************

*/


// REGISTRO DE ESCUELA

router.post('/registrar_escuela', (req, res, next) => {
  db.query(
    'INSERT INTO ESCUELA(nombre) VALUES(?)',
    [req.body.nombre],
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
  )
});

// OBTENCION DE ESCUELA 
router.get('/obtener_escuelas', (req, res, next) => {
  db.query(
    'SELECT * FROM ESCUELA',
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

router.post('/eliminar_escuela', (req, res, next) => {
  db.query(
    'DELETE FROM ESCUELA WHERE id_escuela = ?',
    [req.body.id],
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
  )
});

//OBTENER ULTIMO REGISTRO DE ESCUELA
  router.get('/ultima_escuela', (req, res, next) => {
    db.query(
      'SELECT MAX(id_escuela) AS id FROM ESCUELA',
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
  *******************************************
  ************Registrar congresos************
  *******************************************
  */

 router.post('/registrar_congreso', (req, res, next) => {
  db.query(
    'INSERT INTO CONGRESO(nombre, ubicacion, descripcion, anio, id_escuela) VALUES(?,?,?,?,?)',
    [req.body.nombre, req.body.ubicacion, req.body.descripcion, req.body.anio, req.body.id],
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
  )
});

//OBTENER ULTIMO REGISTRO DE CCONGRESO
router.get('/ultimo_congreso', (req, res, next) => {
  db.query(
    'SELECT MAX(id_congreso) AS id FROM CONGRESO',
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

router.post('/eliminar_congreso', (req, res, next) => {
  db.query(
    'DELETE FROM CONGRESO WHERE id_congreso = ?',
    [req.body.id],
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
  )
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
  if(req.body.rol == 1)
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
  else if(req.body.rol == 2)
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
  else if(req.body.rol == 3)
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
router.get('/obtener_usuarios/:rol', (req, res, next) => {
  const {rol} = req.params;
  if(rol == 1)
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
  else if(rol == 2)
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
  else if(rol == 3)
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


/*
************************************************************************************************
******************************************METODOS PUT*******************************************
************************************************************************************************
*/

//******Actualizar datos de los usuarios******
router.put('/actualizacion_datos', (req, res, next) => {
  if(req.body.rol == 1)
  {
    db.query(
      'UPDATE ESTUDIANTE SET nombre = ?, apellido = ? WHERE id_estudiante=?',
      [req.body.nombre, req.body.apellido ,req.body.id],
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
  else if(req.body.rol == 2)
  {
    db.query(
      'UPDATE CATEDRATICO SET nombre = ?, apellido = ? WHERE id_catedratico=?',
      [req.body.nombre, req.body.apellido ,req.body.id],
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
  else if(req.body.rol == 3)
  {
    db.query(
      'UPDATE ADMINISTRADOR SET nombre = ?, apellido = ? WHERE id_admin=?',
      [req.body.nombre, req.body.apellido ,req.body.id],
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

//******Dar de baja a los usuarios******
router.put('/baja_cuenta', (req, res, next) => {
  if(req.body.rol == 1)
  {
    db.query(
      'UPDATE ESTUDIANTE_CUENTA SET activo = 0 WHERE id_estudiante=?',
      [req.body.id],
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
  else if(req.body.rol == 2)
  {
    db.query(
      'UPDATE CATE_CUENTA SET activo = 0 WHERE id_catedratico=?',
      [req.body.id],
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
  else if(req.body.rol == 3)
  {
    db.query(
      'UPDATE ADMIN_CUENTA SET activo = 0 WHERE id_admin=?',
      [req.body.id],
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

//Modificar escuela
router.post('/modificar_escuela', (req, res, next) => {
  db.query(
    'UPDATE ESCUELA SET nombre = ? WHERE id_escuela = ?',
    [req.body.nombre, req.body.id],
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
  )
});

/********* Registrar cursos ********/
router.post('/registrar_curso', (req, res, next) => {
  db.query(
    'INSERT INTO CURSO(nombre, no_creditos, descripcion, id_escuela) VALUES(?,?,?,?)',
    [req.body.nombre, req.body.creditos, req.body.descripcion, req.body.id],
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
});

router.post('/eliminar_curso', (req, res, next) => {
  db.query(
    'DELETE FROM CURSO WHERE id_curso = ?',
    [req.body.id],
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
  )
});

//OBTENER ULTIMO REGISTRO DE CURSO
router.get('/ultimo_curso', (req, res, next) => {
  db.query(
    'SELECT MAX(id_curso) AS id FROM CURSO',
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


