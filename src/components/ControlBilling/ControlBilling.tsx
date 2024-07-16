"use client";

import Image from "next/image";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { dataFeaturesBilling } from "./ControlBilling.data";

export function ControlBilling() {
  return (
    <div className="p-4 py-10 md:py-40">
      <div className="relative " id="features">
        <BackgroundRadialLeft />
        <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
          <MotionTransition className="flex-1 px-0 py-0 md:p-2">
            <Image
              src="/assets/hero.png"
              alt="Control Business"
              width="350"
              height={400}
              className="w-full h-auto px-10 py-10"
            />
          </MotionTransition>
          <div className="flex-1 p-2 md:p-2">
            <Reveal>
              <h2 className="text-5xl font-semibold">
                <span className="block degradedBlue bg-blueLight">
                  ¿Cómo te Beneficia Nuestras
                </span>
                Soluciones
              </h2>
            </Reveal>

            <div className="grid items-center  py-5 md:p-6">
              {dataFeaturesBilling.map(({ id, icon, title }) => (
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
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
