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
    if(req.body.nombre != null || req.body.apellido != null ||  req.body.dpi != null)
    {
      if(req.body.rol == 1 && req.body.carnet != null)
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
          'INSERT INTO CATEDRATICO(nombre, apellido, dpi) VALUES(?,?,?)',
          [req.body.nombre, req.body.apellido, req.body.dpi],
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
          'INSERT INTO ADMINISTRADOR(nombre, apellido, dpi) VALUES(?,?,?)',
          [req.body.nombre, req.body.apellido, req.body.dpi],
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

/********* Registrar ciclo académico ********/
router.post('/registrar_ciclo', (req, res, next) => {
  db.query(
    'INSERT INTO CICLO_ACADEMICO(nombre, anio) VALUES(?,?)',
    [req.body.nombre, req.body.anio],
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

router.post('/eliminar_ciclo', (req, res, next) => {
  db.query(
    'DELETE FROM CICLO_ACADEMICO WHERE id_cl_acad = ?',
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

//OBTENER ULTIMA ASIGNACION DE CICLO ACADEMICO
router.get('/ultimo_ciclo', (req, res, next) => {
  db.query(
    'SELECT MAX(id_cl_acad) AS id FROM CICLO_ACADEMICO',
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

/********* Asignar catedrático ********/
router.post('/asignar_catedratico', (req, res, next) => {
  db.query(
    'INSERT INTO ASIG_CATEDRATICO(id_cl_acad, id_catedratico) VALUES(?,?)',
    [req.body.ciclo, req.body.cat],
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

router.post('/eliminar_asig_cat', (req, res, next) => {
  db.query(
    'DELETE FROM ASIG_CATEDRATICO WHERE id_asig_cate = ?',
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

//OBTENER ULTIMA ASIGNACION DE CATEDRATICO
router.get('/ultima_asig_cat', (req, res, next) => {
  db.query(
    'SELECT MAX(id_asig_cate) AS id FROM ASIG_CATEDRATICO',
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

/********* Detalle asig_catedrático ********/
router.post('/detalle_cat_curso', (req, res, next) => {
  db.query(
    'INSERT INTO DETALLE_CAT_CURSO(id_seccion, id_asig_cate) VALUES(?,?)',
    [req.body.seccion, req.body.asignacion],
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

router.post('/eliminar_detalle_cat_curso', (req, res, next) => {
  db.query(
    'DELETE FROM DETALLE_CAT_CURSO WHERE id_seccion = ? AND id_asig_cate = ?',
    [req.body.seccion, req.body.asignacion],
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

/********* Registrar sección ********/
router.post('/registrar_seccion', (req, res, next) => {
  db.query(
    'INSERT INTO SECCION(seccion, id_curso, id_salon) VALUES(?,?,?)',
    [req.body.seccion, req.body.curso, req.body.salon],
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

router.post('/eliminar_seccion', (req, res, next) => {
  db.query(
    'DELETE FROM SECCION WHERE id_seccion = ?',
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

//OBTENER ULTIMA ASIGNACION DE CICLO ACADEMICO
router.get('/ultima_seccion', (req, res, next) => {
  db.query(
    'SELECT MAX(id_seccion) AS id FROM SECCION',
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

/********* Registrar asignacion de estudiante ********/
router.post('/registrar_asig_estudiante', (req, res, next) => {
  db.query(
    'INSERT INTO ASIG_ESTUDIANTE(id_estudiante, id_cl_acad) VALUES(?,?)',
    [req.body.estudiante, req.body.ciclo],
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

router.post('/eliminar_asig_estudiante', (req, res, next) => {
  db.query(
    'DELETE FROM ASIG_ESTUDIANTE WHERE id_asig_est = ?',
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

//OBTENER ULTIMA ASIGNACION DE ESTUDIANTE
router.get('/ultima_asig_estudiante', (req, res, next) => {
  db.query(
    'SELECT MAX(id_asig_est) AS id FROM ASIG_ESTUDIANTE',
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

/********* Registrar asignacion de estudiante ********/
router.post('/detalle_asig_est', (req, res, next) => {
  db.query(
    'INSERT INTO DETALLE_ASIG_EST(id_asig_est, id_seccion, nota, zona) VALUES(?,?,?,?)',
    [req.body.asignacion, req.body.seccion, req.body.nota, req.body.zona],
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

router.post('/eliminar_detalle_asig_est', (req, res, next) => {
  db.query(
    'DELETE FROM DETALLE_ASIG_EST WHERE id_asig_est = ? AND id_seccion = ?',
    [req.body.asignacion, req.body.seccion],
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

  return router;
}
module.exports = createRouter;


