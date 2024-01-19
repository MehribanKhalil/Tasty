
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";


const helmetContext = {};

function App() {

  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter >
        <Routes>
          <Route element={<MainLayout/>} >
          <Route path="/" element={<Home/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  )
}

export default App
