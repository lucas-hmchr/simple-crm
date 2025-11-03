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

@Component({
  selector: 'app-user',
  imports: [MatIcon, MatButtonModule, MatTooltipModule],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class UserComponent {

  readonly dialog = inject(MatDialog);
  readonly name = model('');

  user = new User();

  constructor() {

  }

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
