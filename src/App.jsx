import React, { useState } from "react";
const App = () => {
  const [weight,setWeight]=useState(0);
  const [height,setHeight]=useState(0);
  const [bmi,setBmi]=useState(0);
  const [msg,setMsg]=useState("");
  const calculateBmi=() =>
     {
    const bmiValue = (weight/(height * height));
    setBmi(bmiValue.toFixed(2));
    if (bmiValue<18.5) 
      setMsg("Underweight");
    else if(bmiValue>=18.5 && bmiValue<24.9) 
      setMsg("Normal weight");
 else if(bmiValue>=25 &&bmiValue<29.9) 
      setMsg("Overweight");
     else 
      setMsg("Obesity");
    setWeight(0);
    setHeight(0);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-4"
   style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1950&q=80')",
      }}>
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-6">
          BMI Calculator
        </h1>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="weight"
              className="text-gray-700 font-semibold mb-1"
            >
              Weight (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter weight"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="height"
              className="text-gray-700 font-semibold mb-1"
            >
              Height (m)
            </label>
            <input type="number" value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter height"
            />
          </div>

          <button
            onClick={calculateBmi}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Calculate
          </button>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            BMI Value:{" "}
            <span className="text-blue-700">{bmi ? bmi : "Value Pending"}</span>
          </h2>
          <h2 className="text-xl font-semibold text-gray-700 mt-2">
            {bmi ? (
              <span
                className={
                  msg === "Normal weight"
                    ? "text-green-600":msg ==="Underweight"?"text-yellow-500":msg==="Overweight"?"text-orange-500":"text-red-600"
                }
              >
                {msg}
              </span>
            ) : (
              "Calculation Pending"
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default App;
