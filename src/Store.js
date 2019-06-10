import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import {
  reactReduxFirebase,
  firebaseReducer,
  reduxReactFirebase
} from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
// Reeducers
// @todo

const firebaseConfig = {
  apiKey: "AIzaSyAn7S53dOYSlsWzp8hcPE0-EEnKJw3g460",
  authDomain: "debtmanager-8cb66.firebaseapp.com",
  databaseURL: "https://debtmanager-8cb66.firebaseio.com",
  projectId: "debtmanager-8cb66",
  storageBucket: "debtmanager-8cb66.appspot.com",
  messagingSenderId: "1079336465268"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true //Firestore for Profile instead of Realtime DB
};

// Init Firebase instance
firebase.initializeApp(firebaseConfig);

// Init Firestore
//const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

// Create initial state
const initialState = {};

//Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reduxReactFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
