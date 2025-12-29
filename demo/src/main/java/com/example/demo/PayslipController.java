package com.example.demo;

import com.example.demo.PayslipRequest;
import com.example.demo.PayslipResponse;
import com.example.demo.PayslipService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payslip")
@CrossOrigin(origins = "http://localhost:5173")
public class PayslipController {

    private final PayslipService payslipService;

    public PayslipController(PayslipService payslipService) {
        this.payslipService = payslipService;
    }

    @PostMapping("/calculate")
    public PayslipResponse calculate(@RequestBody PayslipRequest request) {
        return payslipService.calculate(request);
    }
}
