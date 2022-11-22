import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { config } from "./config";

function Add_business() {
  const formik = useFormik({
    initialValues: {
      month: "",
      income: "",
      exp_rent: "",
      exp_loan: "",
      exp_fuel: "",
      exp_transport: "",
      expense: "",
    },
    validate: (values) => {
      let error = {};
      if (!values.income) {
        error.income = "Enter your monthly income";
      }
      if (!values.expense) {
        error.expense = "Enter your monthly expenses";
      }
      if (!values.exp_rent) {
        error.exp_rent = "Enter your rent expense";
      }
      if (!values.exp_loan) {
        error.exp_loan = "Enter your loan expense";
      }
      if (!values.exp_fuel) {
        error.exp_fuel = "Enter your fuel expense";
      }
      if (!values.exp_transport) {
        error.exp_transport = "Enter your transport expense";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        const personalData1 = await axios.post(
          `${config.api}/create-business`,
          values
        );
        alert("Business Data Added!");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <h2>Add-Business Finance Details</h2>
          <p class="mb-4">Get your Income and Expenses - Data</p>
          <div className="col-lg-4">
            <label for="month" className="form-label">
              Month:<span style={{ color: "red" }}>*</span>
            </label>
            <select
              name="month"
              onChange={formik.handleChange}
              value={formik.values.month}
              id="month"
              className="form-select"
            >
              <option selected>Choose...</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
          <div className="col-lg-4">
            <label for="income" className="form-label">
              Monthly-Income(Rs.)<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              name="income"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.income}
              type="number"
              className={`form-control ${
                formik.touched.income && formik.errors.income ? "error-box" : ""
              } ${
                formik.touched.income && !formik.errors.income
                  ? "success-box"
                  : ""
              } `}
              id="income"
            />
            {formik.touched.income && formik.errors.income ? (
              <span style={{ color: "red" }}>{formik.errors.income}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label for="phone" className="form-label">
              Monthly-Expenses(Rs.)<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              name="expense"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.expense}
              type="number"
              className={`form-control ${
                formik.touched.expense && formik.errors.expense
                  ? "error-box"
                  : ""
              } ${
                formik.touched.expense && !formik.errors.expense
                  ? "success-box"
                  : ""
              } `}
              id="phone"
            />
            {formik.touched.expense && formik.errors.expense ? (
              <span style={{ color: "red" }}>{formik.errors.expense}</span>
            ) : null}
          </div>
        </div>
        <div className="row mt-5">
          <h5>Expenses in Detail:</h5>
          <div className="col-lg-4">
            <label for="phone" className="form-label">
              Rent(Rs.)<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              name="exp_rent"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.exp_rent}
              type="number"
              className={`form-control ${
                formik.touched.exp_rent && formik.errors.exp_rent
                  ? "error-box"
                  : ""
              } ${
                formik.touched.exp_rent && !formik.errors.exp_rent
                  ? "success-box"
                  : ""
              } `}
              id="phone"
            />
            {formik.touched.exp_rent && formik.errors.exp_rent ? (
              <span style={{ color: "red" }}>{formik.errors.exp_rent}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label for="phone" className="form-label">
              Loan(Rs.)<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              name="exp_loan"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.exp_loan}
              type="number"
              className={`form-control ${
                formik.touched.exp_loan && formik.errors.exp_loan
                  ? "error-box"
                  : ""
              } ${
                formik.touched.exp_loan && !formik.errors.exp_loan
                  ? "success-box"
                  : ""
              } `}
              id="phone"
            />
            {formik.touched.exp_loan && formik.errors.exp_loan ? (
              <span style={{ color: "red" }}>{formik.errors.exp_loan}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label for="phone" className="form-label">
              Fuel(Rs.)<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              name="exp_fuel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.exp_fuel}
              type="number"
              className={`form-control ${
                formik.touched.exp_fuel && formik.errors.exp_fuel
                  ? "error-box"
                  : ""
              } ${
                formik.touched.exp_fuel && !formik.errors.exp_fuel
                  ? "success-box"
                  : ""
              } `}
              id="phone"
            />
            {formik.touched.exp_fuel && formik.errors.exp_fuel ? (
              <span style={{ color: "red" }}>{formik.errors.exp_fuel}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label for="phone" className="form-label">
              Transport(Rs.)<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              name="exp_transport"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.exp_transport}
              type="number"
              className={`form-control ${
                formik.touched.exp_transport && formik.errors.exp_transport
                  ? "error-box"
                  : ""
              } ${
                formik.touched.exp_transport && !formik.errors.exp_transport
                  ? "success-box"
                  : ""
              } `}
              id="phone"
            />
            {formik.touched.exp_transport && formik.errors.exp_transport ? (
              <span style={{ color: "red" }}>
                {formik.errors.exp_transport}
              </span>
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 m-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link
              to={"/portal/business"}
              type="button"
              className="btn btn-primary m-2"
            >
              Back to Monthly
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Add_business;
