import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Auth } from 'src/app/classes/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  infoform: FormGroup;
  passwordform: FormGroup;

  constructor(private formBuilder: FormBuilder,
           private authService:AuthService
    ){

  }
 ngOnInit ():void{
  this.infoform = this.formBuilder.group({
    first_name:'',
    last_name:'',
    email:'',

  });
  this.passwordform = this.formBuilder.group({
    password:'',
    confirm_password:'',
  });
  Auth.userEmitter.subscribe(
        user  =>{
      this.infoform.patchValue(user);
    }

  );

}

infoSubmit():void{
  this.authService.updateInfo(this.infoform.getRawValue()).subscribe(
    user => Auth.userEmitter.emit(user)
      );

}

passwordSubmit():void{
  this.authService.updatePassword(this.passwordform.getRawValue()).subscribe(
    user=> Auth.userEmitter.emit (user)
  );

}
}
