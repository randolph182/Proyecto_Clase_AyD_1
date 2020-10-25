let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3000';

/*
//PRUEBA UNITARIA PARA REGISTRAR UNA CUENTA DE USUARIO
describe.only('Prueba para registrar una cuenta en la API: ',()=>{
    it('Debe poder realizar un registro de usuario', async ()=>{
        let res = await chai
        .request(url)
        .post('/registrar_cuenta') 
        .send({rol:1, login:"usuario_prueba@usac.com", password:"123", activo:'0',id:1});
        expect(res.status).to.equal(200);
    });
    it('Debe poder realizar un registro de un catedratico', async ()=>{
        let res = await chai
        .request(url)
        .post('/registrar_cuenta')
        .send({rol:2, login:"cate_prueba@usac.com", password:"123", activo:'0',id:1});
        expect(res.status).to.equal(200);
    });
    it('Debe poder realizar un registro de un adminsitrador', async ()=>{
        let res = await chai
        .request(url)
        .post('/registrar_cuenta')
        .send({rol:3, login:"admin_prueba@usac.com", password:"123", activo:'0',id:1});
        expect(res.status).to.equal(200);
    });
});
*/

//OBTENCION DE INFORMACION DE LA BASE DE DATOS
// describe.only('Prueba para obtener informacion de la API: ',()=>{
describe('Prueba para obtener informacion de la API: ',()=>{
    it('Debe poder obtener usuarios en base al rol', async ()=>{
        let res = await chai
        .request(url)
        .get('/obtener_usuarios/1'); //obteniendo estudiantes
        expect(res.status).to.equal(200);
    });
    it('Debe poder obtener catedraticos en base al rol', async ()=>{
        let res = await chai
        .request(url)
        .get('/obtener_usuarios/2'); //obteniendo estudiantes
        expect(res.status).to.equal(200);
    });
    it('Debe poder obtener catedraticos en base al rol', async ()=>{
        let res = await chai
        .request(url)
        .get('/obtener_usuarios/3'); //obteniendo estudiantes
        expect(res.status).to.equal(200);
    });
});

//DAR DE BAJA CUENTA
describe('Prueba para dar de baja un usuario: ', ()=>{
    it('Debe poder dar de baja a un estudiante', async () => {
        let res = await chai
        .request(url)
        .put('/baja_cuenta')
        .send({id:1, rol:1});
        expect(res.status).to.equal(200);
    });
    it('Debe poder dar de baja a un catedratico', async () => {
        let res = await chai
        .request(url)
        .put('/baja_cuenta')
        .send({id:1, rol:2});
        expect(res.status).to.equal(200);
    });
    it('Debe poder dar de baja a un administrador', async () => {
        let res = await chai
        .request(url)
        .put('/baja_cuenta')
        .send({id:1, rol:3});
        expect(res.status).to.equal(200);
    });
});


//ACTUALIZAR DATOS
describe('Prueba para dar de actualizar datos del usuario: ', ()=>{
    it('Actualiza datos de estudiante', async () => {
        let res = await chai
        .request(url)
        .put('/actualizacion_datos')
        .send({id:1, nombre:"a", apellido:"r", rol:1});
        expect(res.status).to.equal(200);
    });
    it('Actualiza datos de catedratico', async () => {
        let res = await chai
        .request(url)
        .put('/actualizacion_datos')
        .send({id:1, nombre:"a", apellido:"r", rol:2});
        expect(res.status).to.equal(200);
    });
    it('Actualiza datos de admin', async () => {
        let res = await chai
        .request(url)
        .put('/actualizacion_datos')
        .send({id:1, nombre:"a", apellido:"r", rol:3});
        expect(res.status).to.equal(200);
    });
});

//REGISTRO DE ESCUELA



/*
***********************************
  ************ ESCUELA ************
  *********************************

*/
//REGISTRO DE ESCUELA
describe('Prueba para registrar una escuela', () => {
    it('Registrar una escuela', async () => {
        let res = await chai
        .request(url)
        .post('/registrar_escuela')
        .send({nombre: "Sistemas"});
        expect(res.status).to.equal(200);
    });
});

