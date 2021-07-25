import React from "react";
import './App.css';
import { Header } from './Header';
import { Footer } from './Footer'
import { ReqContainer } from './ReqContainer';

function App() {
  let course = "CS 4510";

  return (
    <>
      <div className="App">
        <Header />
        <ReqContainer course={course}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
