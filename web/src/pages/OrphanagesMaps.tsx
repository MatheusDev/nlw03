import React from 'react';

import { Link } from 'react-router-dom'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { FiPlus } from 'react-icons/fi'
import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanages.map.css'

const OrphanagesMap: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
        
          <h2>Escolha um orfanato no mapa</h2>
          <p>
            Muitas crianças estão
            esperando a sua visita :)
          </p>
        </header>

        <footer>
          <strong>
            Aurelino Leal
          </strong>
          <span>Bahia</span>
        </footer>
      </aside>

      <Map 
        style={{ width: '100%', height: '100%' }}
        center={[-14.3089429,-39.3270589]} 
        //numeros pegos na url do google.com.br/maps/
        zoom={15}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>

    </div>
  );
}

export default OrphanagesMap;