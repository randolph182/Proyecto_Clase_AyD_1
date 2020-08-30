const { Router } = require('express');
const router = Router();
const cnn = require('../config/configdb');
var nodemailer = require('nodemailer');
var fs = require('fs');
var path = require('path');
var dateFormat = require('dateformat');
var now = new Date();

//Convertir imagenes a base 64
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

//-------REGISTRAR USUARIO------
router.post('/registrar', async (req, res) => {
    const { nombre, apellido, correo, password, telefono, direccion, fecha_nacimiento, genero, fecha_registro, rol } = req.body;

    sql = "SELECT  * FROM USUARIO WHERE correo=:correo";

    let result = await cnn.Open(sql, [correo], true, res);

    console.log(result.rows);

    if (result.rows.length > 0) {
        res.json({
            "response": false,
            "datos_usuario": {}
        });
    }
    else {

        sql = "INSERT INTO USUARIO(nombre, apellido, correo, pass, telefono, direccion, fecha_nacimiento, genero, fecha_registro, rol) VALUES ( :nombre, :apellido,  :correo, :password, :telefono, :direccion, TO_DATE(:fecha_nacimiento, 'dd/mm/yyyy'),  :genero, TO_DATE(:fecha_registro, 'dd/mm/yyyy'), :rol)";

        let respuesta = await cnn.Open(sql, [nombre, apellido, correo, password, telefono, direccion, fecha_nacimiento, genero, fecha_registro, rol], true, res);

        console.log(nombre, apellido, correo, password, telefono, direccion, fecha_nacimiento, genero, fecha_registro, rol);

        let datos_usuario = {
            "nombre": nombre,
            "apellido": apellido,
            "correo": correo,
            "password": password,
            "telefono": telefono,
            "direccion": direccion,
            "fecha_nacimiento": fecha_nacimiento,
            "genero": genero,
            "fecha_registro": fecha_registro,
            "rol": rol
        }

        res.json({
            "response": true,
            "datos_usuario": datos_usuario
        });

    }
})

//-------REGISTRAR ADMIN------
router.post('/registrar_admin', async (req, res) => {
    const { nombre, apellido, correo, password, telefono, direccion, fecha_nacimiento, fotografia, genero, fecha_registro, rol, clase, credito, estado, ganancia } = req.body;

    sql = "SELECT  * FROM USUARIO WHERE correo=:correo";

    let result = await cnn.Open(sql, [correo], true, res);

    console.log(result.rows);
    if (result.rows.length > 0) {
        res.json({
            "response": false,
            "datos_usuario": ""
        });
    }
    else {

        sql = "INSERT INTO USUARIO(nombre, apellido, correo, pass, telefono, direccion, fecha_nacimiento, fotografia, genero, fecha_registro, rol, clase, credito, estado, ganancia) VALUES ( :nombre, :apellido,  :correo, :password, :telefono, :direccion, TO_DATE(:fecha_nacimiento, 'dd/mm/yyyy'), :fotografia, :genero, TO_DATE(:fecha_registro, 'dd/mm/yyyy'), :rol, :clase, :credito, :estado, :ganancia)";

        let respuesta = await cnn.Open(sql, [nombre, apellido, correo, password, telefono, direccion, fecha_nacimiento, fotografia, genero, fecha_registro, rol, clase, credito, estado, ganancia], true, res);

        var tipo = "";

        if (rol == 1) {
            tipo = "Administrador";
        }
        else if (rol == 2) {
            tipo = "Servicio de Ayuda";
        }

        res.json({
            "response": true,
            "datos_usuario": ""
        });

    }
})

//------ DATOS CUENTA ------
router.post('/get_cuenta', async (req, res) => {

    const { correo } = req.body;

    sql = "SELECT  * FROM USUARIO WHERE correo=:correo";

    let result = await cnn.Open(sql, [correo], true, res);


    if (result.rows.length > 0) {
        let datos_usuario = {
            "nombre": result.rows[0][1],
            "apellido": result.rows[0][2],
            "password": result.rows[0][3],
            "correo": result.rows[0][4],
            "telefono": result.rows[0][5],
            "genero": result.rows[0][7],
            "fecha_nacimiento": result.rows[0][8],
            "fecha_registro": result.rows[0][9],
            "direccion": result.rows[0][10],
            "rol": result.rows[0][14]
        }

        res.json({
            "response": true,
            "datos_usuario": datos_usuario
        });
    }
})


//------- LOGIN ------
router.post('/login', async (req, res) => {

    const { correo, password } = req.body;

    sql = "SELECT  * FROM USUARIO WHERE correo=:correo AND pass=:password";

    let result = await cnn.Open(sql, [correo, password], true, res);


    if (result.rows.length > 0) {
        let datos_usuario = {
            "nombre": result.rows[0][1],
            "apellido": result.rows[0][2],
            "password": result.rows[0][3],
            "correo": result.rows[0][4],
            "telefono": result.rows[0][5],
            "genero": result.rows[0][7],
            "fecha_nacimiento": result.rows[0][8],
            "fecha_registro": result.rows[0][9],
            "direccion": result.rows[0][10],
            "rol": result.rows[0][14]
        }

        if (result.rows[0][15] == 1) {
            res.json({
                "response": true,
                "datos_usuario": datos_usuario
            });
        } else {
            res.json({
                "response": false,
                "datos_usuario": datos_usuario
            });
        }

    } else {
        res.json({
            "response": false,
            "datos_usuario": {}
        });
    }

})


