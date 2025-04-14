import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>
        <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Login/>}/>
          <Route path="/login" element={<Register/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
