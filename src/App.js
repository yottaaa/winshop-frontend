import './App.css';
import React from 'react';
import Footer from './components/Footer';
import SearchView from './views/SearchView';

function App() {
  
  return (
    <div className="App">
       <SearchView/>
       <Footer />
    </div>
  );
}

export default App;
