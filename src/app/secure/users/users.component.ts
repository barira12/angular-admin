import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css','../secure.component.css']
})                                                         
export class UsersComponent implements OnInit{
   users:User [] =[]
  
   page =1; 
   last_page:number;
   user: User;
   
   
  constructor(private userService:UserService,
    
    ) {
 
 
  }
  ngOnInit(): void {
    this.load();
  
  }

  load():void{
    this.userService.all(this.page).subscribe(
      (res:any)=>{
        this.users = res.data;
        this.last_page = res.meta.last_page;
  
      }
      );

  }
  next():void{
    if(this.page === this.last_page){
      return;
    }
    this.page++;
    this.load();
  }
  previous():void{
    if(this.page === 1){
      return;
    }
    this.page--;
    this.load();
  }

  delete(_id:number):void{
    if(confirm('Are you sure you want to delete this record?')){
      this.userService.delete(_id).subscribe(

        () =>{
          this.users = this.users.filter(user => user._id !==_id);
        }
      )
    }

  }
  

}
