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



/***** Coding Exercise 18 *****/
/*
import React from 'react';

function App() {
    const[customClass, setCustomClass] = React.useState()
    
    
    function handleChange(userResponse) {
        if (userResponse === 'yes') {
            setCustomClass('highlight-green');
        }
        if (userResponse === 'no') {
            setCustomClass('highlight-red');
        }
    }
    
    return (
    <div id="app">
      <h1 className={customClass}>CSS is great!</h1>
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



/***** Coding Exercise 19 *****/
/*
import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [customColor, setCustomColor] = React.useState('white')
    
    function handleChange () {
        setCustomColor((prevColor) => {
            if(prevColor === 'white'){
                return 'red'
            } else {
                return 'white'
            }
        })
    }
    return (
        <div>
            <p style={{color: customColor}}>Style me!</p>
            <button onClick={handleChange}>Toggle style</button>
        </div>
    );
}
*/
