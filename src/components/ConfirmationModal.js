import React from 'react';

function ConfirmationModal({ deleteStudent, selectedStudent, setIsModalOpen }) {
  return (
    <div className='modal'>
        <div className='modal-content'>
            <p>Are you sure you want to delete {selectedStudent.name}?</p>
            <button onClick={() => deleteStudent(selectedStudent.id)}>Yes</button>
            <button onClick={() => setIsModalOpen(false)} className='secondary'>No</button>
        </div>
    </div>
  );
}

export default ConfirmationModal;