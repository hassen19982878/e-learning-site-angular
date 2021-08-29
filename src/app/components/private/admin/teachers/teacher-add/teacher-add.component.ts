import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css','./../../../../../../assetsadmin/css/sb-admin-2.css']
})
export class TeacherAddComponent implements OnInit {
  formAddProduct: FormGroup
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
    this.formAddProduct = this.fb.group(formControls);

  }

  ngOnInit(): void {
  }
  verif(){console.log(this.formAddProduct.value)}
  get name() {
    return this.formAddProduct.get('name');
  }
  get description() {
    return this.formAddProduct.get('description');
  }
  get price() {
    return this.formAddProduct.get('price');
  }
  get image() {
    return this.formAddProduct.get('image');
  }
  get category(){
    return this.formAddProduct.get('category')
  }
}