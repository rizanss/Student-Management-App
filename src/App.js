import React, { useState } from 'react';
import Header from './components/Header';
import StudentDetail from './components/StudentDetail';
import StudentList from './components/StudentList';
import ConfirmationModal from './components/ConfirmationModal';
import StudentForm from './components/StudentForm'
import './styles/style.css'

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map((student) => 
      (student.id === updatedStudent.id ? updatedStudent : student)
    ));
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className='hero'>
        <h1>Welcome to Student Management Application</h1>
        <p>The Student Management App is an application for view, add, delete and edit student data, <br/> aimed at processing student data so that it is easier for stakeholders to manage.</p>
      </div>
      <div className='container'>
        <Header />
        <StudentList 
          students={students} 
          setSelectedStudent={setSelectedStudent} 
          setIsFormOpen={setIsFormOpen} 
          setIsModalOpen={setIsModalOpen} 
        />
        {isFormOpen && <StudentForm 
          addStudent={addStudent} 
          updateStudent={updateStudent} 
          selectedStudent={selectedStudent} 
          setIsFormOpen={setIsFormOpen} 
        />}
        {selectedStudent && <StudentDetail 
          student={selectedStudent} 
        />}
        {isModalOpen && <ConfirmationModal 
          deleteStudent={deleteStudent} 
          selectedStudent={selectedStudent} 
          setIsModalOpen={setIsModalOpen} 
        />}
        <button onClick={() => { setSelectedStudent(null); setIsFormOpen(true); }}>Add Student</button>
      </div>
    </div>
  );
}

export default App;