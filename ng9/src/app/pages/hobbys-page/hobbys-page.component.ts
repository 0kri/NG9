import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup} from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-hobbys-page',
  templateUrl: './hobbys-page.component.html',
  styleUrls: ['./hobbys-page.component.css']
})
export class HobbysPageComponent {

  public profileForm!: FormGroup; 

  constructor(
    private fb: FormBuilder
  ) { }
  
  ngOnInit(): void {

    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      hobbys: this.fb.array([])
    })

  }



  get hobbys() {
    return this.profileForm.controls['hobbys'] as FormArray
  }

  addHobby() {
    this.hobbys.push(new FormControl('', [Validators.required]))
  }

  removeHobby(i: number):void {
    this.hobbys.removeAt(i)
  }

}
