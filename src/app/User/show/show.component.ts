import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { User } from 'src/app/Model/User'
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  users:User[];
  userEdit:User;

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getUsers()
  }

  public getUsers():void{
    this.service.getUsers().subscribe(      
      // data=>{
      // this.users=data;
      // }
      (response: User[])=>{
        this.users = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public addUser(addForm: NgForm): void{
    console.log(addForm.value);
  }

  public openModal(user: any, mode: string):void {
    console.log("parameter pass to openModal: ",user)
    switch (mode) {
      case "edit":
        this.userEdit=user;
        $('#exampleModalLong').modal('show')
        break;
      case "add":
        $('#addUserModal').modal('show')
        break;
    
      default:
        break;
    }
  }

}