//ELIMINAR ESCUELA
describe('Prueba para eliminar una escuela', () => {
    it('Eliminar una escuela', async () => {
        let r = await chai
        .request(url)
        .post('/registrar_escuela')
        .send({nombre: "Sistemas"});

        let re = await chai
        .request(url)
        .get('/ultima_escuela');

        let res = await chai
        .request(url)
        .post('/eliminar_escuela')
        .send({id:re.body[0].id});
        expect(res.status).to.equal(200);
    });
});

//REGISTRO DE ESCUELA
describe('Prueba para modificar una escuela', () => {
    it('Modificar una escuela', async () => {
        let r = await chai
        .request(url)
        .post('/registrar_escuela')
        .send({nombre: "Sistemas"});

        let re = await chai
        .request(url)
        .get('/ultima_escuela');

        let m = await chai
        .request(url)
        .post('/modificar_escuela')
        .send({id:re.body[0].id, nombre: "Mecanica"});
        
        let res = await chai
        .request(url)
        .post('/eliminar_escuela')
        .send({id:re.body[0].id});

        expect(res.status).to.equal(200);
    });
});

describe('Prueba unitaria para obtener las escuelas registradas', ()=>{
    // it('Debe porder registrar una escuela... ', async () => {
    //     let res = await chai
    //     .request(url)
    //     .post('/registrar_escuela')
    //     .send({nombre: "Prueba"});
    //     expect(res.status).to.equal(200);
    //     console.log(res.status);
    // });

    it('Debe poder obtener las escuelas registradas', async ()=>{
        let res = await chai
        .request(url)
        .get('/obtener_escuelas');
        expect(res.status).to.equal(200);
    });

//     afterEach(async () => {
//         let res_id = await chai
//            .request(url)
//            .get('/ultima_escuela');

//         let res_del = await chai
//            .request(url)
//            .put('/eliminar_producto')
//            .send({ id_producto: res_id.id });
//            expect(res_del.status).to.equal(200);
//      });
});

//REGISTRAR CONGRESO
describe('Prueba para registrar un congreso', () => {
    it('Registrar un congreso', async () => {
        let res = await chai
        .request(url)
        .post('/registrar_congreso')
        .send({nombre: "Sistemas", descripcion: "Sistemas", ubicacion: "Sistemas", anio: 2019, id: 1});

        let r = await chai
        .request(url)
        .get('/ultimo_congreso')

        let bo = await chai
        .request(url)
        .post('/eliminar_congreso')
        .send({id:r.body[0].id})
        expect(res.status).to.equal(200);
    });
});


//REGISTRAR CURSO
describe('Prueba para registrar un curso', () => {
    it('Registrar un curso', async () => {
        let res = await chai
        .request(url)
        .post('/registrar_curso')
        .send({nombre: "Bases", descripcion: "Curso de bases de datos", creditos: 5, id: 1});

        let r = await chai
        .request(url)
        .get('/ultimo_curso')

        let bo = await chai
        .request(url)
        .post('/eliminar_curso')
        .send({id:r.body[0].id})
        expect(res.status).to.equal(200);
    });
});

//REGISTRAR CICLO
describe('Prueba para registrar un ciclo académico', () => {
    it('Registrar ciclo', async () => {
        let res = await chai
        .request(url)
        .post('/registrar_ciclo')
        .send({nombre: "primer semestre", anio: 2020});

        let r = await chai
        .request(url)
        .get('/ultimo_ciclo')

        let bo = await chai
        .request(url)
        .post('/eliminar_ciclo')
        .send({id:r.body[0].id})
        expect(res.status).to.equal(200);
    });
});

