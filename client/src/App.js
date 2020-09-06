import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import Navbar from './components/Navbar';
import DisplayModal from './components/Modal'
import Home from './components/Home'
const store = configureStore();

if(process.env.NODE_ENV !== 'production') {
  window.store = store;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const res = await fetch("/api/session");
      if (res.ok) {
        res.data = await res.json();
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  if (loading) return null;

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <DisplayModal />
        <Home />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
