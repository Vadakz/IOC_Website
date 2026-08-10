import "./Coverage.css";
import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

import { useTranslation } from "react-i18next";
import L from "leaflet";

/* ==========================================================
   CURRENT COVERAGE LOCATIONS
========================================================== */

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

/* ==========================================================
   FUTURE COVERAGE LOCATIONS
========================================================== */

const futureLocations = [
  {
    name: "Makkah",
    region: "Western Region",
  },
  {
    name: "Madinah",
    region: "Western Region",
  },
  {
    name: "Yanbu",
    region: "Western Region",
  },
];

/* ==========================================================
   MAP MARKER ICON
========================================================== */

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

/* ==========================================================
   COVERAGE COMPONENT
========================================================== */

export default function Coverage() {
  const { t } = useTranslation();

  const coverageStats = t("coverage.stats", {
    returnObjects: true,
  });

  return (
    <section className="coverage-section">
      <div className="coverage-container">

        {/* ======================================================
            SECTION HEADER
        ====================================================== */}

        <div className="coverage-header">
          <div>
            <span className="coverage-label">
              {t("coverage.label")}
            </span>

            <h2>
              {t("coverage.title")}
              <span> {t("coverage.titleAccent")}</span>
            </h2>
          </div>

          <p>
            {t("coverage.description")}
          </p>
        </div>

        {/* ======================================================
            MAIN COVERAGE LAYOUT
        ====================================================== */}

        <div className="coverage-layout">

          {/* ====================================================
              LEFT SIDE
              CURRENT + FUTURE COVERAGE
          ==================================================== */}

          <div className="coverage-side-column">

            {/* ==================================================
                CURRENT COVERAGE
            ================================================== */}

            <div className="coverage-location-panel">

              <div className="coverage-panel-heading">
                <span>
                  {t("coverage.currentCoverageLabel")}
                </span>

                <strong>
                  {t("coverage.currentCoverageCount", {
                    count: locations.length,
                  })}
                </strong>
              </div>

              <div className="coverage-location-list">
                {locations.map((location) => (
                  <div
                    className="coverage-location-card"
                    key={location.name}
                  >
                    <span className="coverage-location-pin" />

                    <div>
                      <h3>
                        {t(
                          `coverage.locations.${location.name}.name`
                        )}
                      </h3>

                      <p>
                        {t(
                          `coverage.locations.${location.name}.region`
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* ==================================================
                FUTURE COVERAGE
            ================================================== */}

            <div className="coverage-location-panel coverage-future-panel">

              <div className="coverage-panel-heading">
                <span>
                  {t("coverage.futureCoverageLabel")}
                </span>

                <strong className="coverage-future-count">
                  {t("coverage.futureCoverageCount", {
                    count: futureLocations.length,
                  })}
                </strong>
              </div>

              <div className="coverage-location-list">
                {futureLocations.map((location) => (
                  <div
                    className="coverage-location-card coverage-future-location-card"
                    key={location.name}
                  >
                    <span className="coverage-location-pin coverage-future-pin" />

                    <div>
                      <h3>
                        {t(
                          `coverage.futureLocations.${location.name}.name`
                        )}
                      </h3>

                      <p>
                        {t(
                          `coverage.futureLocations.${location.name}.region`
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* ====================================================
              MAP SECTION
          ==================================================== */}

          <div className="coverage-map-card">

            {/* ==================================================
                MAP HEADER
            ================================================== */}

            <div className="coverage-map-top">
              <div>
                <span>
                  {t("coverage.network")}
                </span>

                <h3>
                  {t("coverage.networkTitle")}
                </h3>
              </div>

              <div className="coverage-map-status">
                <span />
                {t("coverage.active")}
              </div>
            </div>

            {/* ==================================================
                LEAFLET MAP
            ================================================== */}

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
                      <strong>
                        {t(
                          `coverage.locations.${location.name}.name`
                        )}
                      </strong>

                      <span>
                        {t(
                          `coverage.locations.${location.name}.region`
                        )}
                      </span>

                      <p>
                        {t("coverage.popup")}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>

            {/* ==================================================
                MAP FOOTER STATS
            ================================================== */}

            <div className="coverage-map-footer">
              {coverageStats.map((stat) => (
                <div key={stat.label}>
                  <strong>
                    {stat.value}
                  </strong>

                  <span>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}