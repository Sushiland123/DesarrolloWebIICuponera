import { useState, useEffect } from "react";
import { auth, googleProvider, signInWithEmailAndPassword, signInWithPopup } from "../firebaseConfig";
import { useNavigate } from "react-router-dom"; // Para redirigir

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Para la redirección

  useEffect(() => {
    // Verificar si el usuario ya está autenticado
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/dashboard"); // Redirigir al dashboard si el usuario ya está autenticado
      }
    });

    return () => unsubscribe(); // Limpiar el observador al desmontar el componente
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reiniciar errores
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Inicio de sesión exitoso 🎉");
      navigate("/dashboard"); // Redirigir después del login exitoso
    } catch (err) {
      setError("Error: " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Inicio de sesión con Google exitoso ✅");
      navigate("/dashboard"); // Redirigir después del login exitoso con Google
    } catch (err) {
      setError("Error con Google: " + err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F1E4D1]">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-[#162660]">Iniciar sesión</h2>

        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

        <form onSubmit={handleLogin} className="mt-4">
          <div>
            <label className="block text-sm font-medium text-[#162660]">Correo Electrónico</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162660]"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-[#162660]">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162660]"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-[#162660] border-gray-300 rounded" />
              <span className="ml-2 text-sm text-[#162660]">Recuérdame</span>
            </label>
            <a href="#" className="text-sm text-[#162660] hover:underline">¿Olvidaste tu contraseña?</a>
          </div>

          <button type="submit" className="w-full px-4 py-2 mt-4 text-[#D0E6FD] bg-[#162660] rounded-lg hover:bg-[#101A45]">
            Ingresar
          </button>

          <button type="button" onClick={handleGoogleLogin} className="w-full px-4 py-2 mt-2 text-white bg-red-500 rounded-lg hover:bg-red-600">
            Iniciar sesión con Google
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-[#162660]">
          ¿No tienes cuenta? <a href="#" className="text-[#162660] hover:underline">Regístrate</a>
        </p>
      </div>
    </div>
  );
}
