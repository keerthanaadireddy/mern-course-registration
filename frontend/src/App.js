import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

function App() {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);

  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/courses');
      setCourses(res.data);
    } catch (err) {
      console.error('Failed to fetch courses:', err.message);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSave = async (course) => {
    try {
      if (course._id) {
        await axios.put(`http://localhost:5000/api/courses/${course._id}`, course);
      } else {
        await axios.post('http://localhost:5000/api/courses', course);
      }
      fetchCourses();
      setEditingCourse(null);
    } catch (err) {
      console.error('Save failed:', err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/courses/${id}`);
      fetchCourses();
    } catch (err) {
      console.error('Delete failed:', err.message);
    }
  };

  return (
    <div className="App">
      <h1>Course Registration</h1>
      <CourseForm course={editingCourse} onSave={handleSave} />
      <CourseList courses={courses} onEdit={setEditingCourse} onDelete={handleDelete} />
    </div>
  );
}

export default App;
