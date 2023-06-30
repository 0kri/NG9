import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public form!: FormGroup
  
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService
  ) {}

 

  ngOnInit(): void {
    this.form = this._fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  

  create() {
    return this._authService.register(this.form.value).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err.console.error()
        )
      }
    )
  }
}
