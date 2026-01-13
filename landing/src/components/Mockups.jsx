import React from "react";

import qrCode from "../assets/qr_code.png";
import cameraBg from "../assets/camera_bg.jpg";

// QR Display Mockup - Shows business device displaying QR code for customers to scan
// This replaces the old TicketMockup (physical printed ticket) which is no longer part of the product model
export const QRDisplayMockup = ({ number = "A047" }) => (
  <div
    style={{
      width: "240px",
      height: "480px",
      background: "#1e293b",
      borderRadius: "32px",
      border: "8px solid #0f172a",
      overflow: "hidden",
      position: "relative",
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* Notch */}
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80px",
        height: "24px",
        background: "#0f172a",
        borderRadius: "0 0 12px 12px",
        zIndex: 10,
      }}
    ></div>

    {/* Screen Content */}
    <div
      style={{
        flex: 1,
        background: "linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        position: "relative",
      }}
    >
      {/* Branding Header */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "var(--accent-color)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "800",
              fontSize: "0.9rem",
              color: "#fff",
              boxShadow: "0 2px 8px rgba(37, 211, 102, 0.3)",
            }}
          >
            TL
          </div>
          <div
            style={{
              fontSize: "1.125rem",
              fontWeight: "700",
              color: "#0f172a",
            }}
          >
            TurnoLibre
          </div>
        </div>
        <div
          style={{
            fontSize: "0.75rem",
            color: "#64748b",
            fontWeight: "500",
          }}
        >
          Sistema de Turnos
        </div>
      </div>

      {/* QR Code - Center */}
      <div
        style={{
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          marginBottom: "1rem",
        }}
      >
        <img
          src={qrCode}
          alt="QR Code"
          style={{
            width: "140px",
            height: "140px",
            display: "block",
          }}
        />
      </div>

      {/* Instructions */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "180px",
        }}
      >
        <div
          style={{
            fontSize: "1rem",
            fontWeight: "700",
            color: "#0f172a",
            marginBottom: "0.5rem",
          }}
        >
          Escanea para unirte
        </div>
        <div
          style={{
            fontSize: "0.8rem",
            color: "#64748b",
            lineHeight: "1.4",
          }}
        >
          Recibe tu turno por WhatsApp y espera donde quieras
        </div>
      </div>

      {/* Current Ticket Number - Bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          background: "rgba(37, 211, 102, 0.1)",
          border: "2px solid var(--accent-color)",
          borderRadius: "12px",
          padding: "0.75rem 1.25rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            color: "#15803d",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Turno Actual:
        </div>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "800",
            color: "#0f172a",
          }}
        >
          {number}
        </div>
      </div>
    </div>
  </div>
);

// Message presets for different use cases
export const MESSAGE_PRESETS = {
  general: {
    welcome: [
      "✅ Listo, ya estás en el sistema",
      "Puedes sentarte, ir al baño o tomar un café ☕",
      "Te avisamos cuando falten 2 turnos (~8 min)",
    ],
    alert: ["⏰ ¡Tu turno está por salir!", "Dirígete a Caja 3 ahora 👉"],
  },
  hospital: {
    welcome: [
      "✅ Registrado para consulta médica",
      "Hay 12 personas adelante (~45 min)",
      "Puedes ir a cafetería o esperar afuera. Te avisamos con tiempo",
    ],
    progress: [
      "⏱️ Faltan 3 pacientes (~15 min)",
      "Ve acercándote al área de espera",
    ],
    alert: ["🩺 Es tu turno ahora", "Consultorio 5 - Dra. Martínez"],
  },
  retail: {
    welcome: [
      "✅ Ya estás en fila de cambios",
      "4 personas adelante (~10 min)",
      "Sigue viendo la tienda, te avisamos cuando estés cerca 🛍️",
    ],
    alert: [
      "⏰ Tu turno sale en 2 minutos",
      "Servicio al Cliente - Mostrador 3",
    ],
  },
  bank: {
    welcome: [
      "✅ En fila para atención general",
      "8 personas esperan (~12 min)",
      "Tenemos 4 cajas trabajando. Siéntate tranquilo",
    ],
    alert: ["🔔 ¡Es tu turno!", "Dirígete a Ventanilla 7"],
  },
  government: {
    welcome: [
      "✅ Turno para licencias registrado",
      "Posición en fila: 15 (~90 min)",
      "NO necesitas estar presente. Vuelve en 1 hora o espera afuera",
    ],
    progress: ["⏰ Faltan 30 minutos (~5 turnos)", "Ve regresando al edificio"],
    alert: ["📋 Es tu turno - Ventanilla 12", "Ten listos: INE + comprobante"],
  },
  restaurant: {
    welcome: [
      "✅ Mesa para 4 personas confirmada",
      "Hay 6 grupos adelante (~25 min)",
      "Espera en el bar o da una vuelta. Te avisamos 9 min antes",
    ],
    progress: [
      "🍽️ Tu mesa estará lista en 9 minutos",
      "Ve acercándote al restaurante",
    ],
    alert: ["✨ ¡Tu mesa está lista!", "Preséntate en recepción - Mesa 12"],
  },
};

export const PhoneMockup = ({
  state = "scan",
  preset = "general",
  customMessages = null,
}) => {
  // Use custom messages if provided, otherwise use preset
  const messages =
    customMessages || MESSAGE_PRESETS[preset] || MESSAGE_PRESETS.general;

  return (
    <div
      style={{
        width: "240px",
        height: "480px",
        background: "#fff",
        borderRadius: "32px",
        border: "8px solid #1e293b",
        overflow: "hidden",
        position: "relative",
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "24px",
          background: "#1e293b",
          borderRadius: "0 0 12px 12px",
          zIndex: 10,
        }}
      ></div>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        {state === "scan" && (
          <div
            style={{
              background: "#000",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              backgroundImage: `url(${cameraBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Camera Overlay Darkening */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.3)",
              }}
            ></div>

            {/* Camera Viewfinder UI */}
            <div
              style={{
                width: "180px",
                height: "180px",
                border: "2px solid rgba(255,255,255,0.5)",
                borderRadius: "12px",
                position: "relative",
                boxShadow: "0 0 0 9999px rgba(0,0,0,0.5)", // Focus effect
                zIndex: 2,
              }}
            >
              {/* Scanning Line Animation */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "#25D366",
                  boxShadow: "0 0 4px #25D366",
                  animation: "scan 2s linear infinite",
                }}
              >
                <style>{`
                                    @keyframes scan {
                                        0% { top: 0; opacity: 0; }
                                        10% { opacity: 1; }
                                        90% { opacity: 1; }
                                        100% { top: 100%; opacity: 0; }
                                    }
                                `}</style>
              </div>
              {/* Corners */}
              <div
                style={{
                  position: "absolute",
                  top: "-2px",
                  left: "-2px",
                  width: "20px",
                  height: "20px",
                  borderTop: "4px solid #25D366",
                  borderLeft: "4px solid #25D366",
                  borderRadius: "4px 0 0 0",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "-2px",
                  right: "-2px",
                  width: "20px",
                  height: "20px",
                  borderTop: "4px solid #25D366",
                  borderRight: "4px solid #25D366",
                  borderRadius: "0 4px 0 0",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: "-2px",
                  width: "20px",
                  height: "20px",
                  borderBottom: "4px solid #25D366",
                  borderLeft: "4px solid #25D366",
                  borderRadius: "0 0 0 4px",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  right: "-2px",
                  width: "20px",
                  height: "20px",
                  borderBottom: "4px solid #25D366",
                  borderRight: "4px solid #25D366",
                  borderRadius: "0 0 4px 0",
                }}
              ></div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "110px",
                color: "#fff",
                fontSize: "0.875rem",
                fontWeight: "500",
                background: "rgba(0,0,0,0.6)",
                padding: "6px 14px",
                borderRadius: "20px",
                zIndex: 5,
                backdropFilter: "blur(4px)",
              }}
            >
              Escaneando código...
            </div>

            {/* Camera Controls Mockup */}
            <div
              style={{
                position: "absolute",
                bottom: "30px",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                border: "4px solid #fff",
                zIndex: 5,
              }}
            ></div>
          </div>
        )}
        {state.startsWith("chat") && (
          <>
            {/* Status bar */}
            <div
              style={{
                background: "#075E54",
                padding: "4px 15px",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.65rem",
                fontWeight: "500",
              }}
            >
              <span>9:41 AM</span>
              <div
                style={{ display: "flex", gap: "4px", alignItems: "center" }}
              >
                <span>📶</span>
                <span>WiFi</span>
                <span>🔋</span>
              </div>
            </div>

            {/* WhatsApp Header */}
            <div
              style={{
                background: "#075E54",
                padding: "8px 12px",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {/* Back arrow */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              {/* Profile picture - TurnoLibre Logo */}
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "#25D366",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "800",
                  fontSize: "0.85rem",
                  color: "#fff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }}
              >
                TL
              </div>
              {/* Name and status */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.9rem", fontWeight: "600" }}>
                  TurnoLibre
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  en línea
                </div>
              </div>
              {/* Header icons */}
              <div style={{ display: "flex", gap: "16px" }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="5" r="1.5" />
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="12" cy="19" r="1.5" />
                </svg>
              </div>
            </div>

            {/* WhatsApp Background Pattern */}
            <div
              style={{
                flex: 1,
                background: "#E5DDD5",
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4cdc6' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                padding: "12px 8px 8px 8px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                overflowY: "auto",
              }}
            >
              {state === "chat_welcome" && messages.welcome && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  {messages.welcome.map((msg, index) => (
                    <div
                      key={index}
                      style={{
                        alignSelf: "flex-start",
                        maxWidth: "82%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          background: "#fff",
                          padding: "6px 10px 8px 10px",
                          borderRadius: "0 8px 8px 8px",
                          fontSize: "0.8rem",
                          lineHeight: "1.4",
                          boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)",
                          position: "relative",
                        }}
                      >
                        {/* Tail for first message */}
                        {index === 0 && (
                          <div
                            style={{
                              position: "absolute",
                              left: "-8px",
                              top: "0",
                              width: "0",
                              height: "0",
                              borderTop: "8px solid #fff",
                              borderLeft: "8px solid transparent",
                            }}
                          ></div>
                        )}
                        <div>{msg}</div>
                        <div
                          style={{
                            fontSize: "0.65rem",
                            color: "#667781",
                            marginTop: "2px",
                            textAlign: "right",
                          }}
                        >
                          9:41 AM
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {state === "chat_progress" && messages.progress && (
                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  {messages.progress.map((msg, index) => (
                    <div
                      key={index}
                      style={{
                        alignSelf: "flex-start",
                        maxWidth: "82%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          background: "#fff",
                          padding: "6px 10px 8px 10px",
                          borderRadius: "0 8px 8px 8px",
                          fontSize: "0.8rem",
                          lineHeight: "1.4",
                          boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)",
                          position: "relative",
                        }}
                      >
                        {index === 0 && (
                          <div
                            style={{
                              position: "absolute",
                              left: "-8px",
                              top: "0",
                              width: "0",
                              height: "0",
                              borderTop: "8px solid #fff",
                              borderLeft: "8px solid transparent",
                            }}
                          ></div>
                        )}
                        <div>{msg}</div>
                        <div
                          style={{
                            fontSize: "0.65rem",
                            color: "#667781",
                            marginTop: "2px",
                            textAlign: "right",
                          }}
                        >
                          10:23 AM
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {state === "chat_alert" && messages.alert && (
                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  {messages.alert.map((msg, index) => (
                    <div
                      key={index}
                      style={{
                        alignSelf: "flex-start",
                        maxWidth: "82%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          background: "#fff",
                          padding: "6px 10px 8px 10px",
                          borderRadius: "0 8px 8px 8px",
                          fontSize: "0.8rem",
                          lineHeight: "1.4",
                          boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)",
                          position: "relative",
                        }}
                      >
                        {index === 0 && (
                          <div
                            style={{
                              position: "absolute",
                              left: "-8px",
                              top: "0",
                              width: "0",
                              height: "0",
                              borderTop: "8px solid #fff",
                              borderLeft: "8px solid transparent",
                            }}
                          ></div>
                        )}
                        <div>{msg}</div>
                        <div
                          style={{
                            fontSize: "0.65rem",
                            color: "#667781",
                            marginTop: "2px",
                            textAlign: "right",
                          }}
                        >
                          10:45 AM
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* WhatsApp Input Bar */}
            <div
              style={{
                background: "#F0F0F0",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                borderTop: "1px solid #d1d1d1",
              }}
            >
              {/* Input field */}
              <div
                style={{
                  flex: 1,
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "8px 12px",
                  fontSize: "0.8rem",
                  color: "#667781",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>Mensaje</span>
                <div
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    gap: "8px",
                    color: "#8696a0",
                  }}
                >
                  {/* Camera icon */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </div>
              </div>

              {/* Send button */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "#25D366",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" fill="white" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// --- UPDATED COMPONENTS FOR REALISM ---

export const TabletMockup = () => (
  <div
    style={{
      width: "420px",
      height: "300px",
      position: "relative",
      transform: "perspective(800px) rotateY(-10deg) rotateX(5deg)",
      transformStyle: "preserve-3d",
    }}
  >
    {/* Tablet Hardware */}
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#2d3748",
        borderRadius: "24px",
        padding: "14px",
        boxShadow:
          "0 25px 50px -12px rgba(0, 0, 0, 0.4), inset 0 0 0 2px #4a5568",
        position: "relative",
      }}
    >
      {/* Screen */}
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "inset 0 2px 10px rgba(0,0,0,0.1)",
          position: "relative",
        }}
      >
        {/* Status Bar */}
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "12px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                background: "#fff",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "0.9rem",
                color: "#667eea",
              }}
            >
              N
            </div>
            <span
              style={{ color: "#fff", fontWeight: "600", fontSize: "0.95rem" }}
            >
              Control de Turnos
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(255,255,255,0.2)",
              padding: "4px 10px",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                background: "#22c55e",
                borderRadius: "50%",
                boxShadow: "0 0 4px #22c55e",
              }}
            ></div>
            <span
              style={{ color: "#fff", fontSize: "0.7rem", fontWeight: "500" }}
            >
              En línea
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            padding: "20px",
            height: "calc(100% - 56px)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* Current Ticket Display */}
          <div
            style={{
              background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
              borderRadius: "16px",
              padding: "16px",
              textAlign: "center",
              border: "2px solid #e2e8f0",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                color: "#64748b",
                fontWeight: "600",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Turno Actual
            </div>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "800",
                color: "#0f172a",
                lineHeight: "1",
                marginBottom: "8px",
              }}
            >
              A048
            </div>
            <button
              style={{
                background: "#22c55e",
                color: "#fff",
                border: "none",
                padding: "10px 24px",
                borderRadius: "10px",
                fontSize: "0.85rem",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
                width: "100%",
              }}
            >
              ✓ Llamar Siguiente
            </button>
          </div>

          {/* Queue List */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                color: "#64748b",
                fontWeight: "600",
                marginBottom: "4px",
              }}
            >
              EN ESPERA
            </div>
            <div
              style={{
                background: "#f8fafc",
                borderRadius: "8px",
                padding: "10px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    color: "#0f172a",
                  }}
                >
                  A049
                </span>
                <span style={{ fontSize: "0.7rem", color: "#64748b" }}>
                  • Hace 12 min
                </span>
              </div>
              <div
                style={{
                  background: "#fef3c7",
                  color: "#92400e",
                  padding: "3px 8px",
                  borderRadius: "6px",
                  fontSize: "0.65rem",
                  fontWeight: "600",
                }}
              >
                Esperando
              </div>
            </div>
            <div
              style={{
                background: "#f8fafc",
                borderRadius: "8px",
                padding: "10px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    color: "#0f172a",
                  }}
                >
                  A050
                </span>
                <span style={{ fontSize: "0.7rem", color: "#64748b" }}>
                  • Hace 8 min
                </span>
              </div>
              <div
                style={{
                  background: "#fef3c7",
                  color: "#92400e",
                  padding: "3px 8px",
                  borderRadius: "6px",
                  fontSize: "0.65rem",
                  fontWeight: "600",
                }}
              >
                Esperando
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Home Button (iPad style) */}
      <div
        style={{
          position: "absolute",
          bottom: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "40px",
          height: "6px",
          background: "#1a202c",
          borderRadius: "3px",
        }}
      ></div>
    </div>
  </div>
);

export const RichScreenMockup = ({ number = "A047" }) => (
  <div
    style={{
      width: "420px",
      height: "240px",
      background: "#0f172a",
      borderRadius: "8px",
      boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.4)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      border: "1px solid #334155", // Subtle border instead of thick bezel
    }}
  >
    {/* "Browsesr/System" Bar to show Hardware Agnosticism */}
    <div
      style={{
        height: "24px",
        background: "#1e293b",
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        gap: "6px",
      }}
    >
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#ef4444",
        }}
      ></div>
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#f59e0b",
        }}
      ></div>
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#22c55e",
        }}
      ></div>
      <div style={{ marginLeft: "auto", fontSize: "0.6rem", color: "#64748b" }}>
        nexus-display.app
      </div>
    </div>

    <div style={{ flex: 1, display: "flex" }}>
      {/* Main Area */}
      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRight: "1px solid #1e293b",
          background:
            "radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)",
        }}
      >
        <span
          style={{
            fontSize: "0.7rem",
            color: "#94a3b8",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          TURNO ACTUAL
        </span>
        <span
          style={{
            fontSize: "4.5rem",
            fontWeight: "800",
            color: "#fff",
            textShadow: "0 0 30px rgba(37, 211, 102, 0.3)",
          }}
        >
          {number}
        </span>
        <div
          style={{
            marginTop: "0.5rem",
            padding: "4px 12px",
            background: "rgba(37, 211, 102, 0.1)",
            color: "#25D366",
            borderRadius: "20px",
            fontSize: "0.7rem",
            fontWeight: "bold",
            border: "1px solid rgba(37, 211, 102, 0.2)",
          }}
        >
          PASAR A CAJA 3
        </div>
      </div>

      {/* Sidebar List */}
      <div
        style={{
          flex: 1,
          background: "#0f172a",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div
          style={{ fontSize: "0.6rem", color: "#64748b", fontWeight: "bold" }}
        >
          SIGUIE
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #1e293b",
            paddingBottom: "8px",
          }}
        >
          <span style={{ color: "#e2e8f0", fontWeight: "600" }}>A048</span>
          <span style={{ color: "#64748b", fontSize: "0.7rem" }}>~5 min</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #1e293b",
            paddingBottom: "8px",
          }}
        >
          <span style={{ color: "#e2e8f0", fontWeight: "600" }}>A049</span>
          <span style={{ color: "#64748b", fontSize: "0.7rem" }}>~12 min</span>
        </div>
      </div>
    </div>
  </div>
);

// Note: TerminalMockup (thermal printer) has been removed as it's no longer part of the product model.
// The new model uses digital QR codes displayed on business devices (see QRDisplayMockup above).
