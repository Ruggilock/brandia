"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────
type FlowStep =
  | "express"
  | "processing"
  | "result"
  | "register-form"
  | "naming-form"
  | "branding-contact"
  | "payment"
  | "confirmation";

type Probability = "alta" | "media" | "baja";

interface ExpressData {
  nombre: string;
  nombreMarca: string;
  categoria: string;
  email: string;
  aceptaTerminos: boolean;
}

interface RegisterData {
  razonSocial: string;
  rucDni: string;
  email: string;
  telefono: string;
  direccion: string;
  tipoPersona: string;
  tieneLogo: string;
  descripcionProducto: string;
}

interface NamingData {
  razonSocial: string;
  rucDni: string;
  email: string;
  telefono: string;
  direccion: string;
  tipoPersona: string;
  descripcionNegocio: string;
  categoriaNegocio: string;
  publicoObjetivo: string;
  propuestaValor: string;
  personalidadMarca: string;
  marcasReferentes: string;
}

// ─── Constants ───────────────────────────────────────────
const CATEGORIAS = [
  "Tecnología",
  "Alimentos y Bebidas",
  "Moda y Vestimenta",
  "Salud y Bienestar",
  "Educación",
  "Servicios Profesionales",
  "Comercio / Retail",
  "Belleza y Cuidado Personal",
  "Construcción e Inmobiliaria",
  "Entretenimiento",
  "Transporte y Logística",
  "Otro",
];

const inputClass =
  "w-full px-4 py-3 border border-gray-light rounded-xl focus:border-bright-blue focus:outline-none focus:ring-1 focus:ring-bright-blue/30 transition-colors bg-white text-dark-blue placeholder:text-dark-blue/30";
const labelClass = "block text-sm font-medium text-dark-blue mb-2";

