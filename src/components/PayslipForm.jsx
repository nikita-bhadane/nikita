import { useState, useEffect } from "react";
import CompanyDetails from "./CompanyDetails";
import EmployeeSummary from "./EmployeeSummary";
import EarningsTable from "./EarningsTable";
import DeductionsTable from "./DeductionsTable";
import NetPaySummary from "./NetPaySummary";

const PayslipForm = () => {

  const [earnings, setEarnings] = useState({
    basic: 0,
    hra: 0,
    special: 0,
    total: 0
  });

  const [deductions, setDeductions] = useState({
    tax: 0,
    pf: 0,
    total: 0
  });

  const [netPay, setNetPay] = useState(0);

  const updateEarnings = (key, value) => {
    setEarnings(prev => ({ ...prev, [key]: Number(value) }));
  };

  const updateDeductions = (key, value) => {
    setDeductions(prev => ({ ...prev, [key]: Number(value) }));
  };

  // 🔥 ALWAYS CALL BACKEND WHEN VALUES CHANGE
  useEffect(() => {
    const fetchCalculation = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/payslip/calculate",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              basic: Number(earnings.basic),
              hra: Number(earnings.hra),
              special: Number(earnings.special),
              tax: Number(deductions.tax),
              pf: Number(deductions.pf)
            })
          }
        );

        const data = await response.json();

        setEarnings(prev => ({ ...prev, total: data.totalEarnings }));
        setDeductions(prev => ({ ...prev, total: data.totalDeductions }));
        setNetPay(data.netPay);

      } catch (err) {
        console.error("Calculation failed", err);
      }
    };

    fetchCalculation();
  }, [
    earnings.basic,
    earnings.hra,
    earnings.special,
    deductions.tax,
    deductions.pf
  ]);

  const resetForm = () => {
    setEarnings({ basic: 0, hra: 0, special: 0, total: 0 });
    setDeductions({ tax: 0, pf: 0, total: 0 });
    setNetPay(0);
  };

  return (
    <div className="payslip-container">
      <CompanyDetails />
      <EmployeeSummary />

      <div className="grid-2">
        <div className="section">
          <h3>Earnings</h3>
          <EarningsTable values={earnings} onChange={updateEarnings} />
        </div>

        <div className="section">
          <h3>Deductions</h3>
          <DeductionsTable values={deductions} onChange={updateDeductions} />
        </div>
      </div>

      <NetPaySummary
        earnings={earnings.total}
        deductions={deductions.total}
        netPay={netPay}
      />

      <div className="actions">
        <button className="btn-print" onClick={() => window.print()}>
          Print
        </button>
        <button className="btn-reset" onClick={resetForm}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default PayslipForm;
