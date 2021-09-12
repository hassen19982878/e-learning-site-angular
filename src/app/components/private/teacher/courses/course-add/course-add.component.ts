import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css','./../../../../../../assetsadmin/css/sb-admin-2.css']
})
export class CourseAddComponent implements OnInit {
  formAddCourse: FormGroup
  constructor(private fb: FormBuilder) {
    let formControls =
    {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]*"),
        Validators.minLength(2)
      ]),
      
      teacherName: new FormControl('', [
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
    this.formAddCourse = this.fb.group(formControls);

  }

  ngOnInit(): void {
  }
  verif(){console.log(this.formAddCourse.value)}
  get name() {
    return this.formAddCourse.get('name');
  }
  get teacherName() {
    return this.formAddCourse.get('teacherName');
  }
  get description() {
    return this.formAddCourse.get('description');
  }
  get price() {
    return this.formAddCourse.get('price');
  }
  get image() {
    return this.formAddCourse.get('image');
  }
  get category(){
    return this.formAddCourse.get('category')
  }
}
