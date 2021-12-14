import React from "react";
import { CarInfo } from "../src/components/CarInfo";
import "../public/css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <React.StrictMode>
      <CarInfo />
    </React.StrictMode>
  );
}

export default HomePage;
