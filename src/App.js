import './App.css';
import StoreLogin from "./components/StoreLogin";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import ShopifyInstall from "./components/ShopifyInstall";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/shopify-install" element={<ShopifyInstall />} />
                  <Route path="/" element={<StoreLogin />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
