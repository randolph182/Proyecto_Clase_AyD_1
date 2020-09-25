let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3000';


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
describe('Prueba para registrar una escuela', () => {
    it('Registrar una escuela', async () => {
        let res = await chai
        .request(url)
        .post('/registrar_escuela')
        .send({nombre: "Sistemas"});
        expect(res.status).to.equal(200);
    });
});

//REGISTRAR CONGRESO
describe('Prueba para registrar un congreso', () => {
    it('Registrar un congreso', async () => {
        let res = await chai
        .request(url)
        .post('/registrar_congreso')
        .send({nombre: "Sistemas", descripcion: "Sistemas", ubicacion: "Sistemas", anio: 2020, id: 1});
        expect(res.status).to.equal(200);
    });
});