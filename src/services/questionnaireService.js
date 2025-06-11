// src/services/questionnaireService.js
import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import flagLogic from '../utils/flagLogic';

/**
 * Submits a questionnaire and stores the evaluated risk flag.
 * @param {Object} params
 * @param {string} params.code - Patient's unique code.
 * @param {number} params.age - Patient's age.
 * @param {Array<{ question: string, severity: string }>} params.answers - Questionnaire answers.
 */
export async function submitQuestionnaire({ code, age, answers }) {
  const flags = flagLogic({ age, answers });

  await addDoc(collection(db, 'questionnaires'), {
    patientCode: code,
    answers,
    flags,
    submittedAt: serverTimestamp(),
  });
}