import React from 'react';
import { Link } from 'react-router-dom';
import '../style-pages/itinerario-actividades.css';

function ItinerarioActividades() {
    const { id } = useParams();
    const [actividades, setActividades] = useState([]);

    useEffect(() => {
        const fetchActividades = async () => {
            try {
                const response = await fetch(`/api/itinerarios/${id}/actividades`);
                if (!response.ok) {
                    throw new Error('La respuesta de la red no fue ok');
                }
                const data = await response.json();
                setActividades(data);
            } catch (error) {
                console.error('Error al obtener las actividades:', error);
            }
        };

        fetchActividades();
    }, [id]);

    return (
        <div className="itinerario-actividades-container">
            <h1>Actividades del Itinerario</h1>
            <ul>
                {actividades.map((actividad, index) => (
                    <li key={index}>{actividad.nombre}</li>
                ))}
            </ul>
            <div className="acciones">
                <Link to={`/itinerario/${id}/agregar-actividad`} className="btn">Agregar Actividad</Link>
                <Link to="/busqueda-vuelos" className="btn">Buscar Vuelos</Link>
                <Link to="/busqueda-alojamiento" className="btn">Buscar Alojamiento</Link>
            </div>
        </div>
    );
}

export default ItinerarioActividades;