//-------VALIDAR USUARIO------
router.put('/validar', async (req, res) => {
    const { estado, correo } = req.body;

    sql = "UPDATE USUARIO SET estado=:estado WHERE correo=:correo";

    let result = await cnn.Open(sql, [estado, correo], true, res);

    if (result.rowsAffected) {
        res.json({
            "response": true,


        });
    } else {
        res.json({
            "response": false

        });
    }
})

//-------ELIMINAR USUARIO------
router.put('/eliminar', async (req, res) => {
    const { estado, correo } = req.body;

    sql = "UPDATE USUARIO SET estado=:estado WHERE correo=:correo";

    let result = await cnn.Open(sql, [estado, correo], true, res);

    sql = "UPDATE PRODUCTO SET estado=0 WHERE id_usuario=(SELECT id_usuario FROM USUARIO WHERE correo=:correo)" ;
    let resu = await cnn.Open(sql, [correo], true, res);

    if (result.rowsAffected) {
        res.json({
            "response": true,
        });
    } else {
        res.json({
            "response": false

        });
    }
})

//-------UPDATE USUARIO------
router.put('/update_usuario', async (req, res) => {

    const { nombre, apellido, direccion, telefono, password, correo } = req.body;

    sql = "UPDATE USUARIO SET nombre=:nombre, apellido=:apellido, direccion=:direccion, telefono=:telefono, pass=:password WHERE correo=:correo";

    let resultado = await cnn.Open(sql, [nombre, apellido, direccion, telefono, password, correo], true, res);

    s = "SELECT * FROM USUARIO WHERE correo=:correo";

    let r = await cnn.Open(s, [correo], true, res);

    let datos_usuario = {
        "nombre": r.rows[0][1],
        "apellido": r.rows[0][2],
        "password": r.rows[0][3],
        "correo": r.rows[0][4],
        "telefono": r.rows[0][5],
        "fotografia": r.rows[0][6],
        "genero": r.rows[0][7],
        "fecha_nacimiento": r.rows[0][8],
        "fecha_registro": r.rows[0][9],
        "direccion": r.rows[0][10],
        "credito": r.rows[0][11],
        "ganancia": r.rows[0][12],
        "clase": r.rows[0][13],
        "rol": r.rows[0][14],
        "estado": r.rows[0][15]
    }

    if (resultado.rowsAffected) {

        res.json({
            "response": true,
            "datos_usuario": datos_usuario
        });
    } else {
        res.json({
            "response": false,
            "datos_usuario": datos_usuario
        });
    }
})

//------ OBTENER USUARIO ------
router.get('/get_users', async (req, res) => {

    sql = "SELECT * FROM USUARIO"

    let result = await cnn.Open(sql, [], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "id": user[0],
            "nombre": user[1],
            "apellido": user[2],
            "password": user[3],
            "correo": user[4],
            "telefono": user[5],
            "fotografia": user[6],
            "genero": user[7],
            "fecha_nacimiento": dateFormat(user[8], 'dd/mm/yyyy'),
            "fecha_registro": dateFormat(user[9], 'dd/mm/yyyy'),
            "direccion": user[10],
            "credito": user[11],
            "ganancia": user[12],
            "clase": user[13],
            "rol": user[14],
            "estado": user[15]
        }


        Users.push(userSchema);
    })

    res.json(Users);

})

//------ UPDATE USUARIO ------
router.put('/update_users', async (req, res) => {

    const { nombre, apellido, correo, password, direccion, telefono, genero, fotografia, estado, rol, nacimiento } = req.body;

    sql = "UPDATE USUARIO SET nombre=:nombre, apellido=:apellido, direccion=:direccion, telefono=:telefono, pass=:password, genero=:genero, fotografia=:fotografia, estado=:estado, rol=:rol, fecha_nacimiento=TO_DATE(:nacimiento, 'dd/mm/yyyy') WHERE correo=:correo";

    let resultado = await cnn.Open(sql, [nombre, apellido, direccion, telefono, password, genero, fotografia, estado, rol, nacimiento, correo], true, res);

    if (resultado.rowsAffected) {

        res.json({
            "response": true
        });
    } else {
        res.json({
            "response": false
        });
    }

})

