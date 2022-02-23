import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-api';

  constructor(private router:Router){ }

    show_users(){
      this.router.navigate(['show']);
    }
    add_user(){
      this.router.navigate(['add']);
    }

 
}
