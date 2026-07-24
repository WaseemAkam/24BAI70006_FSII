import Dashboard from "./Dashboard.jsx";
import "./App.css";

function App() {
  const employee = {
    name: "Rahul Sharma",
    department: "Engineering",
    leaveBalance: 12,
  };

  return (
    <div className="app">
      <h1>Employee Leave Request Portal</h1>
      <Dashboard employee={employee} />
    </div>
  );
}

export default App;