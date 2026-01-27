"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false },
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false },
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// We need to fix the default icon issue in Leaflet for Next.js
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Mock Data
const ATM_LOCATIONS = [
  {
    id: 1,
    lat: 51.505,
    lng: -0.09,
    name: "Central Branch ATM",
    status: "Available",
  },
  { id: 2, lat: 51.51, lng: -0.1, name: "Oxford St ATM", status: "Busy" },
  {
    id: 3,
    lat: 51.51,
    lng: -0.12,
    name: "Soho Branch",
    status: "Out of Service",
  },
];

export default function ATMLocator() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Fix leafet icon
    // NOTE: In a real app we would import marker icons properly or use custom divs
  }, []);

  if (!isMounted) {
    return (
      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] h-[300px] flex items-center justify-center text-[#59595A]">
        Loading Map...
      </div>
    );
  }

  // Custom Icon setup would go here normally

  return (
    <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 h-full flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-center mb-4 relative z-10">
        <h3 className="text-white font-semibold">Nearby ATMs</h3>
        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
          {ATM_LOCATIONS.length} Found
        </span>
      </div>

      <div className="flex-1 rounded-2xl overflow-hidden relative z-0">
        <MapContainer
          center={[51.505, -0.09] as L.LatLngExpression}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {ATM_LOCATIONS.map((atm) => (
            <Marker
              key={atm.id}
              position={[atm.lat, atm.lng] as L.LatLngExpression}
            >
              <Popup>
                <strong className="text-black">{atm.name}</strong>
                <br />
                Status: {atm.status}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
