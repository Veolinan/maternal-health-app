import { useState } from 'react';
import { userService } from '../../features/users/userService';

const SendLoginDetailsButton = ({ email }) => {
  const [status, setStatus] = useState('idle');

  const send = async () => {
    setStatus('sending');
    try {
      await userService.sendLoginLink(email);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <button
      onClick={send}
      disabled={status !== 'idle'}
      className="text-blue-600 hover:underline disabled:opacity-50"
    >
      {status === 'idle' && 'Send Login Link'}
      {status === 'sending' && 'Sending…'}
      {status === 'sent' && 'Sent'}
      {status === 'error' && 'Try Again'}
    </button>
  );
};

export default SendLoginDetailsButton;