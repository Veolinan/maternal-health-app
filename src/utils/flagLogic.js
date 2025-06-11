// src/utils/flagLogic.js

/**
 * Evaluates patient risk flag based on age and symptom answers.
 * @param {Object} params
 * @param {number} params.age - Patient's age.
 * @param {Array<{ severity: string }>} [params.answers=[]] - Questionnaire responses with severity.
 * @returns {string} Risk flag: 'age-risk', 'high-risk', or 'normal'.
 */
export default function flagLogic({ age, answers = [] }) {
  if (typeof age !== 'number') return 'normal'; // Fallback in case age is invalid

  // Age-based risk
  if (age < 18 || age > 40) {
    return 'age-risk';
  }

  // Response-based high risk
  const highSeverityCount = answers.filter(ans => ans.severity === 'high').length;
  if (highSeverityCount > 2) {
    return 'high-risk';
  }

  return 'normal'; // Default: no flag
}