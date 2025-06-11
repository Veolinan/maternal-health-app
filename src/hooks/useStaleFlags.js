import { useState, useEffect } from 'react';
import flagLogic from '../utils/flagLogic';

/**
 * Hook to calculate patient flag based on age and questionnaire answers.
 * @param {{ age: number, answers: Array<{ severity: string }> }} input
 * @returns {string} flag: 'age-risk', 'high-risk', or 'normal'
 */
export default function useStateFlags({ age, answers }) {
  const [flag, setFlag] = useState('normal');

  useEffect(() => {
    if (age !== undefined && Array.isArray(answers)) {
      const result = flagLogic({ age, answers });
      setFlag(result);
    }
  }, [age, answers]);

  return flag;
}