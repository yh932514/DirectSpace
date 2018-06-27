import { Component, OnInit, ElementRef } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private elementRef:ElementRef) { }

  ngOnInit() {
    this.getUsers();
  }

  onKey(event: any) { this.search();}
  search(): void {
    var input, filter, table, tr, th, i;
    input = document.getElementById("searchName");
    filter = input.value.toUpperCase();
    table = document.getElementById("tbody");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      th = tr[i].getElementsByTagName("th")[0];  //Name
      if (th) {
        if (th.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
}
