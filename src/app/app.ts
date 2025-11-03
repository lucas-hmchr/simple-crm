import { Component, signal, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Firestore } from '@angular/fire/firestore';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIcon, MatSidenavModule, RouterLinkWithHref, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('simple-crm');
    firestore: Firestore = inject(Firestore);
}
