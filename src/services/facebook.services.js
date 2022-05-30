import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const fbuserCollectionRef = collection(db, "fbuser");

class UserDataService {
    addUsers = (newUser) => {
        return addDoc(fbuserCollectionRef, newUser);
      };

      getAllUsers = () => {
        return getDocs(fbuserCollectionRef);
      };

      deleteUser = (id) => {
        const userDoc = doc(db, "fbuser", id);
        return deleteDoc(userDoc);
      };

      getUser = (id) => {
        const userDoc = doc(db, "fbuser", id);
        return getDoc(userDoc);
      };

      updateUser = (id, updatedUser) => {
        const userDoc = doc(db, "fbuser", id);
        return updateDoc(userDoc, updatedUser);
      };


      // comment

      addComment = (newComment) => {
        return addDoc(fbuserCollectionRef, newComment);
      };
}

export default new UserDataService();
