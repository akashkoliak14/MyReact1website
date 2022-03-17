import React from 'react';
import './App.css';
import header from './header';
import home from './home';



function App() {
  return (
<>
    <header> 
     
      {header()}
      {home()}
    </header>
</>
  );
};

export default App;
