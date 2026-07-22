import "./Coverage.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const locations = [
  {
    name: "Riyadh",
    region: "Central Region",
    coordinates: [24.7136, 46.6753],
  },
  {
    name: "Jeddah",
    region: "Western Region",
    coordinates: [21.5433, 39.1728],
  },
  {
    name: "Dammam",
    region: "Eastern Region",
    coordinates: [26.4207, 50.0888],
  },
  {
    name: "Jubail",
    region: "Eastern Industrial Region",
    coordinates: [27.0174, 49.6225],
  },
];

const locationIcon = L.divIcon({
  className: "coverage-custom-marker",
  html: `
    <span class="coverage-marker-pulse"></span>
    <span class="coverage-marker-dot"></span>
  `,
  iconSize: [34, 34],
  iconAnchor: [17, 17],
  popupAnchor: [0, -16],
});

export default function Coverage() {
  return (
    <section className="coverage-section" id="coverage">
      <div className="coverage-container">
        <div className="coverage-header">
          <div>
            <span className="coverage-label">Our Coverage</span>

            <h2>
              Operational coverage across the
              <span> Kingdom of Saudi Arabia</span>
            </h2>
          </div>

          <p>
            IOC provides integrated facility management and operational
            support across major cities and industrial regions throughout the
            Kingdom.
          </p>
        </div>

        <div className="coverage-layout">
          <div className="coverage-location-panel">
            <div className="coverage-panel-heading">
              <span>Operational locations</span>
              <strong>{locations.length} Locations</strong>
            </div>

            <div className="coverage-location-list">
              {locations.map((location) => (
                <div className="coverage-location-card" key={location.name}>
                  <span className="coverage-location-pin"></span>

                  <div>
                    <h3>{location.name}</h3>
                    <p>{location.region}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="coverage-map-card">
            <div className="coverage-map-top">
              <div>
                <span>IOC Operational Network</span>
                <h3>Kingdom-wide service coverage</h3>
              </div>

              <div className="coverage-map-status">
                <span></span>
                Active
              </div>
            </div>
            <MapContainer
              center={[24.2, 45]}
              zoom={5.8}
              minZoom={5.5}
              maxZoom={7}
              maxBounds={[
                [15, 33],
                [33, 56],
              ]}
              maxBoundsViscosity={1}
              dragging={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
              zoomControl={false}
              className="coverage-live-map"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
                url={`https://api.maptiler.com/maps/dataviz-dark/{z}/{x}/{y}.png?key=${import.meta.env.VITE_MAPTILER_KEY}`}
              />

              {locations.map((location) => (
                <Marker
                  key={location.name}
                  position={location.coordinates}
                  icon={locationIcon}
                >
                  <Popup>
                    <div className="coverage-popup">
                      <strong>{location.name}</strong>
                      <span>{location.region}</span>
                      <p>IOC operational service coverage</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>

            <div className="coverage-map-footer">
              <div>
                <strong>4</strong>
                <span>Operational Hubs</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Support Services</span>
              </div>

              <div>
                <strong>KSA</strong>
                <span>Nationwide Capability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}