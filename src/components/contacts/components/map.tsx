import { useEffect, useRef, useState } from 'react';
import { Map, TileLayer, Marker, Icon } from 'leaflet';
import icon from '../../../assets/img/icon-location.svg';
import 'leaflet/dist/leaflet.css';

const LAT = 59.968137;
const LNG = 30.316272;
const ZOOM = 16;

const customIcon = new Icon({
  iconUrl: icon,
  iconSize: [46, 58],
  iconAnchor: [23, 58],
});

function LeafletMap(): JSX.Element {
  const mapRef = useRef(null);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: LAT,
          lng: LNG,
        },
        zoom: ZOOM,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map]);

  if (map !== null) {
 new Marker({
    lat: LAT,
    lng: LNG,
  })
    .setIcon(customIcon)
    .addTo(map);
  };

  return <div style={{ height: '336px', width: '649px' }} ref={mapRef}></div>;
}

export default LeafletMap;
