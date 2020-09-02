import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService } from './login.service';


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
    selectedDay: string = '';

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
    localStorage.setItem("sesion", this.getuser); // seteando variable de sesión con el nombre del usuario
  }
 
  onSubmit()
  {
    this.submitted = true;
  }

  selectChangeHandler (event: any) {
    this.selectedDay = event.target.value;
  }

public showMyMessage = false

Mostrar() {
  setTimeout(() => {
    this.showMyMessage = true
  }, 1000)
}

}