//REGISTRAR SECCION
describe('Prueba para registrar una seccion', () => {
    it('Registrar seccion', async () => {
        let res = await chai
        .request(url)
        .post('/registrar_seccion')
        .send({curso: 1, salon: 1, seccion: "A"});

        let r = await chai
        .request(url)
        .get('/ultima_seccion')

        let bo = await chai
        .request(url)
        .post('/eliminar_seccion')
        .send({id:r.body[0].id})
        expect(res.status).to.equal(200);
    });
});

//ASIGNAR CATEDRATICO
describe('Prueba para asignar un catedratico', () => {
    it('Asignar catedratico', async () => {
        let res = await chai
        .request(url)
        .post('/asignar_catedratico')
        .send({ciclo: 1, cat: 1});

        let bo = await chai
        .request(url)
        .post('/eliminar_detalle_cat_curso')
        .send({seccion: 1, asignacion:1})
        expect(res.status).to.equal(200);
    });
});

//ASIGNAR CATEDRATICO
describe('Prueba para el detalle de curso y catedratico', () => {
    it('Detalle de curso y catedratico', async () => {
        let res = await chai
        .request(url)
        .post('/detalle_cat_curso')
        .send({seccion: 1, asignacion: 1});

        let r = await chai
        .request(url)
        .get('/ultima_asig_cat')

        let bo = await chai
        .request(url)
        .post('/eliminar_asig_cat')
        .send({id:r.body[0].id})
        expect(res.status).to.equal(200);
    });
});

/*
************************************************************************************************
****************************************** BDD *******************************************
************************************************************************************************
*/
/*
describe('BDD Login - Ingreso Exitoso', function () {
    before('Given: Usuario desea ingresar al sistema', function () {
        //se empieza proceso en el que elusuario empieza a loggearse 
    });
  
    after('When: Ingresar Datos de usuario para poder validar',function () {
      // runs once after the last test in this block
      let id = await chai
      .request(url)
      .put('/login')
      .send({ login: 'usuario1@gmail.com', password: '123'});
      expect(res_del.status).to.equal(200);
    });
  
  
    afterEach('Then: Login exitoso',function () {
      //  login exitoso
    });
  
    // test cases
});


describe('BDD Login - Ingreso Fallido', function () {
    before('Given: Usuario desea ingresar al sistema', function () {
        //se empieza proceso en el que elusuario empieza a loggearse 
    });
  
    after('When: Ingresar Datos de usuario para poder validar',function () {
      // runs once after the last test in this block
      let id = await chai
      .request(url)
      .put('/login')
      .send({ login: 'usuarioFake@gmail.com', password: '123'});
      expect(res_del.status).to.equal(500);
    });
  
  
    afterEach('Then: Login exitoso',function () {
      //  login exitoso
    });
  
    // test cases
});
*/
/*
*********************************************
******************** BDD ********************
*********************************************
*/

/*
describe('Prueba para el registro de un usuario:', () =>{
    it('Registro usuario exitoso de estudiante', async () => {
        let res = await chai
        .request(url)
        .post('/registrar_usuario')
        .send({rol:1, nombre:"Alejandro", apellido:"Rodriguez", carnet:2021, dpi:2021});
        expect(res.status).to.equal(200);
    });
    it('Registro usuario exitoso de catedratico', async () => {
        let res = await chai
        .request(url)
        .post('/registrar_usuario')
        .send({rol:2, nombre:"Alejandro", apellido:"Rodriguez", dpi:2020});
        expect(res.status).to.equal(200);
    });
    it('Registro usuario exitoso de administrador', async () => {
        let res = await chai
        .request(url)
        .post('/registrar_usuario')
        .send({rol:3, nombre:"Alejandro", apellido:"Rodriguez", dpi:2020});
        expect(res.status).to.equal(200);
    });
    it('Registro usuario fallido de estudiante por falta de atributos', async () => {
        let res = await chai
        .request(url)
        .post('/registrar_usuario')
        .send({rol:1, nombre:"Alejandro", apellido:"Rodriguez"});
        expect(res.status).to.equal(500);
    });
});
*/