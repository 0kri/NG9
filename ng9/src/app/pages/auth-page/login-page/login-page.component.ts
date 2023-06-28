import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form!: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  
  submit() {
    this._authService.login(this.form.value).subscribe(
      res => {
        this._router.navigateByUrl('/')
      },
      err => {
        console.log(err.error);
      }
    )
  }

}

// valeri.kharitonashvili1@gmail.com
