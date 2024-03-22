import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: "./login.component.html",
  styleUrls: ['login.compoenet.css'],
})
export class LoginComponent implements OnInit {
signupUsers: any[]=[];
signupObj:any = {
  username: '',
  email:'', 
  password: ''
};

loginObj:any = {
  email: '',
  password:''
};

constructor(private authService: AuthService, private router: Router) {}

onSignUp() {
  this.authService.signUp(this.signupObj.username,this.signupObj.email,this.signupObj.password).subscribe({
    next: (response) => {
      alert('Registration successful');
      
      this.signupObj = { username: '', email: '', password: '' };
      this.router.navigate(['/home']);
    },
    error: (error) => {
      console.error('Registration failed', error);
      alert('Registration failed');
    }
  });
}


onLogin() {
  this.authService.login(this.loginObj.email,this.loginObj.password).subscribe({
    next: (response) => {
      alert('User logged in successfully!');
      localStorage.setItem('token', response.token); 
      
      this.loginObj = { email: '', password: '' };
<<<<<<< HEAD
      this.router.navigate(['home']);
=======
      this.router.navigate(['/home']);
>>>>>>> b5676b5c67b9e4c0e4c2d01490f0533b4a176bf6

    },
    error: (error) => {
      console.error('Login failed', error);
      alert('Wrong password or Email'+ error.error.message);
    }//send the fail log in file to logfile
  });
}

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData !=null){
      this.signupUsers=JSON.parse(localData);
    }  
  }

}