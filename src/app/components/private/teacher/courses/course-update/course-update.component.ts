import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {
  formUpdateProduct: FormGroup
  constructor(private fb: FormBuilder) {
    let formControls =
    {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]*"),
        Validators.minLength(2)
      ]),
      description:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      price:new FormControl('',[
        Validators.required
        
      ]),
      image:new FormControl('',[
        Validators.required
      ]),
      category:new FormControl('',[
        Validators.required
      ])


    }
    this.formUpdateProduct = this.fb.group(formControls);

  }

  ngOnInit(): void {
  }
  verif(){console.log(this.formUpdateProduct.value)}
  get name() {
    return this.formUpdateProduct.get('name');
  }
  get description() {
    return this.formUpdateProduct.get('description');
  }
  get price() {
    return this.formUpdateProduct.get('price');
  }
  get image() {
    return this.formUpdateProduct.get('image');
  }
  get category(){
    return this.formUpdateProduct.get('category')
  }
}