//------ OBTENER ARBOL ------
router.get('/get_arbol', async (req, res) => {

    arbol = [];

    sql = "SELECT * FROM CATEGORIA";
    let cat = await cnn.Open(sql, [], false);

    sql = "SELECT * FROM PRODUCTO WHERE estado=1";
    let prod = await cnn.Open(sql, [], false);

    if (cat.rows.length > 0) {
        cat.rows.map(categoria => {
            if (categoria[3] != null) {
                var data_cat = {
                    "id": categoria[0],
                    "pid": categoria[3],
                    "name": categoria[1],
                    "hasChild": true
                }
                arbol.push(data_cat);
            }
            else {
                var data_cat = {
                    "id": categoria[0],
                    "name": categoria[1],
                    "hasChild": true
                }
                arbol.push(data_cat);
            }

            if (prod.rows.length > 0) {
                prod.rows.map(producto => {
                    if (producto[4] == categoria[0]) {
                        var data_producto = {
                            "id": producto[0],
                            "pid": producto[4],
                            "name": producto[2]
                        }
                        arbol.push(data_producto);
                    }
                })
            }
        })
        console.log(arbol);
    }

    res.json(arbol);

})


//------ REPORTE AYUDA MASCULINO ------
router.post('/rep_am', async (req, res) => {

    const { year } = req.body;

    sql = "SELECT id_usuario, nombre, apellido, correo, telefono, TO_CHAR(fecha_nacimiento, 'dd/mm/yyyy'), direccion FROM USUARIO WHERE EXTRACT(year from FECHA_NACIMIENTO) > :year AND ROL = 2 AND GENERO = 1";

    let resultado = await cnn.Open(sql, [year], true, res);
    Users = [];

    resultado.rows.map(user => {
        let userSchema = {
            "id": user[0],
            "nombre": user[1],
            "apellido": user[2],
            "correo": user[3],
            "telefono": user[4],
            "nacimiento": user[5],
            "direccion": user[6]
        }
        Users.push(userSchema);
    })

    res.json(Users);
})

//------ REPORTE ADMIN FEMENINO ------
router.post('/rep_adf', async (req, res) => {

    const { year } = req.body;

    sql = "SELECT id_usuario, nombre, apellido, correo, telefono, TO_CHAR(fecha_nacimiento, 'dd/mm/yyyy'), direccion FROM USUARIO WHERE EXTRACT(year from FECHA_NACIMIENTO) < :year AND ROL = 1 AND GENERO = 2";

    let resultado = await cnn.Open(sql, [year], true, res);
    Users = [];

    resultado.rows.map(user => {
        let userSchema = {
            "id": user[0],
            "nombre": user[1],
            "apellido": user[2],
            "correo": user[3],
            "telefono": user[4],
            "nacimiento": user[5],
            "direccion": user[6]
        }
        Users.push(userSchema);
    })

    res.json(Users);
})

//------ REPORTE GANANCIAS ------
router.get('/rep_ganancias', async (req, res) => {


    sql = "SELECT id_usuario, nombre, apellido, correo, ganancia FROM USUARIO WHERE ROL = 3 ORDER BY (ganancia) DESC";

    let resultado = await cnn.Open(sql, [], false);
    Users = [];

    resultado.rows.map(user => {
        let userSchema = {
            "id": user[0],
            "nombre": user[1],
            "apellido": user[2],
            "correo": user[3],
            "ganancia": user[4]
        }
        Users.push(userSchema);
    })

    res.json(Users);
    console.log(Users);
})

//------ REPORTE CANTIDAD PRODUCTO ------
router.post('/rep_cant_prod', async (req, res) => {

    const { cantidad } = req.body;

    sql = "SELECT * FROM PRODUCTO WHERE cantidad=:cantidad";

    let resultado = await cnn.Open(sql, [cantidad], true, res);
    Users = [];

    resultado.rows.map(user => {

        let userSchema = {
            "codigo": user[1],
            "nombre": user[2],
            "precio": user[5],
            "cantidad": cantidad
        }
        Users.push(userSchema);
    })

    res.json(Users);
})

//------ REPORTE PRODUCTO COMENTARIO ------
router.post('/rep_prod_com', async (req, res) => {

    const { fecha } = req.body;

    sql = "SELECT codigo, nombre, precio, (SELECT COUNT(id_comentario) FROM COMENTARIO WHERE COMENTARIO.id_producto=PRODUCTO.id_producto AND fecha = TO_DATE(:fecha, 'dd/mm/yyyy')) AS comentarios FROM PRODUCTO"

    let resultado = await cnn.Open(sql, [fecha], true, res);
    Users = [];

    resultado.rows.map(user => {
        let userSchema = {
            "codigo": user[0],
            "nombre": user[1],
            "precio": user[2],
            "comentarios": user[3],
            "fecha": fecha
        }

        Users.push(userSchema);
    })

    res.json(Users);


})

//------ REPORTE TOP 3 PRODUCTOS VENDIDOS ------
router.get('/rep_top_prod_vent', async (req, res) => {
    sql = "SELECT nombre, codigo, (SELECT COALESCE(SUM(cantidad), 0) FROM MASTER_FACTURA WHERE MASTER_FACTURA.id_producto=PRODUCTO.id_producto) as vendidos FROM PRODUCTO ORDER BY vendidos DESC FETCH FIRST 3 ROWS ONLY";
    let resul = await cnn.Open(sql, [], false);
    Users = [];

    resul.rows.map(user => {
        let userSchema = {
            "nombre": user[0],
            "codigo": user[1],
            "ventas": user[2]
        }

        Users.push(userSchema);
    })

    res.json(Users);

})

