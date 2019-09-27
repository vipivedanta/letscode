import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  user = new User(100,'Vipin','Kumar','vipins110@gmail.com');

  ngOnInit() {
  }

  updateProfile(model){
  	console.log(model)
  }

}
