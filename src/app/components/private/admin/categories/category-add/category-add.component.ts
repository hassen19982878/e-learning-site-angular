import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css','./../../../../../../assetsadmin/css/sb-admin-2.css']
})
export class CategoryAddComponent implements OnInit {
  formAddCategory: FormGroup

  constructor(private fb: FormBuilder) {
    let formControls =
    {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]*"),
        Validators.minLength(2)
      ])


    }
    this.formAddCategory = this.fb.group(formControls);

  }

  ngOnInit(): void {
  }
  verif(){console.log(this.formAddCategory.value)}
  get name() {
    return this.formAddCategory.get('name');
  }

}

