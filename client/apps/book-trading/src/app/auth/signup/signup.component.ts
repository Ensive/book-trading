import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@client/core-data';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  allUsersEmails;
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.all().subscribe(users => {
      this.allUsersEmails = (users as Array<any>).map(user => user.email);
    });
  }

  createUser(user) {
    if (!this.isUserUnique(user.email)) return;

    this.authService
      .create(user)
      .subscribe(() => this.router.navigate(['books']));
  }

  isUserUnique(userEmail) {
    return this.allUsersEmails.indexOf(userEmail) === -1;
  }
}
