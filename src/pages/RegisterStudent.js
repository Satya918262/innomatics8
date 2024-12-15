// src/pages/RegisterStudent.js
import React, { useState } from 'react';
import StudentForm from '../components/StudentForm';

const RegisterStudent = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {isOpen && <StudentForm onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default RegisterStudent;
