"use client";

import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { Reveal } from "../Reveal";
import { Slide } from "./Slide";

export function Testimonials() {
  return (
    <div className="relative p-4 py-10 md:py-40" id="testimonios">
      <BackgroundRadialRight />
      <div className="grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2">
        <Reveal>
          <h2 className="text-5xl mb-5 font-semibold">
            <span className="block degradedBlue bg-blueLight">
              Conoce Nuestro
            </span>
            Equipo
          </h2>
        </Reveal>
        <Reveal>
          <div className="self-center">
            <p className="text-primaryDark">
              En Tech Next Solutions, estamos orgullosos de contar con un equipo
              multidisciplinario de profesionales altamente capacitados y
              apasionados por la tecnología. Creemos que el éxito de nuestros
              clientes depende en gran medida del talento y la experiencia de
              nuestro equipo.
            </p>
          </div>
        </Reveal>
      </div>

      <Slide />
    </div>
  );
}
