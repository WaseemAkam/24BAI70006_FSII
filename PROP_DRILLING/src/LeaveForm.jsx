function LeaveForm({ employee }) {
  return (
    <div>
      <h2>Leave Request Form</h2>

      <p><strong>Employee Name:</strong> {employee.name}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Available Leave Balance:</strong> {employee.leaveBalance} days</p>
    </div>
  );
}

export default LeaveForm;