import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

export function HeaderInforme() {
    return (
        <header className="headerInforme">
      <Link to="/" className="header_Informe">
        <div className="header_close">
          <div className="icon_close">
            <Link to="/otraPagina" className="close">
              <HighlightOffOutlinedIcon className="icon" />
            </Link>
          </div>
        </div>
      </Link>
            <div className="informeOjeador">
                <h1>INFORME DEL OJEADOR</h1>
            </div>
            <div className="horizontal-line">
             {/* Barra de separación */}
             <hr/>
             </div>

            <div className="header_nav">
                <Link to="/otraPagina" className="nav_menu-item">
                    <span className="nav_skillsP"> Skills Principales</span>
                </Link>

                <Link to="/otraPagina" className="nav_menu-item">
                    <span className="nav_SkillsT">Skills Tácticas</span>
                </Link>   
               
                <Link to="/otraPagina" className="nav_menu-item">
                    <span className="nav_skillsF"> Skills Físicas</span>
                </Link>

                <Link to="/otraPagina" className="nav_menu-item">
                    <span className="nav_NotasF">Notas Finales</span>
                </Link>   
            </div>

       </header>
    );
}
