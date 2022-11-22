import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { config } from "./config";

function Add_personal() {
  const formik = useFormik({
    initialValues: {
      month: "",
      income: "",
      exp_food: "",
      exp_movie: "",
      exp_clothing: "",
      exp_medical: "",
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
      if (!values.exp_food) {
        error.exp_food = "Enter your food expense";
      }
      if (!values.exp_movie) {
        error.exp_movie = "Enter your movie expense";
      }
      if (!values.exp_clothing) {
        error.exp_clothing = "Enter your clothing expense";
      }
      if (!values.exp_medical) {
        error.exp_medical = "Enter your medical expense";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        const personalData1 = await axios.post(
          `${config.api}/create-data`,
          values
        );
        alert("Personal Data Added!");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <h2>Add-Personal Finance Details</h2>
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
              Food(Rs.)<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              name="exp_food"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.exp_food}
              type="number"
              className={`form-control ${
                formik.touched.exp_food && formik.errors.exp_food
                  ? "error-box"
                  : ""
              } ${
                formik.touched.exp_food && !formik.errors.exp_food
                  ? "success-box"
                  : ""
              } `}
              id="phone"
            />
            {formik.touched.exp_food && formik.errors.exp_food ? (
              <span style={{ color: "red" }}>{formik.errors.exp_food}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label for="phone" className="form-label">
              Movie(Rs.)<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              name="exp_movie"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.exp_movie}
              type="number"
              className={`form-control ${
                formik.touched.exp_movie && formik.errors.exp_movie
                  ? "error-box"
                  : ""
              } ${
                formik.touched.exp_movie && !formik.errors.exp_movie
                  ? "success-box"
                  : ""
              } `}
              id="phone"
            />
            {formik.touched.exp_movie && formik.errors.exp_movie ? (
              <span style={{ color: "red" }}>{formik.errors.exp_movie}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label for="phone" className="form-label">
              Clothing(Rs.)<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              name="exp_clothing"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.exp_clothing}
              type="number"
              className={`form-control ${
                formik.touched.exp_clothing && formik.errors.exp_clothing
                  ? "error-box"
                  : ""
              } ${
                formik.touched.exp_clothing && !formik.errors.exp_clothing
                  ? "success-box"
                  : ""
              } `}
              id="phone"
            />
            {formik.touched.exp_clothing && formik.errors.exp_clothing ? (
              <span style={{ color: "red" }}>{formik.errors.exp_clothing}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label for="phone" className="form-label">
              Medical(Rs.)<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              name="exp_medical"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.exp_medical}
              type="number"
              className={`form-control ${
                formik.touched.exp_medical && formik.errors.exp_medical
                  ? "error-box"
                  : ""
              } ${
                formik.touched.exp_medical && !formik.errors.exp_medical
                  ? "success-box"
                  : ""
              } `}
              id="phone"
            />
            {formik.touched.exp_medical && formik.errors.exp_medical ? (
              <span style={{ color: "red" }}>{formik.errors.exp_medical}</span>
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 m-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link
              to={"/portal/personal"}
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

export default Add_personal;
