"use client";

import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { EffectCards } from "swiper/modules";
import { dataCards } from "./ChooseYourCards.data";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export function ChooseYourCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative px-6 py-2 md:py-10" id="tarjetas">
      <BackgroundRadialRight />
      <div className="block max-w-5xl mx-auto md:grid md:grid-cols-2">
        <Reveal>
          <h2 className="text-5xl font-semibold">
            Selecciona el servicio que
            <span className="block degradedBlue bg-blueLight">
              se adapte a tus necesidades
            </span>
          </h2>
          <div className="my-8">
              <Link
                href="#clients"
                className="px-4 py-3 border border-transparent rounded bg-blueRadial hover:bg-none hover:border-secondary"
              >
                Contáctanos
              </Link>
            </div>
        </Reveal>
        <div className="px-5">
          <MotionTransition>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {dataCards.map(({ image, id, title, description }, index) => (
                <SwiperSlide key={id}>
                  <div className="flex flex-col items-center text-center">
                    <Image src={image} alt={title} width="400" height="300" />
                    {activeIndex === index && (
                      <>
                        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                        <p className="mt-2 text-base">{description}</p>
                      </>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </MotionTransition>
        </div>
      </div>
    </div>
  );
}
