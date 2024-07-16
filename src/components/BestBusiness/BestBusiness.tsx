"use client";

import Link from "next/link";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { Reveal } from "../Reveal";
import { dataFeaturesBusiness } from "./BestBusiness.data";
import Image from "next/image";
import { BackgroundRadialRight } from "../BackgroundRadialRight";

export function BestBusiness() {
  return (
    <div className="relative px-6 py-10 md:py-40" id="features">
      <BackgroundRadialLeft />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-5xl font-semibold">
              <span className="block degradedBlue bg-blueLight">
                Optimiza tu Gestión Empresarial
              </span>
              Soluciones CRM y ERP <br />
              de Vanguardia
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              En Tech Next Solutions, ofrecemos soluciones integrales de CRM y
              ERP que transforman la manera en que gestionas tu negocio.
              Nuestras plataformas están diseñadas para mejorar la eficiencia
              operativa, optimizar la gestión de recursos y fortalecer las
              relaciones con tus clientes.{" "}
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
            </div>
          </Reveal>
        </div>

        <div className="grid items-center py-5 md:p-8">
          {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
            <Reveal key={id}>
              <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack">
                <Image
                  src={`/assets/${icon}.png`}
                  alt={title}
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className="text-primary">{title}</h4>
                  <p className="text-primaryDark">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
