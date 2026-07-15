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

const SCROLLBAR_WIDTH_PX = 15;

export default function PagesWrapper({ children }) {
	const { stage, isReady } = useTransitionState();
	const ref = React.useRef(null);

  // 1. block scroll during transition
  // 2. preserve space (avoid content movement)
	React.useEffect(() => {
		if (!ref.current || !window || !document) return;

		let appliedOverflow;
		let appliedWidth;
		if (stage === "none" && isReady) {
			appliedOverflow = "visible";
			appliedWidth = "100%";
			document.documentElement.classList.remove("custom_scroll");
		} else {
			appliedOverflow = "hidden";
			appliedWidth = `${window.innerWidth - SCROLLBAR_WIDTH_PX}px`;
			document.documentElement.classList.add("custom_scroll");
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
