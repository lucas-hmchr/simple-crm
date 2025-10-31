import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule, MatDatepicker, MatDatepickerActions } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-dialog-add-user',
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDatepicker,
    MatDatepickerActions,
    MatDatepickerModule,
    MatButtonModule],
  templateUrl: './dialog-add-user.html',
  styleUrl: './dialog-add-user.scss',
  providers: [provideNativeDateAdapter()],
})
export class DialogAddUser {

  readonly dialogRef = inject(MatDialogRef<DialogAddUser>);
  // readonly data = inject(MAT_DIALOG_DATA);
  // readonly animal = model(this.data.name);

  closeDialog() {

  }

  createUser() {

  }
}
