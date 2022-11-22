import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "./config";

function Personal_year() {
  const [personalyr, setPersonalyr] = useState([]);

  useEffect(() => {
    yearData();
  }, []);

  let yearData = async () => {
    try {
      let yearFin = await axios.get(`${config.api}/get-data`);
      let result = yearFin.data;
      let res1 = result.reduce(function (prev, curr) {
        return {
          income: prev.income + curr.income,
          expense: prev.expense + curr.expense,
        };
      });
      setPersonalyr(res1);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
  console.log(personalyr);

  return (
    <div class="container-fluid">
      <h1 class="h3 mb-2 text-gray-800">Personal</h1>
      <p class="mb-4">Income and Expenses - Data</p>
      <Link
        to={"/portal/personal"}
        type="button"
        class="btn btn-secondary btn-lg mb-2"
      >
        Check Monthly
      </Link>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">
            Personal Financial Report-Yearly(in RS.)
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
                  <td>{personalyr.income}</td>
                  <td>{personalyr.expense}</td>
                  <td>{personalyr.income - personalyr.expense}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal_year;
