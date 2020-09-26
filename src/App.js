import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// React-Firebase hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


// Firebase SDK


firebase.initializeApp({
  apiKey: "AIzaSyCLY6epj2T1jCDk_c9iO4JySrjvg8ctg6o",
  authDomain: "covid-dashboard-e6fac.firebaseapp.com",
  databaseURL: "https://covid-dashboard-e6fac.firebaseio.com",
  projectId: "covid-dashboard-e6fac",
  storageBucket: "covid-dashboard-e6fac.appspot.com",
  messagingSenderId: "265499291442",
  appId: "1:265499291442:web:495e39e7df2bc5f826712b",
  measurementId: "G-37K20WH1G4"
})

// Reference SDK with global vars
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <section>
        {user ? <h1>Hello</h1> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <Button onClick={signInWithGoogle}>Sign in with Google</Button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button class={`sign-out ${auth.currentUser ? 'show' : 'hide'}`} onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default App;
