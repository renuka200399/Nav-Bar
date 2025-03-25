import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  imports: [RouterModule,CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {

  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();

  items = [
    {
      routeLink : 'home',
      icon : 'fal fa-home',
      label : 'Home',
    },
    {
      routeLink :'features',
      icon : 'fa solid fa-info',
      label : 'Products/Features',
    },
    {
      routeLink :'proctoring',
      icon : ' fa solid  fa-code',
      label : 'Remote-Proctoring',
    },
    {
      routeLink : 'institution',
      icon : 'fa fa-university',
      label : 'Institutions/Plans',
    },
    {
      routeLink : 'recognition',
      icon : 'fa solid fa-award',
      label : 'Recognition/Awards',
    },
    {
      routeLink : 'customer',
      icon : 'fa solid fa-user',
      label : 'Customers/Testimonials',
    },
    {
      routeLink : 'help',
      icon : 'fa fa-question-circle',
      label : 'Help & Support',
    },
    {
      routeLink : 'login',
      icon : 'fa fa-sign-in',
      label : 'Login/SignUp',
    },

  ];
  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }

}
