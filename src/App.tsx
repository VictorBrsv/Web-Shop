import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<ProductPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
