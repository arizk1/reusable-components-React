// import axios from axios;
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProgressBar from "./progressBar";

export default function App() {
    return (
        <div>
            <h1>Reusable Components</h1>

            <h3>1. Progress Bar</h3>

            <ProgressBar percentage={70} />
        </div>
    );
}
