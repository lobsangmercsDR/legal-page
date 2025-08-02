import { useState } from 'react';
import aperto from '../assets/law-firm-06.jpg';
import aperto2 from '../assets/aperto2.jpg';
import terno from '../assets/terno.jpg';
import '../styles/Services.css';

const tabs = [
  {
    title: 'Consultoría Corporativa',
    services: [
      {
        title: 'Constitución de Compañía',
        image: aperto,
        description: 'Asesoría integral para la creación legal y estratégica de tu empresa, cumpliendo normativas locales e internacionales.',
      },
      {
        title: 'Contratos',
        image: terno,
        description: 'Redacción y revisión de contratos personalizados, protegiendo tus intereses en acuerdos laborales, comerciales o civiles.',
      },
      {
        title: 'Firma Electrónica',
        image: aperto2,
        description: 'Implementación y validación legal de firma electrónica para facilitar trámites digitales con seguridad jurídica.',
      },
    ],
  },
  {
    title: 'Derecho Administrativo',
    services: [
      {
        title: 'Derecho Administrativo',
        image: aperto,
        description: 'Representación y asesoría frente a organismos públicos, licitaciones, permisos y procesos administrativos.',
      },
      {
        title: 'Justiprecio',
        image: terno,
        description: 'Defensa técnica en procedimientos de expropiación, cálculo de indemnizaciones y valoraciones legales.',
      },
    ],
  },
  {
    title: 'Asistencia Legal General',
    services: [
      {
        title: 'Consultoría Especializada',
        image: aperto2,
        description: 'Orientación personalizada para personas o empresas ante conflictos legales de diversa índole.',
      },
      {
        title: 'Diligencias Procesales',
        image: terno,
        description: 'Gestión de trámites judiciales y administrativos ante juzgados, fiscalías y otras entidades.',
      },
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='services-content'>
      <p className='services-title animate__animated animate__fadeInLeft'>Nuestros Servicios Legales</p>
      <div className='service-tag' />

      {/* Tabs */}
      <div className="services-tabs">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`tab-button ${activeTab === idx ? 'active' : ''}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Services */}
      <div className='services-image'>
        {tabs[activeTab].services.map((item, i) => (
          <div key={i}>
            <img className='services-image' src={item.image} alt={item.title} />
            <p className='services-p animate__animated animate__fadeInUp'>{item.title}</p>
            <span className='services-span animate__animated animate__fadeInUp'>{item.description}</span>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className='services-button'>
        <a
          href="https://wa.me//553196438846?text=Tengo%20interés%20en%20contactar%20un%20abogado%20especialista!"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <span>FALE CONOSCO</span>
          </button>
        </a>
      </div>
    </div>
  );
}