//------ REPORTE TOP 3 USUARIO CON MAS PRODUCTOS ------
router.get('/rep_top_prod_user', async (req, res) => {
    sql = "SELECT (SELECT nombre FROM USUARIO WHERE id_usuario = PRODUCTO.id_usuario) as nombre, (SELECT correo FROM USUARIO WHERE id_usuario = PRODUCTO.id_usuario) as correo, COUNT(PRODUCTO.id_producto) AS productos FROM PRODUCTO, USUARIO WHERE PRODUCTO.id_usuario = USUARIO.id_usuario AND PRODUCTO.estado=1 GROUP BY PRODUCTO.id_usuario ORDER BY productos DESC FETCH FIRST 3 ROWS ONLY";
    let resul = await cnn.Open(sql, [], false);
    Users = [];

    resul.rows.map(user => {
        let userSchema = {
            "nombre": user[0],
            "codigo": user[1],
            "ventas": user[2]
        }

        Users.push(userSchema);
    })

    res.json(Users);

})

//------ REPORTE PROMEDIO PRODUCTOS ------
router.get('/rep_prom_prod', async (req, res) => {
    sql = "SELECT nombre, codigo,  (ROUND(AVG(ponderacion))) AS promedio FROM PRODUCTO, COMENTARIO WHERE Producto.id_producto = comentario.id_producto GROUP BY nombre,codigo ORDER BY promedio DESC";
    let resul = await cnn.Open(sql, [], false);
    Users = [];

    resul.rows.map(user => {
        let userSchema = {
            "nombre": user[0],
            "codigo": user[1],
            "ventas": user[2]
        }

        Users.push(userSchema);
    })

    res.json(Users);

})

//------ REPORTE PRODUCTOS CATEGORIA ------
router.get('/rep_prod_cat', async (req, res) => {
    sql = "SELECT nombre, codigo, (SELECT nombre FROM CATEGORIA WHERE CATEGORIA.id_categoria=PRODUCTO.categoria) as categoria FROM PRODUCTO WHERE estado = 1";
    let resul = await cnn.Open(sql, [], false);
    Users = [];

    resul.rows.map(user => {
        let userSchema = {
            "nombre": user[0],
            "codigo": user[1],
            "categoria": user[2]
        }

        Users.push(userSchema);
    })

    res.json(Users);

})

//------ REPORTE TOP 3 PEORES PRODUCTOS ------
router.get('/rep_top_peor_prod', async (req, res) => {
    sql = "SELECT nombre, codigo,  (ROUND(AVG(ponderacion), 2)) AS promedio FROM PRODUCTO, COMENTARIO WHERE Producto.id_producto = comentario.id_producto GROUP BY nombre,codigo ORDER BY promedio ASC FETCH FIRST 3 ROWS ONLY";
    let resul = await cnn.Open(sql, [], false);
    Users = [];

    resul.rows.map(user => {
        let userSchema = {
            "nombre": user[0],
            "codigo": user[1],
            "ventas": user[2]
        }

        Users.push(userSchema);
    })

    res.json(Users);

})

//------ OBTENER PRODUCTO -----
router.post('/obtener_producto', async (req, res) => {

    const { id } = req.body;
    console.log("el id: " + id);

    sql = "SELECT * FROM PRODUCTO WHERE id_producto=:id AND estado=1";

    let resultado = await cnn.Open(sql, [id], true, res);
    console.log(resultado.rows);

    console.log(resultado.rows.length);

    if (resultado.rows.length > 0) {
        const c = resultado.rows[0][4];
        sql = "SELECT nombre FROM CATEGORIA WHERE id_categoria=:c";
        let resu = await cnn.Open(sql, [c], true, res);
        console.log(resu.rows);

        var u = resultado.rows[0][8];
        sql = "SELECT correo FROM USUARIO WHERE id_usuario=:u";
        let r = await cnn.Open(sql, [u], true, res);
        console.log(r.rows);

        sql = "SELECT ROUND(AVG(ponderacion),2) AS promedio FROM COMENTARIO WHERE id_producto=:id";
        let resul = await cnn.Open(sql, [id], true, res);

        var pun = 0;
        if(resul.rows[0][0]!=null)
        {
            pun = resul.rows[0][0];
        }

        let ex = path.extname(resultado.rows[0][3]);
        ex = ex.substring(1);

        res.json({
            "codigo": resultado.rows[0][1],
            "nombre": resultado.rows[0][2],
            "categoria": resu.rows[0][0],
            "imagen": "data:image/" + ex + ";base64," + base64_encode(resultado.rows[0][3]),
            "precio": resultado.rows[0][5],
            "propietario": r.rows[0][0],
            "cantidad": resultado.rows[0][7],
            "descripcion": resultado.rows[0][10],
            "promedio": pun
        })
    }

})

