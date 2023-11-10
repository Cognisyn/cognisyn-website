'use client'


import HomePage from './layouts/HomePage.js'
import { TerminalContextProvider } from "react-terminal";
export default function Home() {
  return (
    < TerminalContextProvider >
    <main>
      <HomePage/>
          </main>
          < /TerminalContextProvider >

      
  )
}
