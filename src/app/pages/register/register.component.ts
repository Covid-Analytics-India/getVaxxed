import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ClrLoadingState } from '@clr/angular';
import { API_URL } from '../../utils/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.submitBtnState = ClrLoadingState.LOADING;
    console.log('Form', this.form);
    this.http
      .post(`${API_URL}/citizen/add`, this.form.value)
      .subscribe((res) => {
        this.submitBtnState = ClrLoadingState.DEFAULT;
        console.log('%cResponse', 'color:green', res);
        this.form.reset();
      });
  }
}
