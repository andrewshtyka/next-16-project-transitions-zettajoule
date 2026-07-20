"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components

// constants

// hooks

// providers / context

// styles
import css from "./PagesWrapper.module.css";

// utility
import React from "react";
import { useTransitionState } from "next-transition-router";

// #endregion ===========================

export default function PagesWrapper({ children }) {
	const { stage, isReady } = useTransitionState();
	const ref = React.useRef(null);

	// block scroll during transition
	React.useLayoutEffect(() => {
		if (!ref.current || !window || !document) return;

		let appliedOverflow;
		let appliedWidth;

		if (stage === "none" && isReady) {
			appliedOverflow = "visible";
			appliedWidth = "100%";
		} else {
			appliedOverflow = "hidden";
			appliedWidth = `${window.innerWidth - 15}px`;
		}

		document.body.style.overflow = appliedOverflow;
		ref.current.style.width = appliedWidth;
	}, [isReady, stage]);

	return (
		<div ref={ref} className={css.container}>
			{children}
		</div>
	);
}
