package com.example.demo;

import com.example.demo.PayslipRequest;
import com.example.demo.PayslipResponse;
import org.springframework.stereotype.Service;

@Service
public class PayslipService {

    public PayslipResponse calculate(PayslipRequest request) {

        // ===== EARNINGS =====
        double totalEarnings =
                request.getBasic()
                        + request.getHra()
                        + request.getSpecial();

        // ===== DEDUCTIONS =====
        double totalDeductions =
                request.getTax()
                        + request.getPf();

        // ===== NET PAY =====
        double netPay = totalEarnings - totalDeductions;

        return new PayslipResponse(
                round(totalEarnings),
                round(totalDeductions),
                round(netPay)
        );
    }

    private double round(double value) {
        return Math.round(value * 100.0) / 100.0;
    }
}