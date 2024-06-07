import React, { useState, useEffect } from 'react';

function StudentForm({ addStudent, updateStudent, selectedStudent, setIsFormOpen }) {
  const [student, setStudent] = useState({ id: '', name: '' });

  useEffect(() => {
    if (selectedStudent) {
      setStudent(selectedStudent);
    }
  }, [selectedStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.id) {
      updateStudent(student);
    } else {
      addStudent({ ...student, id: Date.now() });
    }
    setIsFormOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default StudentForm;
