import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/Register';
import "./index.css";


function App() {
  return (
    <Router>
      <div>
        <header className="bg-[#FAB26A] text-[#D54560] py-4 font-bold">
          <div className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-3xl font-bold">CuponeraSV</h1>
            <nav>
              <ul className="flex space-x-6">
                <li className="hover:bg-[#D54560] hover:text-[#FDD9B5] px-3 py-2 rounded">Marcas</li>
                <li className="hover:bg-[#D54560] hover:text-[#FDD9B5] px-3 py-2 rounded">Ofertas</li>
                <li className="hover:bg-[#D54560] hover:text-[#FDD9B5] px-3 py-2 rounded">Familia</li>
                <li className="hover:bg-[#D54560] hover:text-[#FDD9B5] px-3 py-2 rounded">Hogar</li>
                <li className="hover:bg-[#D54560] hover:text-[#FDD9B5] px-3 py-2 rounded">Bienestar</li>
                <li className="hover:bg-[#D54560] hover:text-[#FDD9B5] px-3 py-2 rounded">Belleza</li>
                <li className="hover:bg-[#D54560] hover:text-[#FDD9B5] px-3 py-2 rounded">Productos</li>
                <li className="hover:bg-[#D54560] hover:text-[#FDD9B5] px-3 py-2 rounded">Empresas Embajadoras</li>
              </ul>
            </nav>
            <div>
              <Link to="/register" className="hover:bg-[#D54560] hover:text-[#FDD9B5] px-3 py-2 rounded">Registrarse</Link>
              <Link to="/login" className="hover:bg-[#D54560] hover:text-[#FDD9B5] px-3 py-2 rounded">Iniciar sesión</Link>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-6 py-12">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;