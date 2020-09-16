import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LogearseService} from '../../services/logearse.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    getuser: string;
    getpass: string;
    rolseleccionado: string = '';
    mensaje: string;
    retorno: string;

  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private LogearseService: LogearseService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    

}
  get f() { return this.loginForm.controls;}

  GetControls(){
    this.getuser = this.f.username.value;
    this.getpass = this.f.password.value;
    if (this.getuser == '' || this.getpass == '') {
        this.mensaje = "Favor de llenar todos los campos!";
    }
    else
    {
        this.mensaje = "";
        this.LogearseService.login2(this.getuser, this.getpass, this.rolseleccionado);
    }
    
  }
 
  onSubmit()
  {
    this.submitted = true;
  }

  selectChangeHandler (event: any) {
    this.rolseleccionado = event.target.value;
  }

public showMyMessage = false

Mostrar() {
  setTimeout(() => {
    this.showMyMessage = true
  }, 1000)
}

}
