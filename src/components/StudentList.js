import React from 'react';

function StudentList({ students, setSelectedStudent, setIsFormOpen, setIsModalOpen }) {
  return (
    <div>
      <ul>
        {students.map((student) => (
          <li key={student.id} className="student-item">
            <span className="student-name">{student.name}</span>
            <div className="student-actions">
              <button onClick={() => { setSelectedStudent(student); setIsFormOpen(true); }}>Edit</button>
              <button onClick={() => { setSelectedStudent(student); setIsModalOpen(true); }} className="secondary">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;