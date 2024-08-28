import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}



























/***** Coding Exercise 17 *****/
/* 
import React from 'react';

function App() {
    const[color, setColor] = React.useState('white')
    
    
    function handleChange(userResponse) {
        if (userResponse === 'yes') {
            setColor('green')
        }
        if (userResponse === 'no') {
            setColor('red')
        }
    }
    
    return (
    <div id="app">
      <h1 style={{ color: color}}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => handleChange('yes')}>Yes</button>
        </li>
        <li>
          <button onClick={() => handleChange('no')}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App; 
*/

