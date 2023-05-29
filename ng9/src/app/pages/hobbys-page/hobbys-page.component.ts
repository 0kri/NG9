import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-hobbys-page',
  templateUrl: './hobbys-page.component.html',
  styleUrls: ['./hobbys-page.component.css']
})
export class HobbysPageComponent {
  public profileForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: [''],
    hobbys: this.fb.array([
      this.fb.control('')
    ])
  })

  constructor(
    private fb: FormBuilder
  ) { }
  
  get hobbys() {
    return this.profileForm.get('hobbys') as FormArray
  }

  addHobbys() {
    this.hobbys.push(this.fb.control(''))
  }
}
