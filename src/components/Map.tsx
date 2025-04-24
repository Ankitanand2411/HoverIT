
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import L from 'leaflet';

// Define the default marker icon, since Leaflet's default icon won't load properly out of the box in many setups.
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const mapCenter: [number, number] = [28.61, 77.22]; // Can be changed as needed
const startPoint: [number, number] = [28.6129, 77.2295];
const endPoint: [number, number] = [28.6100, 77.2150];

// Fix prop types for MapContainer and TileLayer
const Map = () => (
  <Card className="w-full">
    <CardHeader className="pb-2">
      <CardTitle>Route Map</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="w-full h-[400px] bg-card/50 rounded-md relative overflow-hidden">
        {/* @ts-ignore - Ignoring type issues with react-leaflet components */}
        <MapContainer
          center={mapCenter}
          zoom={14}
          style={{ width: '100%', height: '400px', borderRadius: '0.5rem' }}
          className="z-0"
        >
          {/* @ts-ignore - Ignoring type issues with react-leaflet components */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {/* @ts-ignore - Ignoring type issues with react-leaflet components */}
          <Marker position={startPoint} icon={defaultIcon}>
            <Popup>Start Point</Popup>
          </Marker>
          {/* @ts-ignore - Ignoring type issues with react-leaflet components */}
          <Marker position={endPoint} icon={defaultIcon}>
            <Popup>Destination</Popup>
          </Marker>
        </MapContainer>
        <div className="absolute inset-0 pointer-events-none bg-cyber-radial opacity-50"></div>
        <div className="absolute bottom-4 right-4 bg-card/70 p-2 rounded-md text-xs z-10">
          <div className="mb-2">Map Legend</div>
          <div className="flex items-center mb-1">
            <div className="h-1 w-5 bg-cyber-bright-purple mr-2"></div>
            <span>Primary Route</span>
          </div>
          <div className="flex items-center">
            <div className="h-1 w-5 bg-cyber-blue mr-2 border-b border-dashed border-cyber-blue"></div>
            <span>Alternative Route</span>
          </div>
        </div>
        <div className="absolute top-4 left-4 flex flex-col space-y-2 z-10">
          <div className="bg-card/70 p-2 rounded-md text-xs flex items-center">
            <span className="inline-block h-3 w-3 rounded-full bg-cyber-bright-purple mr-2"></span>
            <span>Start Point</span>
          </div>
          <div className="bg-card/70 p-2 rounded-md text-xs flex items-center">
            <span className="inline-block h-3 w-3 rounded-full bg-cyber-blue mr-2"></span>
            <span>Destination</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default Map;
