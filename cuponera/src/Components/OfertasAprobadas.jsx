import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const OfertasAprobadas = () => {
const [ofertas, setOfertas] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchOfertas = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "ofertas"));
        const ofertasData = [];
        querySnapshot.forEach((doc) => {
        ofertasData.push({ id: doc.id, ...doc.data() });
        });

        // Agrupar por rubro
        const ofertasPorRubro = ofertasData.reduce((acc, oferta) => {
        if (!acc[oferta.rubro]) acc[oferta.rubro] = [];
        acc[oferta.rubro].push(oferta);
        return acc;
        }, {});

        setOfertas(ofertasPorRubro);
    } catch (error) {
        console.error("Error al obtener ofertas:", error);
    } finally {
        setLoading(false);
    }
    };

    fetchOfertas();
}, []);

if (loading) return <p className="text-center mt-10">Cargando ofertas...</p>;

return (
    <div className="max-w-4xl mx-auto mt-10">
    <h2 className="text-2xl font-bold text-center mb-6">
        Ofertas Aprobadas Vigentes
    </h2>
    {Object.keys(ofertas).map((rubro) => (
        <div key={rubro} className="mb-6">
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">{rubro}</h3>
        <ul className="space-y-4">
            {ofertas[rubro].map((oferta) => (
            <li
                key={oferta.id}
                className="border p-4 rounded-lg shadow-lg bg-white"
            >
                <h4 className="font-bold">{oferta.titulo}</h4>
                <p>Precio: <span className="font-semibold">${oferta.precioOferta}</span></p>
                <p>Válido hasta: {oferta.fechaFin}</p>
            </li>
            ))}
        </ul>
        </div>
    ))}
    </div>
);
};

export default OfertasAprobadas;