// ─── Component ───────────────────────────────────────────
export default function OnboardingPage() {
  const [flowStep, setFlowStep] = useState<FlowStep>("express");
  const [probability, setProbability] = useState<Probability>("alta");
  const [selectedPath, setSelectedPath] = useState<
    "registro" | "naming" | "branding" | null
  >(null);
  const [processingProgress, setProcessingProgress] = useState(0);

  const [expressData, setExpressData] = useState<ExpressData>({
    nombre: "",
    nombreMarca: "",
    categoria: "",
    email: "",
    aceptaTerminos: false,
  });

  const [registerData, setRegisterData] = useState<RegisterData>({
    razonSocial: "",
    rucDni: "",
    email: "",
    telefono: "",
    direccion: "",
    tipoPersona: "",
    tieneLogo: "",
    descripcionProducto: "",
  });

  const [namingData, setNamingData] = useState<NamingData>({
    razonSocial: "",
    rucDni: "",
    email: "",
    telefono: "",
    direccion: "",
    tipoPersona: "",
    descripcionNegocio: "",
    categoriaNegocio: "",
    publicoObjetivo: "",
    propuestaValor: "",
    personalidadMarca: "",
    marcasReferentes: "",
  });

  const [metodoPago, setMetodoPago] = useState("tarjeta");

  // Processing animation
  useEffect(() => {
    if (flowStep !== "processing") return;

    const interval = setInterval(() => {
      setProcessingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Mock: randomly assign probability (in production, this comes from Make.js/API)
          const rand = Math.random();
          if (rand > 0.5) setProbability("alta");
          else if (rand > 0.2) setProbability("media");
          else setProbability("baja");
          setTimeout(() => setFlowStep("result"), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [flowStep]);

  const handleExpressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessingProgress(0);
    setFlowStep("processing");
  };

  const handleChoosePath = (path: "registro" | "naming" | "branding") => {
    setSelectedPath(path);
    // Pre-fill email from express form
    if (path === "registro") {
      setRegisterData((prev) => ({ ...prev, email: expressData.email }));
      setFlowStep("register-form");
    } else if (path === "naming") {
      setNamingData((prev) => ({ ...prev, email: expressData.email }));
      setFlowStep("naming-form");
    } else {
      setFlowStep("branding-contact");
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFlowStep("payment");
  };

  const handleNamingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFlowStep("payment");
  };

  const handlePayment = () => {
    setFlowStep("confirmation");
  };

  // ─── Header ─────────────────────────────────────────
  const stepLabels: Record<FlowStep, string> = {
    express: "Evaluación",
    processing: "Analizando",
    result: "Resultado",
    "register-form": "Registro",
    "naming-form": "Naming",
    "branding-contact": "Branding",
    payment: "Pago",
    confirmation: "Confirmación",
  };

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <nav className="border-b border-gray-light bg-white/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Brandia"
              width={90}
              height={90}
              priority
            />
          </Link>
          <span className="font-mono text-xs text-dark-blue/40 uppercase tracking-widest">
            {stepLabels[flowStep]}
          </span>
        </div>
      </nav>

      {/* ════════════════════════════════════════════════ */}
      {/* STEP: FORMULARIO EXPRESS                        */}
      {/* ════════════════════════════════════════════════ */}
      {flowStep === "express" && (
        <div className="max-w-xl mx-auto px-6 py-12">
          <div className="text-center mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-dark-blue mb-3">
              Evalúa tu marca gratis
            </h1>
            <p className="text-dark-blue/50">
              Descubre en segundos si tu nombre de marca está disponible para
              registro ante Indecopi.
            </p>
          </div>

          <form
            onSubmit={handleExpressSubmit}
            className="bg-white rounded-2xl p-8 border border-gray-light shadow-sm"
          >
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Tu nombre *</label>
                <input
                  type="text"
                  required
                  value={expressData.nombre}
                  onChange={(e) =>
                    setExpressData({ ...expressData, nombre: e.target.value })
                  }
                  className={inputClass}
                  placeholder="Nombre completo"
                />
              </div>

              <div>
                <label className={labelClass}>Nombre de marca a evaluar *</label>
                <input
                  type="text"
                  required
                  value={expressData.nombreMarca}
                  onChange={(e) =>
                    setExpressData({
                      ...expressData,
                      nombreMarca: e.target.value,
                    })
                  }
                  className={inputClass}
                  placeholder="Ej: Brandia, TechFlow, NovaPet..."
                />
              </div>

              <div>
                <label className={labelClass}>Categoría de negocio *</label>
                <select
                  required
                  value={expressData.categoria}
                  onChange={(e) =>
                    setExpressData({
                      ...expressData,
                      categoria: e.target.value,
                    })
                  }
                  className={inputClass}
                >
                  <option value="">Seleccionar...</option>
                  {CATEGORIAS.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass}>Correo electrónico *</label>
                <input
                  type="email"
                  required
                  value={expressData.email}
                  onChange={(e) =>
                    setExpressData({ ...expressData, email: e.target.value })
                  }
                  className={inputClass}
                  placeholder="tu@email.com"
                />
              </div>

              <label className="flex items-start gap-3 text-sm cursor-pointer pt-2">
                <input
                  type="checkbox"
                  required
                  checked={expressData.aceptaTerminos}
                  onChange={(e) =>
                    setExpressData({
                      ...expressData,
                      aceptaTerminos: e.target.checked,
                    })
                  }
                  className="mt-0.5 w-4 h-4 accent-bright-blue"
                />
                <span className="text-dark-blue/60">
                  Acepto los{" "}
                  <a href="#" className="text-bright-blue underline">
                    términos y condiciones
                  </a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-dark-blue text-white py-4 rounded-full font-bold text-base hover:bg-bright-blue hover:text-dark-blue transition-all"
            >
              Evaluar Gratis
            </button>

            <p className="text-center text-xs text-dark-blue/30 mt-4">
              Evaluación gratuita · Sin compromiso · Resultado inmediato
            </p>
          </form>
        </div>
      )}

      {/* ════════════════════════════════════════════════ */}
      {/* STEP: PROCESSING                               */}
      {/* ════════════════════════════════════════════════ */}
      {flowStep === "processing" && (
        <div className="max-w-lg mx-auto px-6 py-24 text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-bright-blue/10 flex items-center justify-center">
            <div className="w-10 h-10 border-3 border-bright-blue/30 border-t-bright-blue rounded-full animate-spin" />
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-blue mb-3">
            Analizando tu marca...
          </h2>
          <p className="text-dark-blue/50 mb-10">
            Estamos buscando en la base de datos de Indecopi y analizando la
            viabilidad de registro.
          </p>

          {/* Progress bar */}
          <div className="max-w-sm mx-auto">
            <div className="w-full bg-gray-light rounded-full h-2 mb-4">
              <div
                className="bg-bright-blue h-2 rounded-full transition-all duration-200"
                style={{ width: `${processingProgress}%` }}
              />
            </div>

            <div className="space-y-2 text-left">
              {[
                { label: "Búsqueda exacta en Indecopi", threshold: 20 },
                { label: "Análisis fonético y visual", threshold: 45 },
                { label: "Búsqueda por clase Niza", threshold: 70 },
                { label: "Calculando probabilidad", threshold: 90 },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 text-sm transition-all ${
                    processingProgress >= item.threshold
                      ? "text-dark-blue"
                      : "text-dark-blue/25"
                  }`}
                >
                  {processingProgress >= item.threshold + 15 ? (
                    <svg
                      className="w-4 h-4 text-bright-blue flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${processingProgress >= item.threshold ? "bg-bright-blue" : "bg-dark-blue/15"}`}
                      />
                    </div>
                  )}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════ */}
      {/* STEP: RESULT                                   */}
      {/* ════════════════════════════════════════════════ */}
      {flowStep === "result" && (
        <div className="max-w-2xl mx-auto px-6 py-12">
          {/* Result card */}
          <div
            className={`rounded-2xl p-8 md:p-10 mb-8 text-center border-2 ${
              probability === "alta"
                ? "bg-emerald-50 border-emerald-200"
                : probability === "media"
                  ? "bg-amber-50 border-amber-200"
                  : "bg-red-50 border-red-200"
            }`}
          >
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 ${
                probability === "alta"
                  ? "bg-emerald-100 text-emerald-700"
                  : probability === "media"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-red-100 text-red-700"
              }`}
            >
              Probabilidad{" "}
              {probability === "alta"
                ? "Alta (85-100%)"
                : probability === "media"
                  ? "Media (50-84%)"
                  : "Baja (0-49%)"}
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-blue mb-3">
              {probability === "alta"
                ? `¡Excelente! Tu marca "${expressData.nombreMarca}" tiene alta viabilidad de registro.`
                : probability === "media"
                  ? `Tu marca "${expressData.nombreMarca}" tiene conflictos menores que podrían resolverse.`
                  : `Tu marca "${expressData.nombreMarca}" tiene alta probabilidad de rechazo.`}
            </h2>

            <div className="mt-6 text-sm text-dark-blue/60 space-y-1">
              {probability === "alta" && (
                <>
                  <p>Sin conflictos graves</p>
                  <p>Nombre único y distintivo</p>
                </>
              )}
              {probability === "media" && (
                <>
                  <p>Marcas similares en clase detectadas</p>
                  <p>Similitud fonética menor</p>
                  <p className="text-dark-blue/80 font-medium mt-3">
                    Recomendación: elemento gráfico distintivo, modificar clase
                    o variar el nombre.
                  </p>
                </>
              )}
              {probability === "baja" && (
                <>
                  <p>Marcas muy similares registradas en la misma clase</p>
                  <p>Alta similitud fonética</p>
                  <p className="text-dark-blue/80 font-medium mt-3">
                    Recomendación: cambiar nombre.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Decision: paths */}
          <div className="mb-6">
            <h3 className="font-display text-xl font-bold text-dark-blue mb-2 text-center">
              ¿Cómo quieres continuar?
            </h3>
            <p className="text-sm text-dark-blue/40 text-center mb-8">
              Elige el camino que mejor se adapte a tu situación.
            </p>
          </div>

          <div className="grid gap-4">
            {/* Registro Directo */}
            <button
              onClick={() => handleChoosePath("registro")}
              className="w-full bg-white border border-gray-light rounded-2xl p-6 text-left hover:border-bright-blue transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-display text-lg font-bold text-dark-blue mb-1 group-hover:text-bright-blue transition-colors">
                    Registro Directo
                  </h4>
                  <p className="text-sm text-dark-blue/50">
                    Ya tengo mi nombre. Quiero registrarlo ante Indecopi.
                  </p>
                </div>
                <span className="font-mono text-sm text-dark-blue/40 flex-shrink-0 ml-4">
                  PEN 199
                </span>
              </div>
            </button>

            {/* Nuevo Naming */}
            <button
              onClick={() => handleChoosePath("naming")}
              className="w-full bg-dark-blue border-2 border-bright-blue rounded-2xl p-6 text-left hover:shadow-lg transition-all group relative"
            >
              <div className="absolute -top-2.5 right-6 bg-bright-blue text-dark-blue px-3 py-0.5 text-[10px] font-bold rounded-full uppercase tracking-wider">
                Recomendado
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-display text-lg font-bold text-white mb-1">
                    Nuevo Naming + Registro
                  </h4>
                  <p className="text-sm text-white/50">
                    Quiero que Brandia cree nombres estratégicos y gestione el
                    registro completo.
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4 text-right">
                  <span className="font-mono text-sm text-bright-blue">PEN 349</span>
                  <span className="block font-mono text-xs text-white/25 line-through">
                    PEN 499
                  </span>
                </div>
              </div>
            </button>

            {/* Branding Especializado */}
            <button
              onClick={() => handleChoosePath("branding")}
              className="w-full bg-white border border-gray-light rounded-2xl p-6 text-left hover:border-bright-blue transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-display text-lg font-bold text-dark-blue mb-1 group-hover:text-bright-blue transition-colors">
                    Branding Especializado
                  </h4>
                  <p className="text-sm text-dark-blue/50">
                    Necesito identidad visual, manual de marca y estrategia
                    completa.
                  </p>
                </div>
                <span className="font-mono text-sm text-dark-blue/40 flex-shrink-0 ml-4">
                  A medida
                </span>
              </div>
            </button>
          </div>

          {/* Option to not proceed */}
          <div className="text-center mt-8">
            <Link href="/" className="text-sm text-dark-blue/30 hover:text-dark-blue/50 transition-colors">
              No quiero continuar por ahora
            </Link>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════ */}
      {/* STEP: REGISTER FORM                            */}
      {/* ════════════════════════════════════════════════ */}
      {flowStep === "register-form" && (
        <div className="max-w-2xl mx-auto px-6 py-12">
          <button
            onClick={() => setFlowStep("result")}
            className="text-sm text-dark-blue/40 hover:text-dark-blue mb-6 inline-flex items-center gap-1 transition-colors"
          >
            ← Volver
          </button>

          <div className="mb-8">
            <p className="font-mono text-[10px] text-bright-blue uppercase tracking-[0.3em] mb-2">
              Registro Directo · PEN 199 + tasa Indecopi
            </p>
            <h1 className="font-display text-3xl font-bold text-dark-blue mb-2">
              Datos para el registro
            </h1>
            <p className="text-dark-blue/50">
              Nombre a registrar:{" "}
              <span className="font-bold text-dark-blue">
                {expressData.nombreMarca}
              </span>
            </p>
          </div>

          <form
            onSubmit={handleRegisterSubmit}
            className="bg-white rounded-2xl p-8 border border-gray-light space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className={labelClass}>Nombre o Razón Social *</label>
                <input
                  type="text"
                  required
                  value={registerData.razonSocial}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      razonSocial: e.target.value,
                    })
                  }
                  className={inputClass}
                  placeholder="Nombre completo o razón social"
                />
              </div>

              <div>
                <label className={labelClass}>Tipo de Persona *</label>
                <select
                  required
                  value={registerData.tipoPersona}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      tipoPersona: e.target.value,
                    })
                  }
                  className={inputClass}
                >
                  <option value="">Seleccionar...</option>
                  <option value="natural">Persona Natural</option>
                  <option value="juridica">Persona Jurídica</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>RUC o DNI *</label>
                <input
                  type="text"
                  required
                  value={registerData.rucDni}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      rucDni: e.target.value,
                    })
                  }
                  className={inputClass}
                  placeholder="Documento de identidad"
                />
              </div>

              <div>
                <label className={labelClass}>Correo *</label>
                <input
                  type="email"
                  required
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      email: e.target.value,
                    })
                  }
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Teléfono/WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={registerData.telefono}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      telefono: e.target.value,
                    })
                  }
                  className={inputClass}
                  placeholder="9XXXXXXXX"
                />
              </div>

              <div className="md:col-span-2">
                <label className={labelClass}>Dirección *</label>
                <input
                  type="text"
                  required
                  value={registerData.direccion}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      direccion: e.target.value,
                    })
                  }
                  className={inputClass}
                  placeholder="Dirección completa"
                />
              </div>

              <div>
                <label className={labelClass}>¿Tienes logotipo?</label>
                <div className="flex gap-3">
                  {["Sí", "No"].map((opt) => (
                    <label
                      key={opt}
                      className={`flex-1 flex items-center justify-center px-4 py-3 border rounded-xl cursor-pointer transition-all text-sm font-medium ${
                        registerData.tieneLogo === opt.toLowerCase()
                          ? "border-bright-blue bg-bright-blue/10 text-dark-blue"
                          : "border-gray-light text-dark-blue/50 hover:border-bright-blue"
                      }`}
                    >
                      <input
                        type="radio"
                        name="tieneLogo"
                        value={opt.toLowerCase()}
                        checked={registerData.tieneLogo === opt.toLowerCase()}
                        onChange={(e) =>
                          setRegisterData({
                            ...registerData,
                            tieneLogo: e.target.value,
                          })
                        }
                        className="sr-only"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass}>Describe tu producto/servicio *</label>
                <input
                  type="text"
                  required
                  value={registerData.descripcionProducto}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      descripcionProducto: e.target.value,
                    })
                  }
                  className={inputClass}
                  placeholder="Para clasificación Niza"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-dark-blue text-white py-4 rounded-full font-bold hover:bg-bright-blue hover:text-dark-blue transition-all"
            >
              Continuar al pago
            </button>
          </form>
        </div>
      )}

      {/* ════════════════════════════════════════════════ */}
      {/* STEP: NAMING FORM                              */}
      {/* ════════════════════════════════════════════════ */}
      {flowStep === "naming-form" && (
        <div className="max-w-2xl mx-auto px-6 py-12">
          <button
            onClick={() => setFlowStep("result")}
            className="text-sm text-dark-blue/40 hover:text-dark-blue mb-6 inline-flex items-center gap-1 transition-colors"
          >
            ← Volver
          </button>

          <div className="mb-8">
            <p className="font-mono text-[10px] text-bright-blue uppercase tracking-[0.3em] mb-2">
              Nuevo Naming + Registro · PEN 349
            </p>
            <h1 className="font-display text-3xl font-bold text-dark-blue mb-2">
              Brief de Naming
            </h1>
            <p className="text-dark-blue/50">
              Cuéntanos sobre tu negocio para crear nombres estratégicos.
            </p>
          </div>

          <form
            onSubmit={handleNamingSubmit}
            className="space-y-6"
          >
            {/* Datos personales */}
            <div className="bg-white rounded-2xl p-8 border border-gray-light">
              <h3 className="font-display text-lg font-bold text-dark-blue mb-5">
                1. Datos personales
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className={labelClass}>Nombre o Razón Social *</label>
                  <input
                    type="text"
                    required
                    value={namingData.razonSocial}
                    onChange={(e) =>
                      setNamingData({
                        ...namingData,
                        razonSocial: e.target.value,
                      })
                    }
                    className={inputClass}
                    placeholder="Nombre completo o razón social"
                  />
                </div>
                <div>
                  <label className={labelClass}>Tipo de Persona *</label>
                  <select
                    required
                    value={namingData.tipoPersona}
                    onChange={(e) =>
                      setNamingData({
                        ...namingData,
                        tipoPersona: e.target.value,
                      })
                    }
                    className={inputClass}
                  >
                    <option value="">Seleccionar...</option>
                    <option value="natural">Persona Natural</option>
                    <option value="juridica">Persona Jurídica</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>RUC o DNI *</label>
                  <input
                    type="text"
                    required
                    value={namingData.rucDni}
                    onChange={(e) =>
                      setNamingData({
                        ...namingData,
                        rucDni: e.target.value,
                      })
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Correo *</label>
                  <input
                    type="email"
                    required
                    value={namingData.email}
                    onChange={(e) =>
                      setNamingData({
                        ...namingData,
                        email: e.target.value,
                      })
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Teléfono/WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={namingData.telefono}
                    onChange={(e) =>
                      setNamingData({
                        ...namingData,
                        telefono: e.target.value,
                      })
                    }
                    className={inputClass}
                    placeholder="9XXXXXXXX"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass}>Dirección *</label>
                  <input
                    type="text"
                    required
                    value={namingData.direccion}
                    onChange={(e) =>
                      setNamingData({
                        ...namingData,
                        direccion: e.target.value,
                      })
                    }
                    className={inputClass}
                    placeholder="Dirección completa"
                  />
                </div>
              </div>
            </div>

            {/* Brief de Naming */}
            <div className="bg-white rounded-2xl p-8 border border-gray-light">
              <h3 className="font-display text-lg font-bold text-dark-blue mb-5">
                2. Naming
              </h3>
              <div className="space-y-5">
                <div>
                  <label className={labelClass}>
                    ¿En qué consiste tu negocio/producto/servicio? *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={namingData.descripcionNegocio}
                    onChange={(e) =>
                      setNamingData({
                        ...namingData,
                        descripcionNegocio: e.target.value,
                      })
                    }
                    className={`${inputClass} resize-none`}
                    placeholder="Describe brevemente tu oferta..."
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Categoría de negocio *
                  </label>
                  <select
                    required
                    value={namingData.categoriaNegocio}
                    onChange={(e) =>
                      setNamingData({
                        ...namingData,
                        categoriaNegocio: e.target.value,
                      })
                    }
                    className={inputClass}
                  >
                    <option value="">Seleccionar...</option>
                    {CATEGORIAS.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Público objetivo *</label>
                  <textarea
                    required
                    rows={2}
                    value={namingData.publicoObjetivo}
                    onChange={(e) =>
                      setNamingData({
                        ...namingData,
                        publicoObjetivo: e.target.value,
                      })
                    }
                    className={`${inputClass} resize-none`}
                    placeholder="¿A quién te diriges? Edad, ubicación, intereses..."
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Propuesta de valor: ¿Qué hace único tu producto/servicio? *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={namingData.propuestaValor}
                    onChange={(e) =>
                      setNamingData({
                        ...namingData,
                        propuestaValor: e.target.value,
                      })
                    }
                    className={`${inputClass} resize-none`}
                    placeholder="Tu diferencial principal..."
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Personalidad de marca deseada
                  </label>
                  <input
                    type="text"
                    value={namingData.personalidadMarca}
                    onChange={(e) =>
                      setNamingData({
                        ...namingData,
                        personalidadMarca: e.target.value,
                      })
                    }
                    className={inputClass}
                    placeholder="Ej: Moderna, confiable, audaz, cercana..."
                  />
                </div>

                <div>
                  <label className={labelClass}>Marcas referentes</label>
                  <input
                    type="text"
                    value={namingData.marcasReferentes}
                    onChange={(e) =>
                      setNamingData({
                        ...namingData,
                        marcasReferentes: e.target.value,
                      })
                    }
                    className={inputClass}
                    placeholder="Marcas que admiras o te inspiran (opcional)"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-dark-blue text-white py-4 rounded-full font-bold hover:bg-bright-blue hover:text-dark-blue transition-all"
            >
              Continuar al pago
            </button>
          </form>
        </div>
      )}

      {/* ════════════════════════════════════════════════ */}
      {/* STEP: BRANDING CONTACT                         */}
      {/* ════════════════════════════════════════════════ */}
      {flowStep === "branding-contact" && (
        <div className="max-w-xl mx-auto px-6 py-20 text-center">
          <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-bright-blue/10 flex items-center justify-center">
            <span className="text-2xl">🚀</span>
          </div>

          <h2 className="font-display text-3xl font-bold text-dark-blue mb-4">
            Nos pondremos en contacto contigo
          </h2>
          <p className="text-dark-blue/50 mb-8 max-w-md mx-auto">
            Te enviaremos un correo a{" "}
            <span className="font-bold text-dark-blue">{expressData.email}</span> para
            coordinar una reunión de 15-20 minutos donde entenderemos tu
            proyecto y te explicaremos el proceso de identidad de marca.
          </p>

          <div className="bg-white rounded-2xl p-6 border border-gray-light mb-8 text-left max-w-sm mx-auto">
            <h3 className="font-bold text-dark-blue mb-3 text-sm">
              ¿Qué incluye Branding 360°?
            </h3>
            <ul className="space-y-2 text-sm text-dark-blue/60">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-bright-blue rounded-full" />
                Naming estratégico
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-bright-blue rounded-full" />
                Identidad visual completa
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-bright-blue rounded-full" />
                Manual de marca
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-bright-blue rounded-full" />
                Estrategia de posicionamiento
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-bright-blue rounded-full" />
                Registro ante Indecopi
              </li>
            </ul>
          </div>

          <Link
            href="/"
            className="inline-block bg-dark-blue text-white px-8 py-3 rounded-full font-medium hover:bg-bright-blue hover:text-dark-blue transition-all"
          >
            Volver al inicio
          </Link>
        </div>
      )}

      {/* ════════════════════════════════════════════════ */}
      {/* STEP: PAYMENT                                  */}
      {/* ════════════════════════════════════════════════ */}
      {flowStep === "payment" && (
        <div className="max-w-xl mx-auto px-6 py-12">
          <button
            onClick={() =>
              setFlowStep(
                selectedPath === "registro" ? "register-form" : "naming-form"
              )
            }
            className="text-sm text-dark-blue/40 hover:text-dark-blue mb-6 inline-flex items-center gap-1 transition-colors"
          >
            ← Volver
          </button>

          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold text-dark-blue mb-2">
              Resumen y Pago
            </h1>
          </div>

          {/* Order summary */}
          <div className="bg-white rounded-2xl p-6 border border-gray-light mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-dark-blue">
                  {selectedPath === "registro"
                    ? "Registro Directo"
                    : "Nuevo Naming + Registro"}
                </h3>
                <p className="text-xs text-dark-blue/40 mt-1">
                  Marca: {expressData.nombreMarca || "Por definir (naming)"}
                </p>
              </div>
              <span className="font-display text-2xl font-bold text-dark-blue">
                {selectedPath === "registro" ? "PEN 199" : "PEN 349"}
              </span>
            </div>
            {selectedPath === "registro" && (
              <p className="text-xs text-dark-blue/40">+ Tasa Indecopi (aparte)</p>
            )}
          </div>

          {/* Payment method */}
          <div className="bg-white rounded-2xl p-6 border-2 border-bright-blue mb-6">
            <h3 className="font-bold text-dark-blue mb-4">Método de Pago</h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { value: "tarjeta", label: "Tarjeta (Niubiz/Culqi)" },
                { value: "yape", label: "Yape / Plin" },
              ].map((m) => (
                <label
                  key={m.value}
                  className={`border rounded-xl p-4 text-center cursor-pointer transition-all text-sm font-medium ${
                    metodoPago === m.value
                      ? "border-bright-blue bg-bright-blue/10 text-dark-blue"
                      : "border-gray-light text-dark-blue/50 hover:border-bright-blue"
                  }`}
                >
                  <input
                    type="radio"
                    name="metodoPago"
                    value={m.value}
                    checked={metodoPago === m.value}
                    onChange={(e) => setMetodoPago(e.target.value)}
                    className="sr-only"
                  />
                  {m.label}
                </label>
              ))}
            </div>

            <button
              onClick={handlePayment}
              className="w-full bg-bright-blue text-dark-blue py-4 rounded-full font-bold text-base hover:bg-bright-blue/80 transition-all"
            >
              Pagar{" "}
              {selectedPath === "registro" ? "PEN 199" : "PEN 349"}
            </button>

            <p className="text-xs text-dark-blue/30 text-center mt-3">
              Pago 100% seguro y encriptado
            </p>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════ */}
      {/* STEP: CONFIRMATION                             */}
      {/* ════════════════════════════════════════════════ */}
      {flowStep === "confirmation" && (
        <div className="max-w-xl mx-auto px-6 py-16 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-bright-blue flex items-center justify-center">
            <svg
              className="w-10 h-10 text-dark-blue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-dark-blue mb-3">
            ¡Pago Exitoso!
          </h1>
          <p className="text-dark-blue/50 mb-10">
            Recibirás un correo de confirmación en{" "}
            <span className="font-bold text-dark-blue">{expressData.email || registerData.email || namingData.email}</span>
          </p>

          {selectedPath === "naming" && (
            <div className="bg-white rounded-2xl p-6 border border-gray-light mb-8 text-left">
              <h3 className="font-bold text-dark-blue mb-4">¿Qué sigue?</h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Creación de nombres",
                    desc: "Nuestro equipo + IA generarán opciones de nombre con análisis fonético y de clase Niza.",
                  },
                  {
                    step: "2",
                    title: "Recibes propuestas (24-48h)",
                    desc: "Te enviaremos opciones organizadas por categoría: descriptivos, semidescriptivos, asociativos y abstractos.",
                  },
                  {
                    step: "3",
                    title: "Eliges y confirmamos",
                    desc: "Selecciona tu nombre favorito. Si no te convence ninguno, tienes una ronda adicional.",
                  },
                  {
                    step: "4",
                    title: "Registro ante Indecopi",
                    desc: "Gestionamos todo el proceso hasta que la marca sea legalmente tuya.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-7 h-7 bg-bright-blue/10 text-bright-blue rounded-full flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-dark-blue">
                        {item.title}
                      </p>
                      <p className="text-xs text-dark-blue/45">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedPath === "registro" && (
            <div className="bg-white rounded-2xl p-6 border border-gray-light mb-8 text-left">
              <h3 className="font-bold text-dark-blue mb-4">¿Qué sigue?</h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Confirmación de datos",
                    desc: "Revisamos tu información y preparamos la solicitud.",
                  },
                  {
                    step: "2",
                    title: "Registro ante Indecopi",
                    desc: "Presentamos tu marca oficialmente.",
                  },
                  {
                    step: "3",
                    title: "Seguimiento",
                    desc: "Te mantenemos informado en cada etapa del proceso.",
                  },
                  {
                    step: "4",
                    title: "Certificado",
                    desc: "Recibes tu certificado oficial de registro.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-7 h-7 bg-bright-blue/10 text-bright-blue rounded-full flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-dark-blue">
                        {item.title}
                      </p>
                      <p className="text-xs text-dark-blue/45">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Link
            href="/"
            className="inline-block bg-dark-blue text-white px-8 py-3 rounded-full font-medium hover:bg-bright-blue hover:text-dark-blue transition-all"
          >
            Volver al inicio
          </Link>
        </div>
      )}
    </div>
  );
}