//------ EDITAR PRODUCTO ------
router.post('/editar_producto', async (req, res) => {
    const { codigo, nombre, descripcion, precio, cantidad, id } = req.body;

    sql = "UPDATE PRODUCTO SET codigo=:codigo, nombre=:nombre, descripcion=:descripcion, precio=:precio, cantidad=:cantidad WHERE id_producto=:id";
    let resu = await cnn.Open(sql, [codigo, nombre, descripcion, precio, cantidad, id], true, res);

    res.json({

    });
})

//------ COMENTAR ------
router.post('/comentar', async (req, res) => {
    const { id, correo, ponderacion, titulo, comentario, fecha } = req.body;

    sql = "SELECT id_usuario FROM USUARIO WHERE correo=:correo";

    let result = await cnn.Open(sql, [correo], true, res);
    const i = result.rows[0][0];
    console.log(i);

    sql = "INSERT INTO COMENTARIO(id_usuario, id_producto, fecha, titulo, ponderacion, comentario) VALUES(:i, :id, TO_DATE(:fecha, 'dd/mm/yyyy'), :titulo, :ponderacion, :comentario)";
    let re = await cnn.Open(sql, [i, id, fecha, titulo, ponderacion, comentario], true, res);

    if (re.rowsAffected > 0) {

        res.json({
            "response": true
        })
    }
    else {
        res.json({
            "response": false
        })
    }

})

//------ GET COMENTARIOS ------
router.post('/get_comentarios', async (req, res) => {
    const { id } = req.body;

    sql = "SELECT (SELECT correo FROM USUARIO WHERE USUARIO.id_usuario=COMENTARIO.id_usuario) AS correo, fecha, titulo, ponderacion, comentario, id_comentario FROM COMENTARIO WHERE id_producto=:id ORDER BY(id_comentario)"
    let result = await cnn.Open(sql, [id], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "usuario": user[0],
            "fecha": user[1],
            "titulo": user[2],
            "ponderacion": user[3],
            "comentario": user[4],
            "id": user[5]
        }

        Users.push(userSchema);
    })

    res.json(Users);

})

//------ BORRAR COMENTARIOS ------
router.post('/borrar_comentario', async (req, res) => {
    const { id } = req.body;

    sql = "DELETE FROM COMENTARIO WHERE id_comentario = :id";
    let result = await cnn.Open(sql, [id], true, res);
    res.json({
        "response": true
    });
})

//------ MIS PRODUCTOS ------
router.post('/mis_productos', async (req, res) => {
    const { correo } = req.body;

    sql = "SELECT id_usuario FROM USUARIO WHERE correo=:correo";
    let resultado = await cnn.Open(sql, [correo], true, res);

    var i = resultado.rows[0][0];

    sql = "SELECT codigo, nombre, (SELECT nombre FROM CATEGORIA WHERE CATEGORIA.id_categoria = PRODUCTO.categoria) AS categoria, imagen, precio, cantidad, descripcion, TO_CHAR(publicacion, 'dd/mm/yyyy'), id_producto FROM PRODUCTO WHERE id_usuario =:i AND estado=1";
    let resu = await cnn.Open(sql, [i], true, res);
    Users = [];

    resu.rows.map(user => {
        let ex = path.extname(user[3]);
        ex = ex.substring(1);
        let userSchema = {
            "codigo": user[0],
            "nombre": user[1],
            "categoria": user[2],
            "imagen": "data:image/" + ex + ";base64," + base64_encode(user[3]),
            "precio": user[4],
            "cantidad": user[5],
            "descripcion": user[6],
            "publicacion": user[7],
            "id": user[8]
        }

        Users.push(userSchema);
    })

    res.json(Users);
})

//------ ELIMINAR PRODUCTOS ------
router.post('/eliminar_producto', async (req, res) => {
    const { id } = req.body;

    sql = "UPDATE PRODUCTO SET estado=0 WHERE id_producto=:id";
    let result = await cnn.Open(sql, [id], true, res);

    sql = "DELETE FROM CARRITO WHERE id_producto=:id";
    let resu = await cnn.Open(sql, [id], true, res);

    if (result.rowsAffected > 0) {
        res.json({
            "response": true
        })
    }
    else {
        res.json({
            "response": false
        })
    }
})

