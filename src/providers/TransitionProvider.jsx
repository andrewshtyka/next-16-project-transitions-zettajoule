"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components

// constants

// data

// hooks
import usePageTransition from "@/hooks/usePageTransition";

// providers / context

// styles
// import css from '.'

// utility
import React from "react";
import { TransitionRouter } from "next-transition-router";

// #endregion ===========================

export default function TransitionProvider({ children }) {
	const ref = React.useRef(null);
	const { animateIn, animateOut } = usePageTransition(ref);
	const currentTlRef = React.useRef(null);

	// animation for browser buttons
	React.useEffect(() => {
		function handlePopState() {
			currentTlRef.current?.kill();
			currentTlRef.current = animateOut();
		}

		window.addEventListener("popstate", handlePopState);
		return () => window.removeEventListener("popstate", handlePopState);
	}, [animateOut]);

	return (
		<TransitionRouter
			auto
			leave={(next) => {
				const tl = animateIn(next);
				return () => tl.kill();
			}}
			enter={(next) => {
				const tl = animateOut(next);
				return () => tl.kill();
			}}
		>
			<div ref={ref} className="transition_grid" />
			{children}
		</TransitionRouter>
	);
}
