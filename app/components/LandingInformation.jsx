import React from "react";
import Image from "next/image";
import { images } from "../lib/images";
import ButtonPrimary from "./ButtonPrimary";

export default function LandingInformation() {
	return (
		<section className="w-3/4 mt-28 inline-flex justify-evenly">
      <Image
        className="w-[600px]"
        src={images.imageHomeBlue}
        alt="Figura casa azul informativa" />
			<article>
				<h3 className="w-[537px] text-4xl text-[#1e282d] font-bold">
						Descubre opciones asequibles para cada necesidad.
				</h3>
				<p  className="text-base text-[#1e282d] font-semibold mt-8 ">
					Regresa a un hogar impecable y fresco. 
					Nuestros servicios de limpieza te ofrecen tiempo para crear recuerdos, 
					transformando tu espacio en un oasis de relajación. 
				</p>
				<ButtonPrimary
					style='w-52 h-12 text-base mt-8'
					children='Contactanos'>
				</ButtonPrimary>

			</article>

		</section>
	)
}