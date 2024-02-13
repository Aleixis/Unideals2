import { Component, OnInit } from '@angular/core';

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
  username: '',
  password:''
}

onSignUp(){
this.signupUsers.push(this.signupObj);
localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
this.signupObj= {
  username: '',
  email:'', 
  password: ''
};

}


onLogin(){
const isUserExist = this.signupUsers.find(m => m.email==this.loginObj.email && m.password==this.loginObj.password);
if(isUserExist !== undefined){
  alert('User login in successfully!)');
}
else{
  alert('Wrong password or email')
}
}

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData !=null){
      this.signupUsers=JSON.parse(localData);
    }
    
  }

}