//------ AGREGAR CARRITO ------
router.post('/agregar_carrito', async (req, res) => {
    const { id_prod, correo, cantidad } = req.body;

    //Verifica si existe un registro con el producto y el id de cliente
    sql = "SELECT cantidad FROM CARRITO WHERE id_producto=:id_prod AND id_usuario=(SELECT id_usuario FROM USUARIO WHERE correo=:correo)";
    let r = await cnn.Open(sql, [id_prod, correo], true, res);

    if (r.rows.length > 0) { //Si existe jala el valor de la cantidad y los suma con el nuevo y actualiza
        var c = r.rows[0][0];

        //Resta la nueva cantidad a la cantidad de producto
        sql = "UPDATE PRODUCTO SET cantidad=(cantidad-:cantidad) WHERE id_producto=:id_prod";
        let r2 = await cnn.Open(sql, [cantidad, id_prod], true, res);

        var i = c + cantidad;
        sql = "UPDATE CARRITO SET cantidad=:i, total=(:i * (SELECT precio FROM PRODUCTO WHERE id_producto=:id_prod)) WHERE id_usuario=(SELECT id_usuario FROM USUARIO WHERE correo=:correo) AND id_producto=:id_prod";
        let re = await cnn.Open(sql, [i, i, id_prod, correo, id_prod], true, res);

        res.json({
            "response": true
        })

    }
    else { //Si no existe simplemente lo inserta

        sql = "INSERT INTO CARRITO(id_usuario, id_producto, cantidad, total) VALUES((SELECT id_usuario FROM USUARIO WHERE correo=:correo), :id_prod, :cantidad, :cantidad * (SELECT precio FROM PRODUCTO WHERE id_producto=:id_prod))";
        let resultado = await cnn.Open(sql, [correo, id_prod, cantidad], true, res);

        if (resultado.rowsAffected > 0) {
            sql = "UPDATE PRODUCTO SET cantidad=(cantidad-:cantidad) WHERE id_producto=:id_prod";
            let resu = await cnn.Open(sql, [cantidad, id_prod], true, res);

            if (resu.rowsAffected > 0) {
                res.json({
                    "response": true
                });
            }
            else {

                res.json({
                    "response": false
                });
            }
        }
        else {
            res.json({
                "response": false
            });
        }
    }
})


//------ GET CARRITO ------
router.post('/get_carrito', async (req, res) => {
    const { correo } = req.body;

    sql = "SELECT (SELECT codigo FROM PRODUCTO WHERE PRODUCTO.id_producto=CARRITO.id_producto) AS codigo, (SELECT nombre FROM PRODUCTO WHERE PRODUCTO.id_producto=CARRITO.id_producto) AS nombre, (SELECT imagen FROM PRODUCTO WHERE PRODUCTO.id_producto=CARRITO.id_producto) AS imange, cantidad, total, id_producto, (SELECT precio FROM PRODUCTO WHERE PRODUCTO.id_producto=CARRITO.id_producto) FROM CARRITO WHERE id_usuario = (SELECT id_usuario FROM USUARIO WHERE correo=:correo)";
    let result = await cnn.Open(sql, [correo], true, res);
    Users = [];

    result.rows.map(user => {
        let ex = path.extname(user[2]);
        ex = ex.substring(1);
        let userSchema = {
            "codigo": user[0],
            "nombre": user[1],
            "imagen": "data:image/" + ex + ";base64," + base64_encode(user[2]),
            "cantidad": user[3],
            "total": user[4],
            "id": user[5],
            "precio": user[6]
        }
        Users.push(userSchema);
    })

    res.json(Users);

})

//------ TOTAL CARRITO ------
router.post('/get_total_carrito', async (req, res) => {
    const { correo } = req.body;

    sql = "SELECT SUM(total) FROM CARRITO WHERE id_usuario = (SELECT id_usuario FROM USUARIO WHERE correo=:correo)"
    let resultado = await cnn.Open(sql, [correo], true, res);

    if(resultado.rows[0][0]!= null)
    {
        res.json({
            "total": resultado.rows[0][0]
        })
    }
    else
    {
        res.json({
            "total": 0
        })
    }
    
})

//------ BORRAR PRODUCTO DE CARRITO------
router.post('/borrar_prod_carrito', async (req, res) => {
    const { id_prod, correo } = req.body;

    sql = "SELECT cantidad FROM CARRITO WHERE id_producto=:id_prod";
    let resu = await cnn.Open(sql, [id_prod], false);
    var c = resu.rows[0][0];

    sql = "UPDATE PRODUCTO SET cantidad=(cantidad + :c) WHERE id_producto=:id_prod";
    let r = await cnn.Open(sql, [c, id_prod], true, res);

    sql = "DELETE FROM CARRITO WHERE id_producto=:id_prod AND id_usuario=(SELECT id_usuario FROM USUARIO WHERE correo=:correo)"
    let resultado = await cnn.Open(sql, [id_prod, correo], true, res);

    res.json({
        "response": true
    });
})

//------ PRODUCTOS TOTALES CARRITO ------
router.post('/cantidad_carrito', async (req, res) => {
    const { correo } = req.body;

    sql = "SELECT SUM(cantidad) FROM CARRITO WHERE id_usuario = (SELECT id_usuario FROM USUARIO WHERE correo=:correo)";
    let resul = await cnn.Open(sql, [correo], false);

    if(resul.rows[0][0] != null)
    {
        res.json({
            "total": resul.rows[0][0]
        })
    }
    else{
        res.json({
            "total": 0
        })
    }
})

//------ BORRAR CARRITO ------
router.post('/borrar_carrito', async (req, res) => {
    const { correo } = req.body;

    sql = "DELETE FROM CARRITO WHERE id_usuario=(SELECT id_usuario FROM USUARIO WHERE correo=:correo)"
    let resul = await cnn.Open(sql, [correo], true, res);

    res.json({
        "response": true
    })
})

