import { Component, Injectable, inject } from '@angular/core';
import links from './nav-items';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  showFiller = false;
  links = links

constructor(
  private router:Router
){
  
}
logout():void{
  this.router.navigateByUrl('auth/login')
}

}

