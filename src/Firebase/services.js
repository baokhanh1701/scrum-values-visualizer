import { db } from "./config";
import { collection, addDoc, getDocs, where, query, doc, serverTimestamp, orderBy } from "firebase/firestore";
import { v4 } from 'uuid';

export const addDocument = async (collectionName, data) => {
  const docRef = await addDoc(collection(db, collectionName), {
    ...data,
    uuid: v4(),
    createdAt: serverTimestamp()
  })
  try {
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.log(error);
  }
};

export const addNewItemForUser = async (collectionName, uid, subCollectionName, data) => {
  const docRef = doc(db, collectionName, uid);
  const colRef = collection(docRef, subCollectionName);
  const id = await addDoc(colRef, {
    ...data,
    uuid: v4()
  });
  try {
    console.log(id);
  } catch (error) {

  }
}

export const getAll = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const docSnap = await getDocs(
    query(
      collectionRef
    ),
    orderBy('createdAt')
  )
  const arr = [];
  try {
    docSnap.forEach((doc) => {
      arr.push(doc.data());
    })
  } catch (error) {
    console.log(error);
  }
  return (
    arr
  )
}


export const getAccount = async (collectionName, condition) => {
  // collection().orderBy('createdAt');
  const collectionRef = collection(db, collectionName);
  const docSnap = await getDocs(
    query(
      collectionRef,
      where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      )
    )
  )
  const arr = [];
  try {
    docSnap.forEach((doc) => {
      arr.push(doc.data());
    })
  } catch (error) {
    console.log(error);
  }
  return (
    arr
  )
}

export const getDocument = async (collectionName, condition) => {
  // collection().orderBy('createdAt');
  const collectionRef = collection(db, collectionName);
  const docSnap = await getDocs(
    query(
      collectionRef,
      where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      )
    )
  )
  const arr = [];
  try {
    docSnap.forEach((doc) => {
      arr.push(doc.data());
    })
  } catch (error) {
    console.log(error);
  }
  return (
    arr
  )
}