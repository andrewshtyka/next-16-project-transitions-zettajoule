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
	React.useEffect(() => {
		if (!ref.current || !window || !document) return;

		let appliedOverflow;

		if (stage === "none" && isReady) {
			appliedOverflow = "visible";
		} else {
			appliedOverflow = "hidden";
		}

		document.body.style.overflow = appliedOverflow;
	}, [isReady, stage]);

	return (
		<div ref={ref} className={css.container}>
			{children}
		</div>
	);
}
