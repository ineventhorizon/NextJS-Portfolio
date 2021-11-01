import firebase from "firebase/app"
import "firebase/firestore"

const config = {
    
  };

if(!firebase.apps.length){
    firebase.initializeApp(config)
}

const firestore = firebase.firestore()

export {firestore}