//------ FACTURA ------
router.post('/factura', async (req, res) => {
    const { correo, total } = req.body;

    sql = "SELECT id_usuario FROM usuario WHERE correo=:correo";
    let re = await cnn.Open(sql, [correo], false);
    var i = re.rows[0][0];

    sql = "INSERT INTO FACTURA(id_usuario, total) VALUES(:i, :total)";
    let resultado = await cnn.Open(sql, [i, total], true, res);

    if (resultado.rowsAffected > 0) {
        sql = "SELECT MAX(id_factura) FROM FACTURA";
        let r = await cnn.Open(sql, [], false);

        res.json({
            "id": r.rows[0][0]
        })

    }
})

//------ MASTER FACTURA ------
router.post('/master_factura', async (req, res) => {
    const { id_factura, id_producto, precio, cantidad, total } = req.body;

    sql = "INSERT INTO MASTER_FACTURA(id_factura, id_producto, precio, cantidad, total) VALUES(:id_factura, :id_producto, :precio, :cantidad, :total)";
    let resultado = await cnn.Open(sql, [id_factura, id_producto, precio, cantidad, total], true, res);

    //Suma el total a la ganancia del dueño del producto
    sql = "UPDATE USUARIO SET ganancia=(ganancia + :total) WHERE id_usuario = (SELECT id_usuario FROM PRODUCTO WHERE id_producto=:id_producto)";
    let resu = await cnn.Open(sql, [total, id_producto], true, res);

    //Resta el total al credito del cliente
    sql = "UPDATE USUARIO SET credito=(credito - :total) WHERE id_usuario = (SELECT id_usuario FROM FACTURA WHERE id_factura=:id_factura)";
    let r = await cnn.Open(sql, [total, id_factura], true, res);

    if (resultado.rowsAffected > 0) {
        res.json({
            "response": true
        })
    }
    else {
        res.json({
            "response": false
        })
    }

})

//------ CORREO FACTURA ------
router.post('/correo_factura', async (req, res) => {

    const { id_factura, detalle } = req.body;

    sql = "SELECT id_usuario, total FROM FACTURA WHERE id_factura=:id_factura";
    let re = await cnn.Open(sql, [id_factura], false);
    var i = re.rows[0][0];

    sql = "SELECT correo FROM USUARIO WHERE id_usuario=:i"
    let resu = await cnn.Open(sql, [i], false);
    var correo = resu.rows[0][0];

    //Credenciales para mandar correo
    var transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'alerod620@gmail.com',
            pass: 's1t2a3r4'
        }
    });

    var mail_option = {
        from: 'Alejandro <alerod620@gmail.com>',
        to: correo,
        subject: 'Compra exitosa',
        text: 'Haz realizado la compra con un total de: ' + re.rows[0][1]
    }

    transport.sendMail(mail_option, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        return info.messageId;
    });
})

//------ CORREO VENTA ------
router.post('/correo_venta', async (req, res) => {
    const { id_producto, cantidad, total } = req.body;

    sql = "SELECT nombre, (SELECT correo FROM USUARIO WHERE USUARIO.id_usuario=PRODUCTO.id_usuario) FROM PRODUCTO WHERE id_producto=:id_producto";
    let resu = await cnn.Open(sql, [id_producto], false);

    //Credenciales para mandar correo
    var transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'alerod620@gmail.com',
            pass: 's1t2a3r4'
        }
    });

    var texto = 'Te han comprado una cantidad de ' + cantidad + " unidades del producto " + resu.rows[0][0] + " por un total de " + total;

    var mail_option = {
        from: 'Alejandro <alerod620@gmail.com>',
        to: resu.rows[0][1],
        subject: 'Venta exitosa',
        text: texto
    }

    transport.sendMail(mail_option, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        return info.messageId;
    });

})

