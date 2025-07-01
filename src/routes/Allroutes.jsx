import React from "react";
import { Routes, Route } from "react-router-dom";
import Day1 from "../components/Day1";
import Day2 from "../components/Day2";
import Homepage from "../components/Homepage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={< Homepage />} />
      <Route path="/day1" element={< Day1 />} />
      <Route path="/day2" element={< Day2 />} />
    </Routes>
  );
};

export default AllRoutes;
