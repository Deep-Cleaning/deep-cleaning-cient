import React from "react";
import Image from "next/image";
import { images } from "@/app/lib/images";
import ButtonPrimary from "./ButtonPrimary";

const CardPackages = ( { tittle, description, price, image }) => {
	return (
		<section className="h-[434px] w-[350px] border-solid border-red-700 bg-[#E7F4FA] rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
			<Image
        className="w-[350px] mb-5 rounded-t-3xl" 
        src={images.imageCardTopPackages01} 
        alt="Image top card 01"/>
			<p className="px-5 mb-2 text-xl text-[#424FC0] font-bold">{tittle}</p>
			<div className="px-5 mb-3 text-base text-[#3b4d57] text-justify">Una limpieza profunda y detallada que transformará tu hogar de arriba abajo. Perfecta para una renovación total.</div>
			<div className="flex justify-between px-5 pt-4 font-semibold text-3xl text-[#1e282d]">
				<div>{price}</div>
				<ButtonPrimary
					style='w-[138px] text-base'
					children='Reservar'
				>
				</ButtonPrimary>
			</div>
		</section>
	)
}

export default CardPackages