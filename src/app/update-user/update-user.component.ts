import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  Id: any;
  userId: string;
  firstName: string = '';
  lastName: string = '';
  Email: string = '';
  myform: any;
  public Message: String = ' ';
  messageDisplay: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private cs: CommonService,
    private fb: FormBuilder
  ) {
    let item: any = this.route.snapshot.paramMap.get('item');
    this.userId = item;
    this.cs.getSingleUser(item).subscribe((res: any) => {
      console.log(res);

      this.firstName = res.data[0].Firstname;
      this.lastName = res.data[0].Lastname;
      this.Email = res.data[0].Email;
      this.Id = res.data[0].Id;
    });
  }

  ngOnInit(): void {
    this.myform = this.fb.group({
      Name: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
    });
  }

  onSubmit() {
    const { name, lastName } = this.myform.value;

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

    console.log('Id :', this.Id);

    this.cs.updateUser(this.myform.value, this.userId).subscribe((res: any) => {
      this.firstName = res.userdata.Firstname;
      this.lastName = res.userdata.Lastname;
      this.Email = res.userdata.Email;
      const response = res;
      console.log(response);
      this.messageDisplay = true;
      this.Message = 'User Updated';
      setTimeout(() => {
        this.messageDisplay = false;
      }, 3000);
    });
  }
}
