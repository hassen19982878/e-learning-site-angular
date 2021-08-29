import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css','./../../../../../../assetsadmin/css/sb-admin-2.css']
})
export class CategoryUpdateComponent implements OnInit {
  formUpdateCategory: FormGroup

  constructor(private fb: FormBuilder) {
    let formControls =
    {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]*"),
        Validators.minLength(2)
      ])


    }
    this.formUpdateCategory = this.fb.group(formControls);

  }

  ngOnInit(): void {
  }
  verif(){console.log(this.formUpdateCategory.value)}
  get name() {
    return this.formUpdateCategory.get('name');
  }

}

