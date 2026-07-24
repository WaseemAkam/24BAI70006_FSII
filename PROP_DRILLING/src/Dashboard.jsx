import EmployeeSection from "./EmployeeSection.jsx";

function Dashboard({ employee }) {
  return (
    <div>
      <EmployeeSection employee={employee} />
    </div>
  );
}

export default Dashboard;