//------ CREAR PRODUCTO ------
router.post('/crear_producto', async (req, res) => {
    const { codigo, nombre, precio, cantidad, descripcion, categoria, correo, fecha, foto } = req.body;

    //Revisa si la categoria existe 
    sql = "SELECT id_categoria FROM CATEGORIA WHERE LOWER(nombre)=LOWER(:categoria)";
    let resu = await cnn.Open(sql, [categoria], false);


    if (resu.rows.length > 0)// Si existe toma su id y lo ingresa en el producto
    {
        var i = resu.rows[0][0];

        sql = "INSERT INTO PRODUCTO(codigo, nombre, precio, cantidad, descripcion, categoria, id_usuario, publicacion, imagen, estado) VALUES(:codigo, :nombre, :precio, :cantidad, :descripcion, :i, (SELECT id_usuario FROM USUARIO WHERE correo=:correo), TO_DATE(:fecha, 'dd/mm/yyyy'), :foto, 1)";
        let resultado = await cnn.Open(sql, [codigo, nombre, precio, cantidad, descripcion, i, correo, fecha, foto], true, res);
        console.log("resultado " + resultado.rowsAffected);

        if (resultado.rowsAffected > 0) {
            res.json({
                "response": true
            })
        }
        else {
            res.json({
                "response": false
            })
        }
    }
    else// Si no existe crea la nueva categoria e ingresa su id al producto
    {
        //Crea la nueva categoria
        sql = "INSERT INTO CATEGORIA(nombre) VALUES(:categoria)";
        let re = await cnn.Open(sql, [categoria], true, res);
        console.log("re:" + re.rowsAffected);

        sql = "SELECT MAX(id_categoria) FROM CATEGORIA";
        let result = await cnn.Open(sql, [], false);
        var id = result.rows[0][0];
        console.log("id:" + id);

        sql = "INSERT INTO PRODUCTO(codigo, nombre, precio, cantidad, descripcion, categoria, id_usuario, publicacion, imagen, estado) VALUES(:codigo, :nombre, :precio, :cantidad, :descripcion, :i, (SELECT id_usuario FROM USUARIO WHERE correo=:correo), TO_DATE(:fecha, 'dd/mm/yyyy'), :foto, 1)";
        let r = await cnn.Open(sql, [codigo, nombre, precio, cantidad, descripcion, id, correo, fecha, foto], true, res);

        if (r.rowsAffected > 0) {
            res.json({
                "response": true
            })
        }
        else {
            res.json({
                "response": false
            })
        }
    }
})

//------ OBTENER CREDITO ------
router.post('/get_credito', async (req, res) => {
    const { correo } = req.body;

    sql = "SELECT credito FROM USUARIO WHERE correo=:correo";
    let resu = await cnn.Open(sql, [correo], false);

    res.json({
        "credito": resu.rows[0][0]
    });
})

//------ OBTENER TODOS LOS PRODUCTOS ------
router.get('/get_productos', async (req, res) => {

    sql = "SELECT id_producto, codigo, nombre, precio, TO_CHAR(publicacion, 'dd/mm/yyyy'), (SELECT ROUND(AVG(COALESCE(ponderacion,0))) FROM COMENTARIO WHERE COMENTARIO.id_producto = PRODUCTO.id_producto AND PRODUCTO.estado=1) AS puntuacion, cantidad, (SELECT correo FROM USUARIO WHERE PRODUCTO.id_usuario = USUARIO.id_usuario) FROM PRODUCTO WHERE estado=1";
    let resu = await cnn.Open(sql, [], false);
    Users = [];
    console.log(resu.rows.length);

    if(resu.rows.length>0)
    {
        resu.rows.map(user => {
            var p = 0;
            if(user[5] != null)
            {
                p = user[5];
            }
            let userSchema = {
                "id": user[0],
                "codigo": user[1],
                "nombre": user[2],
                "precio": user[3],
                "fecha": user[4],
                "puntuacion": p,
                "cantidad": user[6],
                "propietario": user[7]
            }
            Users.push(userSchema);
        })
        res.json(Users);
    }
    else{

    }
    
    console.log(Users);
})

//------ CREAR CATEGORIA ------
router.post('/crear_categoria', async (req, res) => {
    const { nombre, padre, descripcion, descripcion_p } = req.body;

    if(padre=="") //Revisa si viene una categoria padre
    {
        sql = "SELECT id_categoria FROM CATEGORIA WHERE LOWER(nombre)=LOWER(:nombre)";
        let r = await cnn.Open(sql, [nombre], false);

        if(r.rows.length>0)
        {
            res.json({
                "response": false
            })
        }
        else
        {
            sql = "INSERT INTO CATEGORIA(nombre, descripcion) VALUES(:nombre, :descripcion)";
            let re = await cnn.Open(sql, [nombre, descripcion], true, res);

            res.json({
                "response": true
            })
        }
    }
    else //Si viene padre 
    {
        //Busca para ver si el padre existe
        sql = "SELECT id_categoria FROM CATEGORIA WHERE LOWER(nombre)=LOWER(:padre)";
        let r = await cnn.Open(sql, [padre], false);

        if(r.rows.length>0) //Si existe lo ingresa
        {
            var i = r.rows[0][0];
            sql = "INSERT INTO CATEGORIA(nombre, descripcion, categoria) VALUES(:nombre, :descripcion, :i)";
            let re = await cnn.Open(sql, [nombre, descripcion, i], true, res);

            res.json({
                "response": true
            })
        }
        else //Si no existe la crea y luego ingresa la otra categoria
        {
            sql = "INSERT INTO CATEGORIA(nombre, descripcion) VALUES(:padre, :descripcion_p)";
            let re = await cnn.Open(sql, [padre, descripcion_p], true, res);

            sql = "SELECT MAX(id_categoria) FROM CATEGORIA";
            let resul = await cnn.Open(sql, [], false);

            var j = resul.rows[0][0];

            sql = "INSERT INTO CATEGORIA(nombre, descripcion, categoria) VALUES(:nombre, :descripcion, :j)";
            let resultado = await cnn.Open(sql, [nombre, descripcion, j], true, res);

            res.json({
                "response": true
            })
        }
    }
})

module.exports = router;