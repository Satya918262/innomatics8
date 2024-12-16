import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent, updateStudent } from '../features/students/studentSlice';

const StudentForm = ({ student }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: '',
  });

  useEffect(() => {
    if (student) {
      setFormData(student); // Prepopulate form with existing student details
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student) {
      dispatch(updateStudent({ ...formData, id: student.id }));
    } else {
      dispatch(addStudent({ ...formData, id: Date.now() }));
    }
    alert('Student data submitted successfully!');
    handleReset(); // Reset form after submission
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', age: '', class: '', address: '', phone: '' });
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '20px auto',
        padding: '20px 20px 20px 20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>
        {student ? 'Edit Student' : 'Add Student'}
      </h3>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft:'20px' }}
      >
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Student Name"
          style={{
            padding: '10px',
            width: '90%',
            borderRadius: '4px',
            border: '2px solid #ccc',
          }}
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          style={{
            padding: '10px',
            width: '90%',
            borderRadius: '4px',
            border: '2px solid #ccc',
          }}
        />
        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          type="number"
          style={{
            padding: '10px',
            width: '90%',
            borderRadius: '4px',
            border: '2px solid #ccc',
          }}
        />
        <input
          name="class"
          value={formData.class}
          onChange={handleChange}
          placeholder="Class"
          style={{
            padding: '10px',
            width: '90%',
            borderRadius: '4px',
            border: '2px solid #ccc',
          }}
        />
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          style={{
            padding: '10px',
            width: '90%',
            borderRadius: '4px',
            border: '2px solid #ccc',
          }}
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          type="tel"
          style={{
            padding: '10px',
            width: '90%',
            borderRadius: '4px',
            border: '2px solid #ccc',
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            style={{
              padding: '10px 20px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
