import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/Header"
import Footer from "./components/Footer"
import AppRouter from "./components/AppRouter";


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;