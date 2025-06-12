import { useState } from 'react';
import Modal from '../common/Modal';

const FlagConditionModal = ({ isOpen, onClose, onFlag }) => {
  const [reason, setReason] = useState('');

  const handleFlag = () => {
    onFlag(reason);
    setReason('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Flag Patient Condition">
      <textarea
        className="border p-2 w-full h-24 rounded"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Describe condition..."
      />
      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
        <button onClick={handleFlag} className="px-4 py-2 bg-red-600 text-white rounded">
          Flag
        </button>
      </div>
    </Modal>
  );
};

export default FlagConditionModal;
