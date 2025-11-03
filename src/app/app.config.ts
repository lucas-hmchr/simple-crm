import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({ 
      projectId: "simple-crm-5c7fd", 
      appId: "1:708660364791:web:7b47fdca22d07c526d1af2", 
      storageBucket: "simple-crm-5c7fd.firebasestorage.app", 
      apiKey: "AIzaSyALr0_BG8aFucSC4SsUh_6cRLnd9jsm4bs", 
      authDomain: "simple-crm-5c7fd.firebaseapp.com", 
      messagingSenderId: "708660364791"})), 
      provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
