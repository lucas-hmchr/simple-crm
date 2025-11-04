// src/app/services/users.service.ts
import { inject, Injectable } from '@angular/core';
import { Firestore, collection, query, orderBy, doc, getDoc } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/user.class';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private db = inject(Firestore);

  users$(): Observable<User[]> {
    const q = query(
      collection(this.db, 'users'),
    //   orderBy('firstName', 'desc') // optional sortiert nach createdAt
    );
    return collectionData(q, { idField: 'id' }) as Observable<User[]>;
  };

  async getUser(id: string): Promise<User | null> {
    const ref = doc(this.db, 'users', id);
    const snap = await getDoc(ref);
    return snap.exists() ? ({ id: snap.id, ...snap.data() } as User) : null;
  }
}
