const DeductionsTable = ({ values, onChange }) => {
  return (
    <>
      <div className="table-row">
        <span>Income Tax</span>
        <input
          type="number"
          value={values.tax}
          onChange={(e) => onChange("tax", e.target.value)}
        />
      </div>

      <div className="table-row">
        <span>Provident Fund</span>
        <input
          type="number"
          value={values.pf}
          onChange={(e) => onChange("pf", e.target.value)}
        />
      </div>

      <div className="table-row total">
        <strong>Total Deductions</strong>
        <strong>₹ {values.total}</strong>
      </div>
    </>
  );
};

export default DeductionsTable;
