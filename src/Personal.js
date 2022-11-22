import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "./config";

function Personal() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    personalData();
  }, []);

  let personalData = async () => {
    try {
      let personalFin = await axios.get(`${config.api}/get-data`);
      console.log(personalFin.data);
      setUser(personalFin.data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <div class="container-fluid">
      <h1 class="h3 mb-2 text-gray-800">Personal</h1>
      <p class="mb-4">Income and Expenses - Data</p>
      <Link
        to={"/portal/yearly"}
        type="button"
        class="btn btn-secondary btn-lg mb-2"
      >
        Check Yearly
      </Link>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">
            Personal Financial Report-Monthly(in RS.)
          </h6>
          <Link to={"/portal/personal/add"} type="button" class="btn btn-primary btn-sm mt-1">
            ADD
          </Link>
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
                  <th>_id</th>
                  <th>Month</th>
                  <th>Income</th>
                  <th>EXP_Food</th>
                  <th>EXP_Movie</th>
                  <th>EXP_clothings</th>
                  <th>EXP_medical</th>
                  <th>Total Expenses</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {user.map((item) => {
                  return (
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.month}</td>
                      <td>{item.income}</td>
                      <td>{item.exp_food}</td>
                      <td>{item.exp_movie}</td>
                      <td>{item.exp_clothing}</td>
                      <td>{item.exp_medical}</td>
                      <td>{item.expense}</td>
                      <td>{item.income - item.expense}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
