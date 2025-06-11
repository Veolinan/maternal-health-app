// src/services/patientService.js
import { db, timestamp } from './firebase';
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from 'firebase/firestore';
import { gen4Digit } from '../utils/generateCode';
import flagLogic from '../utils/flagLogic';

export const getPatients = async () => {
  const snapshot = await getDocs(collection(db, 'patients'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const registerPatient = async ({ name, age, doctorId, hospitalId }) => {
  const code = gen4Digit(); // ✅ fixed
  const flag = flagLogic({ age });

  const patientRef = await addDoc(collection(db, 'patients'), {
    name,
    age,
    code,
    doctorId,
    hospitalId,
    flag,
    createdAt: timestamp(),  // ✅ fixed
    updatedAt: timestamp(),  // ✅ fixed
  });

  return { id: patientRef.id, code };
};

export const getPatientByCode = async (code) => {
  const q = query(collection(db, 'patients'), where('code', '==', code));
  const snapshot = await getDocs(q);
  if (!snapshot.empty) {
    return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
  }
  return null;
};