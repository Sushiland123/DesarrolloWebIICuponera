import React from "react";

const Header = () => {
  return (
    <header className="bg-[#FAB26A] text-[#D54560] py-4 font-bold">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-bold">CuponeraSV</h1>
        <nav>
          <ul className="flex space-x-6">
            {["Marcas", "Ofertas", "Familia", "Hogar", "Bienestar", "Belleza", "Productos", "Empresas Embajadoras"].map((item) => (
              <li key={item} className="hover:bg-[#D54560] hover:text-[#FDD9B5] px-3 py-2 rounded cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <a href="#" className="hover:bg-[#D54560] hover:text-[#FDD9B5] px-3 py-2 rounded">Registrarse</a>
          <a href="#" className="hover:bg-[#D54560] hover:text-[#FDD9B5] px-3 py-2 rounded">Iniciar sesión</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
