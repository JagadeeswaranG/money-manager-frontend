import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { config } from './config';

function Business() {
  const[office,setOffice]= useState([]);

  useEffect(()=>{
    businessData();
  },[])

  let businessData =async ()=>{
    try {
      let businessFin = await axios.get(`${config.api}/get-business`)
      setOffice(businessFin.data)
    } catch (error) {
      console.log(error);
      alert("Something went wrong")
    }

  }
  return (
    <div class="container-fluid">
      <h1 class="h3 mb-2 text-gray-800">Business</h1>
      <p class="mb-4">Income and Expenses - Data</p>
      <Link
        to={"/portal/year"}
        type="button"
        class="btn btn-secondary btn-lg mb-2"
      >
        Check Yearly
      </Link>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">
            Business Financial Report-Monthly(in RS.)
          </h6>
          <Link to={"/portal/business/add"} type="button" class="btn btn-primary btn-sm mt-1">
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
                  <th>EXP_Rent</th>
                  <th>EXP_Loan</th>
                  <th>EXP_Fuel</th>
                  <th>EXP_Transport</th>
                  <th>Total Expenses</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {office.map((item) => {
                  return (
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.month}</td>
                      <td>{item.income}</td>
                      <td>{item.exp_rent}</td>
                      <td>{item.exp_loan}</td>
                      <td>{item.exp_fuel}</td>
                      <td>{item.exp_transport}</td>
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
  )
}

export default Business