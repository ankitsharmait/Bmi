import React, { useState } from "react";

const Bmi = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [msg, setMsg] = useState("");

  const [weightUnit, setWeightUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("m");
  const toggleWeightUnit = () => {
    setWeightUnit((prev) => (prev === "kg" ? "lb" : "kg"));
    setWeight(0); 
  };
  const toggleHeightUnit = () => {
    setHeightUnit((prev) => (prev ==="m"?"cm":"m"));
    setHeight(0); 
  };

  const calculateBmi = () => {
    let weightInKg = weightUnit==="kg"? parseFloat(weight):parseFloat(weight)*0.453592;
    let heightInM = heightUnit==="m"? parseFloat(height):parseFloat(height)/100;
    const bmiValue = weightInKg/heightInM ** 2;
    setBmi(bmiValue.toFixed(2));
    bmiValue < 18.5? setMsg("Underweight") : bmiValue >= 18.5 && bmiValue < 24.9? setMsg("Normal weight"): bmiValue >= 25 && bmiValue < 29.9 ? setMsg("Overweight"): bmiValue >= 30 ? setMsg("Obesity"):setMsg("Invalid Input");
    setWeight(0);
    setHeight(0);
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-indigo-800 mb-6 tracking-wide">
          Smart BMI Tracker
        </h1>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="weight" className="text-gray-800 font-semibold mb-1">
              Weight ({weightUnit})
            </label>
            <div className="flex">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="p-3 border border-indigo-300 rounded-l-xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={`Enter weight in ${weightUnit}`}
              />
              <button
                onClick={toggleWeightUnit}
                className="px-4 bg-indigo-500 text-white rounded-r-xl hover:bg-indigo-600 transition"
              >
                {weightUnit === "kg" ? "lb" : "kg"}
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="height" className="text-gray-800 font-semibold mb-1">
              Height ({heightUnit})
            </label>
            <div className="flex">
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="p-3 border border-indigo-300 rounded-l-xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={`Enter height in ${heightUnit}`}
              />
              <button
                onClick={toggleHeightUnit}
                className="px-4 bg-indigo-500 text-white rounded-r-xl hover:bg-indigo-600 transition"
              >
                {heightUnit === "m" ? "cm" : "m"}
              </button>
            </div>
          </div>
          <button
            onClick={calculateBmi}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl font-semibold transition duration-300"
          >
            Calculate BMI
          </button>
        </div>

        {/* BMI Result */}
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            BMI Value:{" "}
            <span className="text-indigo-700 font-bold">
              {bmi ? bmi : "Not calculated yet"}
            </span>
          </h2>
          <h2 className="text-xl font-semibold text-gray-800 mt-2">
            {bmi ? (
              <span
                className={
                  msg === "Normal weight"? "text-green-600": msg === "Underweight"? "text-yellow-500": msg === "Overweight"? "text-orange-500": "text-red-600"
                }
              >
                {msg}
              </span>
            ) : (
              "Status: Not calculated yet"
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Bmi;
