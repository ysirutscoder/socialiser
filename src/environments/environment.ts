// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    name: 'default',
    firebase: {
        config: {
            apiKey: 'AIzaSyDnHHU5ZlUm4DE66UzdgO1v4NhzhEqxrKg',
            authDomain: 'socialiser-3159f.firebaseapp.com',
            projectId: 'socialiser-3159f',
            storageBucket: 'socialiser-3159f.appspot.com',
            messagingSenderId: '261990874521',
            appId: '1:261990874521:web:d7951ac6eecb6857a06708',
            measurementId: 'G-QPSKB8ZG22'
        },
        actionCodeSettings: {
            url: 'http://localhost:5200/demo',
            handleCodeInApp: true
        }
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
