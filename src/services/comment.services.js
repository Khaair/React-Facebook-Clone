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

const fbcommentCollectionRef = collection(db, "comment");

class UserDataService {
    addComment = (newComment) => {
        return addDoc(fbcommentCollectionRef , newComment);
      };

      getAllComment  = () => {
        return getDocs(fbcommentCollectionRef);
      };

      deleteComment = (id) => {
        const commentDoc = doc(db, "comment", id);
        return deleteDoc(commentDoc);
      };

    //   getUser = (id) => {
    //     const userDoc = doc(db, "fbuser", id);
    //     return getDoc(userDoc);
    //   };

    //   updateUser = (id, updatedUser) => {
    //     const userDoc = doc(db, "fbuser", id);
    //     return updateDoc(userDoc, updatedUser);
    //   };


     
}

export default new UserDataService();
