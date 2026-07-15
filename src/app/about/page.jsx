"use client";

// #region ============================== Imports

// animation
// import { motion } from "motion/react";

// assets

// components
import Image from "next/image";

// constants

// data
import { imagesAbout } from "@/data/imagesAbout";

// hooks

// providers / context

// styles
// import css from '.'

// utility
import React from "react";
import { shuffle } from "lodash";

// #endregion ===========================

export default function AboutPage() {
	const [images, setImages] = React.useState(imagesAbout);

	React.useEffect(() => {
		function handler() {
			setImages(shuffle(imagesAbout));
		}
		handler();
	}, []);

	return (
		<section>
			<h1 className="f_h1">About</h1>

			<ul className="container_images">
				{images.map(({ id, src, alt }, i) => {
					const loading = i === 0 ? "eager" : "lazy";

					return (
						<li key={id}>
							<Image
								src={src}
								alt={alt}
								className="img"
								loading={loading}
							/>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
