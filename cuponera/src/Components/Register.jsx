import { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebaseConfig";
import { useNavigate } from "react-router-dom"; // Para redirigir

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Para redirigir

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("Usuario registrado exitosamente ✅");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/dashboard"); // Redirigir después del registro exitoso
    } catch (err) {
      setError("Error: " + err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F1E4D1]">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-[#162660]">Registro de Usuario</h2>

        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center mt-2">{success}</p>}

        <form onSubmit={handleRegister} className="mt-4">
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

          <div className="mt-4">
            <label className="block text-sm font-medium text-[#162660]">Confirmar Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162660]"
              placeholder="Confirma tu contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="w-full px-4 py-2 mt-4 text-[#D0E6FD] bg-[#162660] rounded-lg hover:bg-[#101A45]">
            Registrarse
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-[#162660]">
          ¿Ya tienes cuenta? <a href="#" className="text-[#162660] hover:underline">Inicia sesión</a>
        </p>
      </div>
    </div>
  );
}
