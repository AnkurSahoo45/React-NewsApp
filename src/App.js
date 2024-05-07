import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import News from './components/News';
const App = () => {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="business" element={<News apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="entertainment" element={<News apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="health" element={<News apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="sports" element={<News apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="science" element={<News apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path="technology" element={<News apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;