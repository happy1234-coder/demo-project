import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from './common.service';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo-project';
  // public Message: String = ' ';
  // messageDisplay: boolean = false;
  // public userData: Array<any> = [];

  // constructor(private cs: CommonService) {
  //   this.cs.getUser().subscribe((Response: any) => {
  //     this.userData = Response.data;
  //     console.log(this.userData);
  //   });
  // }
}
