import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyAqIQyVjHZpm5VLFFvcXkOTXhZi9dRMZnk",
  authDomain: "fitflex-web-react.firebaseapp.com",
  databaseURL: "https://fitflex-web-react.firebaseio.com",
  projectId: "fitflex-web-react",
  storageBucket: "fitflex-web-react.appspot.com",
  messagingSenderId: "1031039740671",
  appId: "1:1031039740671:web:3c499ca69d63eaf0877aca",
  measurementId: "G-PTXNDQK31H",
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
