const EarningsTable = ({ values, onChange }) => {
  return (
    <>
      <div className="table-row">
        <span>Basic</span>
        <input
          type="number"
          value={values.basic}
          onChange={(e) => onChange("basic", e.target.value)}
        />
      </div>

      <div className="table-row">
        <span>House Rent Allowance</span>
        <input
          type="number"
          value={values.hra}
          onChange={(e) => onChange("hra", e.target.value)}
        />
      </div>

      <div className="table-row">
        <span>Special Allowance</span>
        <input
          type="number"
          value={values.special}
          onChange={(e) => onChange("special", e.target.value)}
        />
      </div>

      <div className="table-row total">
        <strong>Total Earnings</strong>
        <strong>₹ {values.total}</strong>
      </div>
    </>
  );
};

export default EarningsTable;
