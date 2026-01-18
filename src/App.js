import React from 'react';
import './App.css';
import MathOperations from './MathOperations'; 
import SumDigits from './SumDigits';           
import EmployeeTaxFunc from './EmployeeTaxFunc';
import EmployeeTaxClass from './EmployeeTaxClass';

function App() {
  return (
    <div className="container">
      <h1>LAB MANUAL Solutions</h1>
      
      <div className="components-container">
        {/* Set 2 Components */}
        <EmployeeTaxFunc />
        <EmployeeTaxClass />
        
        <MathOperations />
        <SumDigits />
      </div>
    </div>
  );
}

export default App;