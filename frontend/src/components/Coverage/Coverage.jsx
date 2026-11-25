
import React, { useEffect, useState } from "react";
import "./Coverage.css";
import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
  useMap,
} from "react-leaflet";

import { useTranslation } from "react-i18next";
import L from "leaflet";

/* ==========================================================
   CURRENT OPERATIONAL LOCATIONS
========================================================== */

const locations = [
  {
    name: "Riyadh",
    region: "Central Region",
    coordinates: [24.7136, 46.6753],
    type: "hq",
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
   NOT DISPLAYED ON THE MAP
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
   CREATE CURVED CONNECTION PATHS
========================================================== */

const createCurvedPath = (start, end) => {
  const [lat1, lng1] = start;
  const [lat2, lng2] = end;

  const midLat = (lat1 + lat2) / 2;
  const midLng = (lng1 + lng2) / 2;

  const dx = lng2 - lng1;
  const dy = lat2 - lat1;

  const curve = 0.12;

  const controlLat = midLat + dx * curve;
  const controlLng = midLng - dy * curve;

  const points = [];

  for (let i = 0; i <= 50; i++) {
    const t = i / 50;
    const inverse = 1 - t;

    const lat =
      inverse * inverse * lat1 +
      2 * inverse * t * controlLat +
      t * t * lat2;

    const lng =
      inverse * inverse * lng1 +
      2 * inverse * t * controlLng +
      t * t * lng2;

    points.push([lat, lng]);
  }

  return points;
};

/* ==========================================================
   MAP MARKER ICONS
========================================================== */

const createLocationIcon = (isHQ = false, isActive = false) =>
  L.divIcon({
    className: "coverage-custom-marker",

    html: `
      <span class="${isHQ
        ? "coverage-hq-pulse"
        : "coverage-marker-pulse"
      }"></span>

      <span class="${isHQ
        ? "coverage-hq-dot"
        : `coverage-marker-dot ${isActive ? "coverage-marker-selected" : ""
        }`
      }"></span>
    `,

    iconSize: isHQ ? [46, 46] : [34, 34],
    iconAnchor: isHQ ? [23, 23] : [17, 17],
    popupAnchor: [0, -18],
  });

/* ==========================================================
   AUTOMATIC MAP FIT
========================================================== */

function CoverageMapFit() {
  const map = useMap();

  useEffect(() => {
    const fitMap = () => {
      const bounds = L.latLngBounds(
        locations.map((location) => location.coordinates)
      );

      map.invalidateSize();

      map.fitBounds(bounds, {
        padding: [35, 35],
        maxZoom: window.innerWidth <= 600 ? 5.5:6,
        animate: false,
      });
    };

    const frame = requestAnimationFrame(fitMap);

    window.addEventListener("resize", fitMap);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", fitMap);
    };
  }, [map]);

  return null;
}

/* ==========================================================
   COVERAGE COMPONENT
========================================================== */

export default function Coverage() {
  const { t } = useTranslation();

  const [selectedLocation, setSelectedLocation] =
    useState("Riyadh");

  const coverageStats = t("coverage.stats", {
    returnObjects: true,
  });

  const hq = locations[0];

  return (
    <section id="coverage" className="coverage-section">

      <div className="coverage-container">

        {/* ==================================================
            PREMIUM COVERAGE HERO
        ================================================== */}

        <div className="coverage-hero">
          <div className="coverage-hero-copy">
            <div className="coverage-hero-eyebrow">
              <span className="coverage-hero-pin">⌖</span>
              <span>{t("coverage.label")}</span>
              <i />
            </div>

            <h2>
              {t("coverage.title")}
              <span> {t("coverage.titleAccent")}</span>
            </h2>

            <p>{t("coverage.description")}</p>
          </div>

          <div className="coverage-hero-visual" aria-hidden="true">
            <div className="coverage-hero-city-glow" />
            <span className="coverage-hero-city-label">RIYADH</span>
            <span className="coverage-hero-city-subtitle">KINGDOM OF SAUDI ARABIA</span>
          </div>

          <div className="coverage-hero-stats">
            {Array.isArray(coverageStats) && coverageStats.map((stat, index) => (
              <div className="coverage-hero-stat" key={stat.label}>
                <span className="coverage-hero-stat-icon">
                  {["⌖", "◷", "⌘"][index] || "✦"}
                </span>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ==================================================
            MAIN COVERAGE LAYOUT
        ================================================== */}

        <div className="coverage-layout">

          {/* ==================================================
              LEFT SIDE - CURRENT AND FUTURE COVERAGE
          ================================================== */}

          <div className="coverage-side-column">

            {/* ================================================
                CURRENT COVERAGE
            ================================================ */}

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

                  <button
                    type="button"
                    className={`coverage-location-card ${selectedLocation === location.name
                        ? "coverage-location-selected"
                        : ""
                      } ${location.type === "hq"
                        ? "coverage-hq-card"
                        : ""
                      }`}
                    key={location.name}
                    onClick={() =>
                      setSelectedLocation(location.name)
                    }
                    onMouseEnter={() =>
                      setSelectedLocation(location.name)
                    }
                  >

                    <span className="coverage-location-pin" />

                    <div>

                      <h3>
                        {t(
                          `coverage.locations.${location.name}.name`
                        )}

                        {location.type === "hq" && (
                          <span className="coverage-hq-label">
                            HQ
                          </span>
                        )}
                      </h3>

                      <p>
                        {t(
                          `coverage.locations.${location.name}.region`
                        )}
                      </p>

                    </div>

                  </button>

                ))}

              </div>

            </div>

            {/* ================================================
                FUTURE COVERAGE
                PANEL ONLY - NOT ON MAP
            ================================================ */}

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

          {/* ==================================================
              INTERACTIVE OPERATIONAL MAP
          ================================================== */}

          <div className="coverage-map-card">

            {/* MAP HEADER */}

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

            {/* LEAFLET MAP */}

            <MapContainer
              center={[24.2, 45]}
              zoom={5}
              minZoom={4}
              maxZoom={7}
              dragging={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
              zoomControl={false}
              className="coverage-live-map"
            >

              <CoverageMapFit />

              <TileLayer
                attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
                url={`https://api.maptiler.com/maps/dataviz-dark/{z}/{x}/{y}.png?key=${import.meta.env.VITE_MAPTILER_KEY}`}
              />

              {/* ============================================
                  CONNECTION LINES FROM RIYADH HQ
              ============================================ */}

              {locations
                .filter(
                  (location) => location.name !== "Riyadh"
                )
                .map((location) => {

                  const isSelected =
                    selectedLocation === location.name;

                  const path = createCurvedPath(
                    hq.coordinates,
                    location.coordinates
                  );

                  return (

                    <React.Fragment key={location.name}>

                      {/* Main connection line */}

                      <Polyline
                        positions={path}
                        pathOptions={{
                          color: "#1db3ab",
                          weight: isSelected ? 4 : 2.5,
                          opacity: isSelected ? 1 : 0.75,
                          lineCap: "round",
                          lineJoin: "round",
                          className: "coverage-route-base",
                        }}
                      />

                      {/* Animated dotted connection */}

                      <Polyline
                        positions={path}
                        pathOptions={{
                          color: "#b9fff9",
                          weight: 2,
                          opacity: 1,
                          dashArray: "2 12",
                          lineCap: "round",
                          className: "coverage-route-flow",
                        }}
                      />

                    </React.Fragment>

                  );
                })}

              {/* ============================================
                  OPERATIONAL LOCATION MARKERS
              ============================================ */}

              {locations.map((location) => {

                const isHQ = location.type === "hq";

                const isActive =
                  selectedLocation === location.name;

                return (

                  <Marker
                    key={location.name}
                    position={location.coordinates}
                    icon={createLocationIcon(
                      isHQ,
                      isActive
                    )}
                    eventHandlers={{

                      mouseover: (e) => {
                        setSelectedLocation(location.name);
                        e.target.openPopup();
                      },

                      mouseout: (e) => {
                        e.target.closePopup();
                      },

                      click: (e) => {
                        setSelectedLocation(location.name);
                        e.target.openPopup();
                      },

                    }}
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

                        {isHQ && (
                          <p>IOC Headquarters</p>
                        )}

                        {!isHQ && (
                          <p>
                            {t("coverage.popup")}
                          </p>
                        )}

                      </div>

                    </Popup>

                  </Marker>

                );
              })}

            </MapContainer>

          </div>

        </div>

      </div>

    </section>
  );
}
