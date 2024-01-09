import React from "react";
import CardPackages from "./CardPackages";

export default function LandinPackages() {
	return (
		<React.Fragment>
			<h2 className="
					w-full text-center text-3xl font-bold text-[#1e282d] mb-4 mt-8
					lg:text-3xl
					">Define tu estilo de limpieza
			</h2>
      <p className="
        w-full text-base text-center	font-semibold text-[#1e282d] mb-10
        lg:w-2/3 lg:text-xl
        ">
				Explora nuestras opciones de limpieza premium para un hogar impecable y reluciente.
      </p>
			<article className="grid gap-4 lg:flex lg:justify-around lg: w-3/4 ">
				<CardPackages
					tittle="Limpieza basica"
					price="$899"
				></CardPackages>
				<CardPackages 
					tittle="Limpieza profunda"
					price="$1,499">	
				</CardPackages>
				<CardPackages
					tittle="Limpieza mudanza"
					price="$2,199"></CardPackages>
			</article>
		</React.Fragment>

	)
}