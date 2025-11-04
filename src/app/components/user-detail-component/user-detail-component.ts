import { Component, inject } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent, MatCardTitle } from "@angular/material/card";
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.class';
import { MatIcon } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-user-detail-component',
  imports: [MatCard, MatCardHeader, MatCardContent, MatCardTitle, MatIcon, MatButtonModule, MatMenuModule],
  templateUrl: './user-detail-component.html',
  styleUrl: './user-detail-component.scss',
})
export class UserDetailComponent {

  userId = '';
  private userService = inject(UsersService);
  user: User | null = null;

  constructor(private route: ActivatedRoute) {

  }

  async ngOnInit(): Promise<void> {
    this.userId = this.route.snapshot.params['id'];
    this.user = await this.userService.getUser(this.userId);
  }

  openAdressDialog() {

  }
}
