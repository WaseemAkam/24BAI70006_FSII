import { createContext, useContext, useEffect, useRef, useState } from 'react'
import './App.css'

const UserContext = createContext(null)

function useUser() {
  return useContext(UserContext)
}

const courses = [
  { id: 1, title: 'React Basics', price: '₹999' },
  { id: 2, title: 'Node.js Essentials', price: '₹1199' },
  { id: 3, title: 'UI/UX Design', price: '₹799' },
]

function Navbar({ title, enrolledCount }) {
  return (
    <header className="navbar">
      <div>
        <h1>{title}</h1>
        <p>Enrolled: {enrolledCount} course{enrolledCount === 1 ? '' : 's'}</p>
      </div>
    </header>
  )
}

function Dashboard({ title, student, courses, onEnroll }) {
  return (
    <section className="dashboard">
      <div>
        <p className="eyebrow">SKILLNEST</p>
        <h2>{title}</h2>
        <CourseCatalog courses={courses} student={student} onEnroll={onEnroll} />
      </div>
    </section>
  )
}

function CourseCatalog({ courses, student, onEnroll }) {
  return (
    <section className="course-catalog">
      <CourseList courses={courses} student={student} onEnroll={onEnroll} />
    </section>
  )
}

function CourseList({ courses, student, onEnroll }) {
  return (
    <div className="course-list">
      <h3>COURSE CATALOG</h3>
      {courses.map((course) => (
        <article className="course-card" key={course.id}>
          <div>
            <h4>{course.title}</h4>
            <p>{course.price}</p>
          </div>
          <button type="button" onClick={() => onEnroll(course.title)}>
            Enroll
          </button>
        </article>
      ))}
      <StudentProfile student={student} />
    </div>
  )
}

function StudentProfile() {
  const student = useUser()

  return (
    <aside className="student-profile">
      <h3>Student Details</h3>
      <div className="student-details">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Program:</strong> {student.program}</p>
      </div>
    </aside>
  )
}

function App() {
  const [enrolledCount, setEnrolledCount] = useState(0)
  const prevCountRef = useRef(enrolledCount)

  const student = {
    name: 'Karan Mehta',
    email: 'karan@gmail.com',
    program: 'Web Development',
    enrolled: enrolledCount,
  }

  useEffect(() => {
    if (prevCountRef.current !== enrolledCount) {
      console.log(`Enrollment updated. Total courses: ${enrolledCount}`)
      prevCountRef.current = enrolledCount
    }
  }, [enrolledCount])

  const handleEnroll = () => {
    setEnrolledCount((count) => count + 1)
  }

  return (
    <UserContext.Provider value={student}>
      <div className="app-shell">
        <Navbar title="Skillnest- Online Learning Platform" enrolledCount={enrolledCount} />
        <Dashboard title="Welcome, Karan Mehta" student={student} courses={courses} onEnroll={handleEnroll} />
      </div>
    </UserContext.Provider>
  )
}

export default App
