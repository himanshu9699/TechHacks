import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDZIqD8P2s4OoBlH5wVSR2dL2W7xORpNL0",
    authDomain: "bloodproject-22af0.firebaseapp.com",
    projectId: "bloodproject-22af0",
    storageBucket: "bloodproject-22af0.appspot.com",
    messagingSenderId: "718258903397",
    appId: "1:718258903397:web:66c3c2b24543f0c44de98c",
    measurementId: "G-YFMQ46HG23"
  };

if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);    
}
export {firebase};