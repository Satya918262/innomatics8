// src/components/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const students = useSelector((state) => state.students.list);

  return (
    <div>
      <h1 style={{ textAlign: 'center', padding:'50px' }}>Welcome to the Student Management Portal</h1>
      <div className="summary" style={{ textAlign: 'center' }}>
        <h2>Student Summary</h2>
        <p>Total Students: {students.length}</p>
      </div>
    </div>
  );
};

export default Dashboard;
