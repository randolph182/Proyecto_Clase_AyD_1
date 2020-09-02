const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
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

  return router;
}
module.exports = createRouter;


