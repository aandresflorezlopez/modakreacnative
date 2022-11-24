import { initializeApp } from 'firebase/app';

import { firebase as firebaseConfig } from '../../config/firebase';

// Optionally import the services that you want to use
import { getDatabase } from 'firebase/database';

const app = initializeApp(firebaseConfig);

const firebaseApp = getDatabase(app);

const FirebaseLoader = () => ({
  boot: (App) => {
    App.firebase = firebaseApp;
  }
});

export default FirebaseLoader;
