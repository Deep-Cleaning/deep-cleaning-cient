import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import CardPackages from "./CardPackages";
import Image from "next/image";
import { images } from "../lib/images"

export default function LandingPresentation() {
  return (
    <React.Fragment>
      <h1 className="
        w-full text-center text-4xl font-bold text-[#1e282d] mb-7 mt-11
        lg:w-3/4 lg:text-6xl
        ">
        La libertad de un hogar impecable
      </h1>
      <p className="
        w-full text-base text-center	font-semibold text-[#1e282d] mb-4
        lg:w-2/3 lg:text-xl
        ">
        Transformamos tu hogar en un espacio relajante,
        permitiéndote disfrutar de la verdadera comodidad
        sin preocuparte por las tareas de limpieza.
        Descubre la libertad de un hogar impecable y la alegría de vivir sin preocupaciones.
      </p>
      <Image
        className="w-[750px] mb-10"
        src={images.imagePrincipal}
        alt="Figure principal" />
      <article className=" w-3/4 flex justify-evenly mb-8">
        <ButtonPrimary
          style='w-52 h-12 text-base'
          children='! Reserva Ahora !'
        >
        </ButtonPrimary>
      </article>
    </React.Fragment>
  )
}