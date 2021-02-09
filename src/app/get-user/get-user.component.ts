import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css'],
})
export class GetUserComponent implements OnInit {
  public userData: Array<any> = [];

  constructor(private cs: CommonService, private route: Router) {
    this.cs.getUser().subscribe((Response: any) => {
      this.userData = Response.data;
      console.log(this.userData);
    });
  }

  ngOnInit() {}
  onSelect(item: any) {
    this.route.navigate(['/updateUsers', item._id]);
  }

  onSelectDelete(item: any) {
    console.log(item);

    this.cs.deleteUser(item._id).subscribe(async (res: any) => {
      console.log(res);

      console.log(this.userData);

      this.userData = this.userData.filter((user) => {
        if (user._id !== res.userdata._id) {
          return user;
        }
      });

      console.log(this.userData);
    });
  }
}
