import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

interface FormData {
  mainInfo: {
    fullName: string,
    age: number,
  },
  country: string,
  gender: string,
  favoritePlaces: Array<string>
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public formData: FormData;
  public myForm: FormGroup;
  public genders = ['male', 'female'];
  public forbiddenNames = ['Dima', 'Roman', 'Vasia'];


  ngOnInit() {
    this.myForm = new FormGroup({});
    this.myForm.addControl(
      'mainInfo', new FormGroup({
        'fullName': new FormControl('Default name', [Validators.required, this.forbiddenNamesValidator.bind(this)]),
        'age': new FormControl(null, [Validators.required, Validators.min(1)])
      }));
    this.myForm.addControl('country', new FormControl(null, [Validators.required, Validators.pattern(/[A-Za-zА-Яа-я]{3,}/)]));
    this.myForm.addControl('gender', new FormControl(this.genders[0]));
    this.myForm.addControl('favoritePlaces', new FormArray([]));
  }

  onAddFavouritePlace() {
    const place = new FormControl(null, Validators.required);
    (<FormArray>this.myForm.get('favoritePlaces')).push(place);
  }

  onDeletePlace(index: number) {
    (<FormArray>this.myForm.get('favoritePlaces')).removeAt(index);
  }

  onSubmit() {
    // console.log(this.myForm);
    this.formData = this.myForm.value;
    console.log(this.formData.mainInfo.fullName);
    this.myForm.reset({'gender': this.genders[0]});
  }

  forbiddenNamesValidator(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNames.indexOf(control.value) >= 0) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
}
