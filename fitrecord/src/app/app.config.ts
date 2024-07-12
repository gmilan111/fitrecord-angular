import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {AngularFireModule, FIREBASE_OPTIONS} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";

const firebaseConfig = {
  apiKey: "AIzaSyCcn8LzTBlJtYzA-EFGBJwTy1Q3d6nqEgc",
  authDomain: "fitrecord-hu.firebaseapp.com",
  projectId: "fitrecord-hu",
  storageBucket: "fitrecord-hu.appspot.com",
  messagingSenderId: "693188166889",
  appId: "1:693188166889:web:8f045a24932b4db7e7dc78"
};

/*export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"fitrecord-hu","appId":"1:693188166889:web:8f045a24932b4db7e7dc78","storageBucket":"fitrecord-hu.appspot.com","apiKey":"AIzaSyCcn8LzTBlJtYzA-EFGBJwTy1Q3d6nqEgc","authDomain":"fitrecord-hu.firebaseapp.com","messagingSenderId":"693188166889"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};*/

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    {provide: FIREBASE_OPTIONS, useValue: firebaseConfig},
    //importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"lakasvadasz-portal","appId":"1:177201877219:web:0f5cc18d2976a612b735d6","storageBucket":"lakasvadasz-portal.appspot.com","apiKey":"AIzaSyBA9rdHtN6fbC6diaWfXw4A4S4wtV5baWg","authDomain":"lakasvadasz-portal.firebaseapp.com","messagingSenderId":"177201877219"}))),
    importProvidersFrom([AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule, AngularFireDatabaseModule, AngularFirestoreModule]), provideAnimationsAsync(),
  ]
};
