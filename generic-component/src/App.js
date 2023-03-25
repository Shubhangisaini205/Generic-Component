import logo from './logo.svg';
import './App.css';
import PinTab from './components/PinTab';
import { useState } from 'react';

function App() {
  const [ otp, setOtp]= useState("")
  return (
    <div className="App">
      <PinTab length ={4} maxChar={1} setOtp={setOtp}/>
    OTP is {otp}
    </div>
  );
}

export default App;
