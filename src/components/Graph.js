import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Labels from "./Labels";
import { chart_Data, getTotal, getLeft } from "../helper/helper";
import { useParams } from "react-router-dom";
import { default as api } from "../store/apiSlice";
import { useLocation } from 'react-router-dom';


// Register required elements for Chart.js
Chart.register(ArcElement);

export default function Graph() {
  const { month } = useParams();

  const location = useLocation();
const { state: amount } = location;  // Access the amount
console.log(amount); // Use the amount as needed

  const { data, isFetching, isSuccess, isError } = api.useGetExpensesQuery(month);
  let graphData;
  let incomeAmount = 0;
  let incomeTitle = "";
  let totalExpenses = 0;

 
  const Loader = () => (
    <div className="flex justify-center items-center min-h-screen bg-customBlack">
      <div className="loader"></div>
    </div>
  );

  if (isFetching) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error loading data.</div>;
  }
  if (data != null && isSuccess) {
    // Check if data[0] and data[0].salary exist
    if (location.state && Object.keys(location.state).length > 0) {
        incomeAmount = location.state.amount;
        incomeTitle = location.state.description;
      }
       else {
      incomeAmount = 0;
      incomeTitle = "No information available";
    }
  
    totalExpenses = getTotal(data);
    graphData = <Doughnut {...chart_Data(data)} />;
  }
  

  return (
    <div className="flex justify-center max-w-xs mx-auto">
      <div className="item">
        {/* Total Income */}
        <div className="bg-customGray p-6 shadow-lg rounded-lg text-center mb-6 border border-darkerGray">
          <h3 className="mb-2 text-xl font-semibold text-primaryText">
            {incomeTitle} {/* Displays the title of income */}
          </h3>
          <span className="block text-4xl font-bold text-green-500 mb-4">
            {incomeAmount}  {/* Displays the income amount */}
          </span>

          {/* Leftover Calculation */}
          <div className="bg-darkerGray p-3 rounded-lg shadow-sm">
            <p className="text-lg text-gray-600 font-medium">
            Remaining:
            </p>
            <span className="block text-2xl font-semibold text-blue-600">
              {getLeft(incomeAmount, totalExpenses)}  {/* Leftover income */}
            </span>
          </div>
        </div>

        {/* Doughnut Chart and Total Expenses */}
        <div className="chart relative">
          {graphData}

          {/* Display Total Expenses inside the chart */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h3 className="mb-4 font-bold text-lg text-primaryText">
              Total Expenses
            </h3>
            <span className="text-4xl text-red-400">
              {totalExpenses}  {/* Displays total expenses */}
            </span>
          </div>
        </div>

        {/* Labels */}
        <div className="flex flex-col py-10 gap-4">
          <Labels />
        </div>
      </div>
    </div>
  );
}
