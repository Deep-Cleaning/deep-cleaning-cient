import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import Image from "next/image";
import { images } from "../../lib/images"

export default function LandingPresentation() {
	return (
		<React.Fragment>
			<h1 className="
        w-full text-center text-4xl font-bold text-[#3b4d57] mb-4
        lg:w-3/4 lg:text-5xl
        ">
				La libertad de un hogar impecable
			</h1>
			<p className="
        w-full text-xs text-center	 text-[#3b4d57] mb-3
        lg:w-2/3 lg:text-base
        ">
				Transformamos tu hogar en un espacio relajante, 
				permitiéndote disfrutar de la verdadera comodidad 
				sin preocuparte por las tareas de limpieza. 
				Descubre la libertad de un hogar impecable y la alegría de vivir sin preocupaciones.
			</p>
      <Image
        className="w-[450px] mb-5" 
        src={images.imagePrincipal} 
        alt="Figure principal"/>
        <article className=" w-3/4 flex justify-evenly mb-4">
          <ButtonPrimary
            children='! Reserva Ahora !'
          >
          </ButtonPrimary>
      </article>
		</React.Fragment>
	)
}