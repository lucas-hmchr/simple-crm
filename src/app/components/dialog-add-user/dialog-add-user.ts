import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule, MatDatepicker, MatDatepickerActions } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { addDoc, collection, Firestore, setDoc } from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';

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
    MatButtonModule,
  MatProgressBarModule],
  templateUrl: './dialog-add-user.html',
  styleUrl: './dialog-add-user.scss',
  providers: [provideNativeDateAdapter()],
})
export class DialogAddUser {

  user = new User();
  birthDate: Date | null = null;
  firestore: Firestore = inject(Firestore);

  loading: boolean = false;

  userCollection = collection(this.firestore, 'users')

  readonly dialogRef = inject(MatDialogRef<DialogAddUser>);


  constructor() {

  }

  closeDialog() {

  }

  createUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate!.getTime();
    addDoc(this.userCollection, this.user.toJSON()).then((result: any) => {
      console.log(result);
      this.loading = false;
      this.dialogRef.close();
    })

  }
}
