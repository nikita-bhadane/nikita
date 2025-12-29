const NetPaySummary = ({ earnings, deductions, netPay }) => {
  return (
    <div className="summary">
      <p>Total Earnings: ₹ {earnings}</p>
      <p>Total Deductions: ₹ {deductions}</p>
      <h3>Net Payable: ₹ {netPay}</h3>
    </div>
  );
};

export default NetPaySummary;
