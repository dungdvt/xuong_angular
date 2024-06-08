import { Component } from '@angular/core';
import { User } from '../../../../../types/User';
import { AuthService } from '../../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {
  users: User[] = [];
  filteredUser: User[] = [];
  filterValue: string = '';

  constructor(private authService: AuthService) { }

  // cal api ngOnInit
  ngOnInit() {
    this.loadAllData();
  }
  loadAllData() {
    this.authService.getAllAuth().subscribe((res) => {
      this.users = res;
      this.filter();
      console.log(this.users);
    });
    
  }

  onDeleteUser(id: any): void {
    const conf = window.confirm('are you sure?');
    if (conf) {
      this.authService.deleteUser(id).subscribe((data) => {
        this.loadAllData();
        console.log(data);
        alert("User deleted successfully");
      });
    }
  }
  // search
  filter() {
    this.filteredUser = this.users.filter(product =>
      product.username.toLowerCase().includes(this.filterValue.toLowerCase())
    );
    console.log(this.filteredUser);

  }
}
