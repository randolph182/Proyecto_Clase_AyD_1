let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000';

//Se manda el rol del usuario a eliminar en el url
describe('Dar de baja a un usuario: ', ()=>{
    it('Debe poder dar de baja a un estudiante', (done) => {
        chai.request(url)
        .put('/baja_cuenta/1')
        .send({id:1})
        .end(function(err, res){
            console.log(res)
            expect(res).to.have.status(200);
            done();
        }).catch(done);
    });
});