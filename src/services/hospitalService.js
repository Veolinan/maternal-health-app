// src/services/hospitalService.js
import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const hospitalsRef = collection(db, 'hospitals');

export async function getAllHospitals() {
  const snapshot = await getDocs(hospitalsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getHospitalById(id) {
  const docSnap = await getDoc(doc(db, 'hospitals', id));
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error('Hospital not found');
  }
}

export async function addHospital(hospitalData) {
  const docRef = await addDoc(hospitalsRef, hospitalData);
  return { id: docRef.id };
}

export async function updateHospital(id, updates) {
  await updateDoc(doc(db, 'hospitals', id), updates);
}

export async function deleteHospital(id) {
  await deleteDoc(doc(db, 'hospitals', id));
}
