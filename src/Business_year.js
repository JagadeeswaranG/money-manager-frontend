import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "./config";

function Business_year() {
  const[businessyr,setBusinessyr] = useState([]);

  useEffect(()=>{
    yearlyData();
  },[])

  let yearlyData =async ()=>{
    try {
      let yearFin = await axios.get(`${config.api}/get-business`);
      let result = yearFin.data;
      let res1 = result.reduce(function (prev, curr) {
        return {
          income: prev.income + curr.income,
          expense: prev.expense + curr.expense,
        };
      });
      setBusinessyr(res1);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  }
  return (
    <div class="container-fluid">
      <h1 class="h3 mb-2 text-gray-800">Business</h1>
      <p class="mb-4">Income and Expenses - Data</p>
      <Link
        to={"/portal/business"}
        type="button"
        class="btn btn-secondary btn-lg mb-2"
      >
        Check Monthly
      </Link>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">
            Business Financial Report-Yearly(in RS.)
          </h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Total Income</th>
                  <th>Total Expenses</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{businessyr.income}</td>
                  <td>{businessyr.expense}</td>
                  <td>{businessyr.income - businessyr.expense}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business_year;
