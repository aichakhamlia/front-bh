// Sidebar.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/acceuil bh.jpg";
import "./sideBar.css";
import {logout} from "../services/authService";
import {
  FaBuilding,
  FaUserTie,
  FaMoneyBillWave,
  FaListUl,
  FaChartLine,
  FaEnvelope,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
  FaCity, FaRocketchat, FaHistory
} from "react-icons/fa";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

import { IoMapSharp } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

import { BiCategory } from "react-icons/bi";
import { BsCreditCard2FrontFill, BsBank } from "react-icons/bs";
import { getCurrentUser } from "../services/authService";

function Sidebar() {
  const navigate = useNavigate();
  const [showAgencies, setShowAgencies] = useState(false);
  const user = getCurrentUser();
  const isAdmin = user?.role === 'admin';
  const isChefAgence = user?.role === 'chef_agence';

  const agencies = [
    "Agence Tunis Centre", "Agence Tunis Sud", "Agence Bizerte THAALBI",
    "Agence MENZEL BOURGUIBA", "Agence Bizerte IBN KHALDOUN", "Agence AOUSJA",
    "Agence RAFRAF", "Agence MATEUR", "Agence SFAX THYNA",
    "Agence SFAX MAHRES", "Agence CHEDLY KALLALA", "Agence SFAX CHIHIA",
    "Agence SBEITLA", "Agence METLAOUI", "Agence Bizerte ERRAWABI",
    "Agence MENZEL ABDERRAHMEN", "Agence RAS JEBEL", "Agence MENZAH 8",
    "Agence MANZAH 5", "Agence ENNASR 2"
  ];

  const onLogout = () => {
   logout();
  };

  const startPrivateChat = (userId) => {
    navigate(`/chat-prive/${userId}`);
  };

  return (
    <div className="app-sidebar">
      <div className="sidebar-header" onClick={() => navigate('/')}>
        <img src={logo} alt="Banque BH Logo" className="sidebar-logo" />
        <h4>BH Bank</h4>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-user-section">
          <div className="user-avatar">
            <FaUserTie size={24} />
          </div>
          <div className="user-details">
            <strong>{user?.fullname}</strong>
            <span>{user?.role}</span>
          </div>
        </div>

        {isAdmin && (
          <>
            {/*<div*/}
            {/*  className={`nav-item ${showAgencies ? 'active' : ''}`}*/}
            {/*  onClick={() => setShowAgencies(!showAgencies)}*/}
            {/*>*/}
            {/*  <FaBuilding className="nav-icon" />*/}
            {/*  <span>Nombre d'Agences</span>*/}
            {/*  <span className="nav-arrow">{showAgencies ? <FaChevronUp /> : <FaChevronDown />}</span>*/}
            {/*</div>*/}

            {/*{showAgencies && (*/}
            {/*  <div className="agencies-dropdown">*/}
            {/*    {agencies.slice(0, 8).map((agency, index) => (*/}
            {/*      <div key={index} className="agency-item">{agency}</div>*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*)}*/}
              <div className="nav-item" onClick={() => navigate('/users')}>
              <FaListUl className="nav-icon" />
              <span>Utilisateurs</span>

            </div>
           

            <div className="nav-item" onClick={() => navigate('/gouvernorats')}>
              <IoMapSharp className="nav-icon" />
              <span>Gouvernorats</span>
            </div>

            <div className="nav-item" onClick={() => navigate('/villes')}>
              <FaCity className="nav-icon" />
              <span>Villes</span>
            </div>


            <div className="nav-item" onClick={() => navigate('/agences')}>
              <BsBank className="nav-icon" />
              <span>Agences</span>
            </div>
             <div className="nav-item" onClick={() => navigate('/chefs-agence')}>
              <FaUserTie className="nav-icon" />
              <span>Chefs d'Agence</span>
            </div>
            
            <div className="nav-item" onClick={() => navigate('/categories')}>
              <BiCategory className="nav-icon" />
              <span> Catégories</span>
            </div>

            <div className="nav-item" onClick={() => navigate('/produits')}>
              <BsCreditCard2FrontFill className="nav-icon" />
              <span> Produit</span>
            </div>

            <div className="nav-item" onClick={() => navigate('/regionsMonde')}>
              <IoMapSharp className="nav-icon" />
              <span> Regions Monde</span>
            </div>

            <div className="nav-item" onClick={() => navigate('/devises')}>
              <RiMoneyDollarBoxLine className="nav-icon" />
              <span> Devises</span>
            </div>

            <div className="nav-item" onClick={() => navigate('/logs')}>
              <FaHistory className="nav-icon" />
              <span>Journaux d'activité</span>
            </div>

            {/* <div className="nav-item" onClick={() => startPrivateChat(user._id)}>
              <FaUserTie className="nav-icon" />
              <span>Démarrer une conversation</span>
            </div> */}

            <div className="nav-item" onClick={() => navigate('/dashboard')}>
              <FaChartLine className="nav-icon" />
              <span>Tableau de Bord</span>
            </div>
          </>
        )}

        {(isAdmin || isChefAgence) && (
          <>
            <div className="nav-item" onClick={() => navigate('/agences-chefs')}>
              <FaBuilding className="nav-icon" />
              <span>Agences & Chefs</span>
            </div>

            <div className="nav-item" onClick={() => navigate('/depot-list')}>
              <FaMoneyBillWave className="nav-icon" />
              <span>Liste des Dépôts</span>
            </div>

            <div className="nav-item" onClick={() => navigate('/depots')}>
              <FaMoneyBillWave className="nav-icon" />
              <span>Gestion Dépôts</span>
            </div>
            {/* <div className="nav-item" onClick={() => navigate('/chat-agence')}>
              <FaRocketchat className="nav-icon" />
              <span>Chat Agence</span>
            </div> */}

            <div className="nav-item" onClick={() => navigate('/messenger')}> 
              <FaRocketchat className="nav-icon" />
              <span>Messenger</span>
            </div>
          </>
        )}

        <div className="nav-item" onClick={() => navigate('/contact')}>
          <IoMdInformationCircleOutline className="nav-icon" />
          <span>Contact</span>
        </div>

        <div className="nav-item logout-item" onClick={() => {
          onLogout();
          navigate('/login');
        }}>
          <FaSignOutAlt className="nav-icon" />
          <span>Déconnexion</span>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
