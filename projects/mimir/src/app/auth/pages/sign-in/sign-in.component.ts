import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import { MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

    loginFormGroup = new FormGroup({
        email: new FormControl(null, []),
        password: new FormControl(null, []),
    });

    signUpFormGroup = new FormGroup({
        email: new FormControl(null, []),
        password: new FormControl(null, []),
        confirmPassword: new FormControl(null, [])
    });

  constructor(
      private authService: AuthService,
      public snackbar: MatSnackBar,
      public router: Router
  ) { }

  ngOnInit() {
  }

  login() {
      const {email, password} = this.loginFormGroup.value;
      this.authService.login(email, password).then(() => {
          this.router.navigate(['/user']);
      }).catch((err) => {
          const snackbar = this.snackbar.open(err, null, {
              duration: 5000
          });
      });
  }

    signUp() {
        const {email, password} = this.signUpFormGroup.value;
        this.authService.signUp(email, password).then(() => {
            this.router.navigate(['/user']);
        }).catch((err) => {
            const snackbar = this.snackbar.open(err, null, {
                duration: 5000
            });
        });
    }

}
