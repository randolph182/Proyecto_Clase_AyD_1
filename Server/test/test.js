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