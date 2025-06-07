 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/Home.css"; 


import FloatingIcons from "../components/FloatingIcons"; 
function Home() {
  const navigate = useNavigate();
  const [showAgencies, setShowAgencies] = useState(false);

  const agencies = [
    "Agence Tunis Centre", "Agence Tunis Sud", "Agence Bizerte THAALBI",
    "Agence MENZEL BOURGUIBA", "Agence Bizerte IBN KHALDOUN", "Agence AOUSJA",
    "Agence RAFRAF", "Agence MATEUR", "Agence SFAX THYNA",
    "Agence SFAX MAHRES", "Agence CHEDLY KALLALA", "Agence SFAX CHIHIA",
    "Agence SBEITLA", "Agence METLAOUI", "Agence Bizerte ERRAWABI",
    "Agence MENZEL ABDERRAHMEN", "Agence RAS JEBEL", "Agence MENZAH 8",
    "Agence MANZAH 5", "Agence ENNASR 2"
  ];

  return (
    
    
    <div className="app-layout">
      {/* Sidebar fixe */}
      <Sidebar />

      {/* Contenu principal */}
      <main className="main-content">
        {/* Bannière avec image de fond */}
        <div className="header-banner">
         
        <h1 className="header-title">Bienvenue à la BH Bank</h1>
          
        </div>
     
        <div className="content-container">
          <div className="welcome-card">
            <p>
              Bienvenue à la <strong>BH Bank</strong> – Votre Partenaire de Confiance pour l'Avenir.
              Depuis sa création en 1976, la BH Bank s'est imposée comme un acteur clé du secteur bancaire tunisien,
              en mettant l'accent sur l'accessibilité, la sécurité et l'accompagnement personnalisé.
              Notre mission : vous accompagner dans la réalisation de vos projets immobiliers et financiers avec des solutions adaptées à vos besoins.
            </p>
          </div>
        </div>
        <FloatingIcons />
      </main>
    </div>
  );
}

export default Home;  