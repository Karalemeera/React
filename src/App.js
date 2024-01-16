import './App.scss';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/layout';
import Product from './components/product';
import Services from './components/services';
import Solutions from './components/Solutions';


function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Services /></Layout>} />
        <Route path="/products" element={<Layout><Product /></Layout>} />
        <Route path="/solutions" element={<Layout><Solutions /></Layout>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
