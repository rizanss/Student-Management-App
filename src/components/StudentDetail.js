import React from 'react';

function StudentDetail({ student }) {
  return (
    <div>
      <h2>Student Detail</h2>
      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
    </div>
  );
}

export default StudentDetail;
