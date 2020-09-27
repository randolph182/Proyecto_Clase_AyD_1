import { AppPage } from './app.po';
import {RegistroCongreso} from './app.po'
import { browser, logging } from 'protractor';

describe('Dado: estoy en la página de registro-congreso', () => {
  let page: AppPage;
  let registro:RegistroCongreso;
  beforeEach(() => {
    page = new AppPage();
  });
  describe('Cuando: vaya a registrar un congreso',()=>{
    beforeEach(()=>{
        registro = new RegistroCongreso();
    })
  it('Entonces: crear un congreso es creado', () => {

  });
  })
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
