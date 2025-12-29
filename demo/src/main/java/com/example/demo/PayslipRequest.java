package com.example.demo;

public class PayslipRequest {

    private double basic;
    private double hra;
    private double special;

    private double tax;
    private double pf;

    public double getBasic() {
        return basic;
    }

    public void setBasic(double basic) {
        this.basic = basic;
    }

    public double getHra() {
        return hra;
    }

    public void setHra(double hra) {
        this.hra = hra;
    }

    public double getSpecial() {
        return special;
    }

    public void setSpecial(double special) {
        this.special = special;
    }

    public double getTax() {
        return tax;
    }

    public void setTax(double tax) {
        this.tax = tax;
    }

    public double getPf() {
        return pf;
    }

    public void setPf(double pf) {
        this.pf = pf;
    }

    @Override
    public String toString() {
        return "PayslipRequest{" +
                "basic=" + basic +
                ", hra=" + hra +
                ", special=" + special +
                ", tax=" + tax +
                ", pf=" + pf +
                '}';
    }

}