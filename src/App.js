import React, {useState} from 'react';
import './App.css';

function App() {

  const [n, setn] = useState(0);

  const Inc = () => {
    setn(n + 1);
  }
  const Dec = () => {
    (n < 1) ? setn(n) (alert('0 is Low of Number')) : setn(n - 1);
    // if(n < 1){
    //   return(
    //     setn(n),
    //     alert('low')
    //   )      
    // } else {
    //   setn(n - 1)
    // }
  }
  
  return (
    <>
      <span className="material-symbols-outlined">local_activity</span>
      <h1>{n}</h1>
      <div className='btn_div'>        
        <button onClick={Inc}>Increase</button>
        <button onClick={Dec}>Deincrease</button>
      </div>
    </>
  );
}

export default App;