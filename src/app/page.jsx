"use client";

// #region ============================== Imports

// animation
// import { motion } from "motion/react";

// assets

// components
import Image from "next/image";

// constants

// data
import { imagesHome } from "@/data/imagesHome";

// hooks

// providers / context

// styles
// import css from '.'

// utility
import React from "react";
import { shuffle } from "lodash";
import { useTransitionState } from "next-transition-router";

// #endregion ===========================

export default function HomePage() {
	// const { stage, isReady } = useTransitionState();
	// console.log("stage:", stage); // none, leaving, entering
	// console.log("isReady:", isReady); // false, true

	const [images, setImages] = React.useState(imagesHome);

	React.useEffect(() => {
		function handler() {
			setImages(shuffle(imagesHome));
		}
		handler();
	}, []);

	return (
		<section>
			<h1 className="f_h1">Home page</h1>

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
