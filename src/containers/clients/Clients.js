import React, {useContext} from "react";
import "./Clients.css";
import {clientsInfo} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Clients() {
  const {isDark} = useContext(StyleContext);
  if (!clientsInfo.display) {
    return null;
  }

  // Divide the clients into 5 rows
  const chunkSize = Math.ceil(clientsInfo.clients.length / 5);
  const rows = [];
  for (let i = 0; i < clientsInfo.clients.length; i += chunkSize) {
    rows.push(clientsInfo.clients.slice(i, i + chunkSize));
  }

  return (
    <div className="clients-section" id="clients">
      <div className="clients-header">
        <h2 className={isDark ? "dark-mode clients-heading" : "clients-heading"}>
          As Featured In
        </h2>
        <p className={isDark ? "dark-mode clients-subtitle" : "clients-subtitle"}>
          PROUD TO BE TRUSTED BY THE BEST IN THE INDUSTRY
        </p>
      </div>
      <div className="clients-container">
        {rows.map((row, rowIndex) => (
          <div className="clients-marquee" key={rowIndex}>
            <div className={`clients-track row-${rowIndex + 1}`}>
              {/* Render 4 copies of the row to ensure seamless infinite scroll even on ultra-wide screens */}
              {[...row, ...row, ...row, ...row].map((client, index) => (
                <div 
                  className={isDark ? "dark-mode client-pill" : "client-pill"} 
                  key={`${rowIndex}-${index}`}
                >
                  <i className={client.icon}></i>
                  <span>{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
