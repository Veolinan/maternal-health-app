// src/services/transferService.js
import { db, timestamp } from './firebase';
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';

export const transferPatient = async (code, targetHospitalId) => {
  const q = query(collection(db, 'patients'), where('code', '==', code));
  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    const patientDoc = snapshot.docs[0];
    const patientRef = doc(db, 'patients', patientDoc.id);
    await setDoc(patientRef, {
      ...patientDoc.data(),
      hospitalId: targetHospitalId,
      updatedAt: timestamp.now(),
    });
    return true;
  }
  return false;
};

export const requestPatientRecords = async (code) => {
  const q = query(collection(db, 'patients'), where('code', '==', code));
  const snapshot = await getDocs(q);
  if (!snapshot.empty) {
    return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
  }
  return null;
};
