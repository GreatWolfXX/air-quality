import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import './AirQuality.scss'
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JlYXR3b2xmMjB4eCIsImEiOiJja2ZsYWFsZzMwYmgxMnhtdHkyc29lZG94In0.QWfIqsXJDXou-1JLk9214w';

const AiryQuality = () => {
  const mapContainer = useRef( null);
  const [locationInfo] = useState({
    lng: 31,
    lat: 48.6,
    zoom: 5
  });

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [locationInfo.lng, locationInfo.lat],
      zoom: locationInfo.zoom
    });
  }, []);

  return (
    <div>
      <section className="air-q container" id="quality">
        <h2 className="air-q-title">Индекс качества воздуха в режиме реального времени</h2>
        <div className="air-q-map" ref={mapContainer}/>
        <p className="air-q-text">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>
      </section>
    </div>
  );
};

export default AiryQuality;