import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { cn } from "@/lib/utils";

// Fix for default marker icons in Leaflet with React
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapViewProps {
  className?: string;
  initialCenter?: { lat: number; lng: number };
  initialZoom?: number;
  markers?: Array<{
    position: { lat: number; lng: number };
    title: string;
    description?: string;
  }>;
}

// Component to handle map updates when props change
function MapUpdater({ center, zoom }: { center: { lat: number; lng: number }; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([center.lat, center.lng], zoom);
  }, [center, zoom, map]);
  return null;
}

export function MapView({
  className,
  initialCenter = { lat: 41.3851, lng: 2.1734 }, // Default to Barcelona/Catalonia region
  initialZoom = 3,
  markers = [],
}: MapViewProps) {
  return (
    <div className={cn("w-full h-[500px] relative z-0", className)}>
      <MapContainer
        center={[initialCenter.lat, initialCenter.lng]}
        zoom={initialZoom}
        scrollWheelZoom={false}
        className="w-full h-full rounded-lg"
        style={{ zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapUpdater center={initialCenter} zoom={initialZoom} />

        {markers.map((marker, index) => (
          <Marker 
            key={index} 
            position={[marker.position.lat, marker.position.lng]}
          >
            <Popup>
              <div className="font-sans">
                <h3 className="font-bold text-sm mb-1">{marker.title}</h3>
                {marker.description && <p className="text-xs m-0">{marker.description}</p>}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
