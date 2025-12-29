const EmployeeSummary = () => {
  return (
    <div className="section">
      <h3>Employee Pay Summary</h3>

      <div className="emp-grid">
        {/* LEFT */}
        <div className="emp-box">
          <label>Employee Name</label>
          <input />

          <label>Employee ID</label>
          <input />

          <label>Pay Date</label>
          <input type="date" />
        </div>

        {/* RIGHT */}
        <div className="emp-box">
          <label>Pay Period</label>
          <input />

          <label>Loss of Pay Days</label>
          <input />

          <label>Paid Days</label>
          <input />
        </div>
      </div>
    </div>
  );
};

export default EmployeeSummary;
