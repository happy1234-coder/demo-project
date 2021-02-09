import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public Message: String = ' ';
  messageDisplay: boolean = false;
  public userData: Array<any> = [];
  myform: any;
  constructor(public fb: FormBuilder, private cs: CommonService) {}

  ngOnInit(): void {
    this.myform = this.fb.group({
      Name: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
    });
  }
  onSubmit() {
    const { name, job } = this.myform.value;

    if (!this.myform.value.Name) {
      this.messageDisplay = true;
      this.Message = 'Name field is Required';
      const timeout = setTimeout(() => {
        this.messageDisplay = false;
      }, 2000);

      return;
    }

    if (!this.myform.value.lastName) {
      this.messageDisplay = true;
      this.Message = 'Job field is Required';
      const timeout = setTimeout(() => {
        this.messageDisplay = false;
      }, 2000);

      return;
    }

    if (!this.myform.value.email) {
      this.messageDisplay = true;
      this.Message = 'Email field is Required';
      const timeout = setTimeout(() => {
        this.messageDisplay = false;
      }, 2000);

      return;
    }

    this.cs.createUser(this.myform.value).subscribe((res: any) => {
      this.myform.reset();
      const response = res;
      console.log(response);
      this.messageDisplay = true;
      this.Message = 'User Created ';
      setTimeout(() => {
        this.messageDisplay = false;
      }, 3000);
    });
  }
}
