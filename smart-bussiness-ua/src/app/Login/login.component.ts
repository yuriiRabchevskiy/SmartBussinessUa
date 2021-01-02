import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Shared/services/auth-service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements  OnInit {
  hide = true;
  profileForm = new FormGroup({
    login: new FormControl(' '),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService) { }
  ngOnInit() {}

  onSubmit(e: any) {
    e.preventDefault();
    const { login, password } = this.profileForm.value;
    this.authService.login(login, password);
  }

  onShowPassword(e: any) {
    e.preventDefault();
    this.hide = !this.hide;
  }

}
