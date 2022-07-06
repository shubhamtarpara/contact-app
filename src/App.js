import React from "react";
import Sidebar from "./components/Sidebar";
import ContactMain from "./components/ContactMain";
import "./App.css";


function App() {
  return (
    <div className="app_contact">
      <ContactMain />
     
      <Sidebar />
    </div>
  );
}

export default App;
