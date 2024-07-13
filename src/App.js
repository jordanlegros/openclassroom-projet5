import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/Header"
import Footer from "./components/Footer"
import AppRouter from "./components/AppRouter";


import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import { far } from '@fortawesome/free-regular-svg-icons'; 
import { fab } from '@fortawesome/free-brands-svg-icons'; 

library.add(fas, far, fab);

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