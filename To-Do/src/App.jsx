import React, { useState } from 'react'
import ToDo from './ToDo.jsx'

function App() {
  const [name,change] = useState("Hello");

  function nameChange(){
    change("Don't Touch Me");
  }
  return (<>
            <ToDo></ToDo>
          </>) ;
}

export default App
