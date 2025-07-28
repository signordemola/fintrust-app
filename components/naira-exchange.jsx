"use client";
import React, { useState, useEffect } from "react";

const NairaExchange = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchRate = async () => {
    try {
      const res = await fetch("https://open.er-api.com/v6/latest/USD");
      if (!res.ok) throw new Error("Failed to fetch rate");
      const { rates, result } = await res.json();
      if (result === "success" && rates?.NGN) setRate(rates.NGN);
      else throw new Error("Invalid response");
    } catch (err) {
      setError(err.message);
      setRate(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRate();
    const intervalId = setInterval(fetchRate, 300000);
    return () => clearInterval(intervalId);
  }, []);

  const usdAmount =
    rate && amount && !isNaN(amount)
      ? (parseFloat(amount) / rate).toFixed(2)
      : "";

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full">
      <h1 className="text-3xl font-bold text-center">
        Naira to USD Converter
      </h1>

      <div className="text-center text-sm mt-2 mb-4">
        {loading && <p className="text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {rate && !loading && !error && (
          <p>Rate: 1 USD ≈ {rate.toFixed(2)} NGN</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Naira (₦)</label>
        <input
          type="number"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          placeholder="Enter Naira amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          disabled={loading || error}
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">
          US Dollar ($)
        </label>
        <input
          className="w-full p-3 border rounded-lg bg-gray-50 text-lg cursor-not-allowed"
          placeholder="USD amount"
          value={usdAmount}
          readOnly
        />
      </div>
    </div>
  );
};

export default NairaExchange;
