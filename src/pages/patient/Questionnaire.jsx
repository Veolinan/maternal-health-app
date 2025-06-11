// src/pages/patient/Questionnaire.jsx
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { submitQuestionnaire } from '../../services/questionnaireService';
import { useParams } from 'react-router-dom';


const questions = [
  'Do you feel nauseous?',
  'Have you experienced unusual bleeding?',
  'Do you feel excessive fatigue?',
  'Do you have high blood pressure?',
];

const Questionnaire = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitQuestionnaire(code, answers);
    navigate(`/patient/thankyou`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full"
      >
        <h1 className="text-2xl font-bold mb-6">Health Questionnaire</h1>
        {questions.map((q, i) => (
          <div key={i} className="mb-4">
            <p className="font-medium mb-2">{q}</p>
            <div className="flex space-x-4">
              <Button
                type="button"
                variant={answers[i] === 'yes' ? 'default' : 'outline'}
                onClick={() => handleAnswer(i, 'yes')}
              >
                Yes
              </Button>
              <Button
                type="button"
                variant={answers[i] === 'no' ? 'default' : 'outline'}
                onClick={() => handleAnswer(i, 'no')}
              >
                No
              </Button>
            </div>
          </div>
        ))}
        <Button type="submit" className="mt-6 w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Questionnaire;