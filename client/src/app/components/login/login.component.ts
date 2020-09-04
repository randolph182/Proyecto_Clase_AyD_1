import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService } from './login.service';
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

  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
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
        
    }
    
  }
 
  onSubmit()
  {
    this.submitted = true;
  }

  selectChangeHandler (event: any) {
    this.rolseleccionado = event.target.value;
  }

  elegirapi()
  {
    if(this.rolseleccionado == 'estudiante')
    {
      //mandar a api estudiante
    }
    else if(this.rolseleccionado == 'catedratico')
    {
      //mandar a api catedratico
    }
    else
    {
      //mandar a api admin      
    }

  }

public showMyMessage = false

Mostrar() {
  setTimeout(() => {
    this.showMyMessage = true
  }, 1000)
}

}
