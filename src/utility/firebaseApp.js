import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import { getAuth} from "firebase/auth"

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)
export const storage=getStorage(app)
export const auth=getAuth(app)


