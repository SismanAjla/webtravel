import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/Korisnik.css";

const Korisnici = () => {
    const [korisnici, setKorisnici] = useState([]);
    const uloga = localStorage.getItem("uloga");
    const navigate = useNavigate();
    
    useEffect(() => {
        fetchKorisnici();
    }, []);

    const fetchKorisnici = async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/korisnici/korisnici", {
                headers: {
                     Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setKorisnici(response.data);
        } catch (error) {
            console.error("Error occurred while fetching korisnici:", error);
        }
    };
        
    const handleToggleStatus = async (id, aktivan) => {
        try {
            await axios.put(`http://localhost:3001/api/korisnici/deaktiviraj/${id}`, { aktivan: !aktivan }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            fetchKorisnici();
        } catch (error) {
            console.error("Error occurred while toggling user status:", error);
        }
    };
    
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('uloga');
        navigate('/login');
    };

    return (
        <div>
            <nav className="navbar">
                <h1>Travel App</h1>
                <div className="nav-links">
                    <a href="/">Home</a>
                    {uloga === 'admin' && <a href="/korisnici">Upravljanje Korisnicima</a>}
                    {uloga === 'admin' && <a href="/putovanja">Upravljanje Putovanjima</a>}
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            <div className="container">
                <h1 className="title">Korisnici</h1>
                <ul className="user-list">
                    {korisnici.map((korisnik) => (
                        <li key={korisnik._id} className="user-item">
                            {korisnik.korisnickoIme}{" "}
                            {uloga === "admin" && (
                                <button className="button" onClick={() => handleToggleStatus(korisnik._id, korisnik.aktivan)}>
                                    {korisnik.aktivan ? 'Deaktiviraj' : 'Aktiviraj'}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
                <button className="button" onClick={() => navigate("/home")}>Back</button>
            </div>
        </div>
    );
};

export default Korisnici;
