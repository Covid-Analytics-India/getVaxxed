import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ClrLoadingState } from '@clr/angular';
import { API_URL } from '../../utils/constants';
import { Citizen } from 'src/app/models/Citizen.model';
interface FormModel {
  personal: {
    name: string;
    age: number;
    gender: 'M' | 'F';
    profession: string;
  };
  contact: {
    email: string;
    phone: number;
    aadhaar: number;
  };
  address: {
    district: string;
    city: string;
    state: string;
    pincode: number;
  };
  medical: {
    prevContracted: boolean;
    datePositive: string;
    dateNegative: string;
    hospitalName: string;
    currentlySuffering: boolean;
    disability: string;
  };
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    // this.form = this.formBuilder.group({           FORM WITH PLACEHOLDERS
    //   personal: this.formBuilder.group({
    //     name: ['Luke Sharma', Validators.required],
    //     age: [22],
    //     gender: ['M'],
    //     profession: ['SDE'],
    //   }),
    //   contact: this.formBuilder.group({
    //     email: ['cool.sharma.luke@email.com'],
    //     phone: [9987886545],
    //     aadhaar: [344509983458],
    //     // pan: [],
    //   }),
    //   address: this.formBuilder.group({
    //     district: ['South Delhi'],
    //     city: ['New Delhi'],
    //     state: ['Delhi'],
    //     pincode: [110078],
    //   }),
    //   medical: this.formBuilder.group({
    //     prevContracted: ['true'],
    //     datePositive: ['2020-08-02'],
    //     dateNegative: ['2020-08-20'],
    //     hospitalName: ['KIMS'],
    //     currentlySuffering: ['false'],
    //     // history: [],
    //     disability:['Engineering'],
    //   }),
    // });

    this.form = this.formBuilder.group({
      personal: this.formBuilder.group({
        name: [null, Validators.required],
        age: [null, Validators.required],
        gender: [null, Validators.required],
        profession: [null, Validators.required],
      }),
      contact: this.formBuilder.group({
        email: [null, Validators.required],
        phone: [null, Validators.required],
        aadhaar: [null, Validators.required],
        // pan: [null, Validators.required],
      }),
      address: this.formBuilder.group({
        district: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        pincode: [null, Validators.required],
      }),
      medical: this.formBuilder.group({
        prevContracted: [null, Validators.required],
        datePositive: [null, Validators.required],
        dateNegative: [null, Validators.required],
        hospitalName: [null, Validators.required],
        currentlySuffering: [null, Validators.required],
        // history: [null, Validators.required],
        disability: [null, Validators.required],
      }),
    });
  }

  submit() {
    console.log('reactive form submit', this.form.value);
  }

  ngOnInit() {
    // this.form = new FormGroup({
    //   name: new FormControl(null, Validators.required),
    //   age: new FormControl(null, Validators.required),
    //   gender: new FormControl(null, Validators.required),
    // });
  }

  onSubmit() {
    this.submitBtnState = ClrLoadingState.LOADING;
    const formValue: FormModel = this.form.value;
    const citizen: Citizen = {
      ...formValue.address,
      ...formValue.contact,
      ...formValue.medical,
      ...formValue.personal,
    };
    console.log('Form', citizen);
    this.http.post(`${API_URL}/citizen/add`, citizen).subscribe((res) => {
      this.submitBtnState = ClrLoadingState.DEFAULT;
      console.log('%cResponse', 'color:green', res);
      this.form.reset();
    });
  }
}
