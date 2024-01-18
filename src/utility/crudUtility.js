import { collection, getDocs } from "firebase/firestore"
import { db } from "./firebaseApp"


export const readCategories=async (setCategories)=>{
    const categRef=collection(db,'categories')
    const docs=await getDocs(categRef)
    let arr=[]
    docs.forEach(doc=>arr.push(doc.data()))
    setCategories(arr)
}