"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'
import gsap from "gsap";

// assets

// components

// constants

// data

// hooks

// providers / context

// styles
// import css from '.'

// utility
import React from "react";
import { range } from "lodash";

// #endregion ===========================

const ROWS = 4;
const COLS = 16;
const DURATION_IN_SEC = 0.4;
const DURATION_OUT_SEC = 0.8;
const STAGGER_IN_SEC = 0.03;
const STAGGER_OUT_SEC = 0.03;

export default function usePageTransition(transitionGridRef) {
	const blocksArrayRef = React.useRef([]);

	function createTransitionGrid() {
		if (!transitionGridRef.current) return;

		const container = transitionGridRef.current;
		container.innerHTML = "";
		blocksArrayRef.current = [];

		const blockWidth = window.innerWidth / COLS;
		const blockHeight = window.innerHeight / ROWS;

		for (let row = 0; row < ROWS; row++) {
			for (let col = 0; col < COLS; col++) {
				const block = document.createElement("div");
				block.className = "transition_block";
				block.style.cssText = `
                    width: ${blockWidth + 1}px;
                    height: ${blockHeight + 1}px;
                    left: ${col * blockWidth}px;
                    top: ${row * blockHeight}px;
                    transform-origin: ${row % 2 === 0 ? "left" : "right"} center;
                `;
				container.appendChild(block);
				blocksArrayRef.current.push(block);
			}
		}

		gsap.set(blocksArrayRef.current, { scaleX: 0 });
	}

	React.useEffect(() => {
		createTransitionGrid();

		window.addEventListener("resize", createTransitionGrid);
		return () => window.removeEventListener("resize", createTransitionGrid);
	}, []);

	function getRowBlocks(row) {
		return blocksArrayRef.current.slice(row * COLS, row * COLS + COLS);
	}

	function animateIn(callback) {
		const tl = gsap.timeline({ onComplete: callback });

		range(ROWS).forEach((row) => {
			const blocks = getRowBlocks(row);

			tl.to(
				blocks,
				{
					scaleX: 1,
					duration: DURATION_IN_SEC,
					ease: "power3.inOut",
					stagger: {
						each: STAGGER_IN_SEC,
						from: row % 2 === 0 ? "start" : "end",
					},
				},
				"<"
			);
		});

		return tl;
	}

	function animateOut(callback = "") {
		const tl = gsap.timeline({ onComplete: callback });

		range(ROWS).forEach((row) => {
			const blocks = getRowBlocks(row);

			tl.fromTo(
				blocks,
				{ scaleX: 1 },
				{
					scaleX: 0,
					duration: DURATION_OUT_SEC,
					ease: "power3.inOut",
					stagger: {
						each: STAGGER_OUT_SEC,
						from: row % 2 === 0 ? "start" : "end",
					},
				},
				"<"
			);
		});

		return tl;
	}

	return { animateIn, animateOut };
}
