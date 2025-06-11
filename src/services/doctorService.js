// src/services/doctorService.js
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

const doctorsRef = collection(db, 'doctors');

export async function getAllDoctors() {
  const snapshot = await getDocs(doctorsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getDoctorById(id) {
  const docSnap = await getDoc(doc(db, 'doctors', id));
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error('Doctor not found');
  }
}

export async function addDoctor(doctorData) {
  const docRef = await addDoc(doctorsRef, doctorData);
  return { id: docRef.id };
}

export async function updateDoctor(id, updates) {
  await updateDoc(doc(db, 'doctors', id), updates);
}

export async function deleteDoctor(id) {
  await deleteDoc(doc(db, 'doctors', id));
}