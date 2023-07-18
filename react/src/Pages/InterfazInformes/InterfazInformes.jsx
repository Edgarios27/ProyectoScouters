import React from 'react';
import { HeaderInforme } from '../../Components/Header/HeaderInforme';
import './InterfazInformes.css'


export const InterfazInformes = () => {
  
  return (
    <>
    <HeaderInforme />
    <div className='informe-container'>      
      
      
        
        <div className='horizontal-line'></div> {/* División horizontal */}
        <Informe />
      </div>
   
   
   </>
  );
}
