import LeaveForm from "./LeaveForm.jsx";

function EmployeeSection({ employee }) {
  return (
    <div>
      <LeaveForm employee={employee} />
    </div>
  );
}

export default EmployeeSection;