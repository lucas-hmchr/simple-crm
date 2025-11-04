import { Component, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { MatIcon } from "@angular/material/icon";
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { Firestore } from '@angular/fire/firestore';
import { Observable, tap } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [MatIcon, MatButtonModule, MatTooltipModule, MatCardModule, MatTableModule, AsyncPipe],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class UserComponent {

  readonly dialog = inject(MatDialog);
  readonly name = model('');
  fireStore = inject(Firestore);

  user = new User();

  constructor() {
    console.log()
  }

  private svc = inject(UsersService);
  users$: Observable<User[]> = this.svc.users$().pipe(
    tap(list => console.log('users from firestore:', list))
  );

  displayedColumns: string[] = ['firstName', 'lastName', 'birthDate', 'street', 'zipCode', 'city'];

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUser, {
      // data: { name: this.name()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.name.set(result);
      }
    });
  }

}
