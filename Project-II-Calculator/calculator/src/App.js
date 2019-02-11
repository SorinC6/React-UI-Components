import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='calculator'>
       <Display/>
       <div className='button-group'>
            <div className='left-btn-group'> 
                  <NumberButton buttonStyle='clear-style' number='clear'/> 
                 <NumberButton buttonStyle='number-style' number='7'/>
                 <NumberButton buttonStyle='number-style' number='8'/>
                 <NumberButton buttonStyle='number-style' number='9'/>
                 <NumberButton buttonStyle='number-style' number='4'/>
                 <NumberButton buttonStyle='number-style' number='5'/>
                 <NumberButton buttonStyle='number-style' number='6'/>
                 <NumberButton buttonStyle='number-style' number='1'/>
                 <NumberButton buttonStyle='number-style' number='2'/>
                 <NumberButton buttonStyle='number-style' number='3'/>
                 <NumberButton buttonStyle='clear-style' number='0'/> 
            </div>

            <div className='right-btn-group'>
               <NumberButton buttonStyle='function-button' number='-'/>
               <NumberButton buttonStyle='function-button' number='x'/>
               <NumberButton buttonStyle='function-button' number='-'/>
               <NumberButton buttonStyle='function-button' number='+'/>
               <NumberButton buttonStyle='function-button' number='='/>
               
            </div>
       </div>
    </div>
  );
};

export default App;


     
