import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Bmicalculator from './Bmicalculator';
import Hello from "./Hello";
import StopWatch from './StopWatch';
function App() {

  return (
    <>
    <Bmicalculator/>
    <Hello/>
    <StopWatch/>
    </>
  )
}

export default App
