"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// data
import { dataNav } from "@/data/dataNav";
import Link from "next/link";

// components

// constants

// hooks

// providers / context

// styles
import css from "./Nav.module.css";

// utility
import React from "react";
import { usePathname } from "next/navigation";
import { useTransitionState } from "next-transition-router";

// #endregion ===========================

export default function Nav() {
	const pathname = usePathname();
	const { isReady } = useTransitionState();
	const pointerEvents = isReady ? "initial" : "none";

	return (
		<header className={css.header}>
			<nav>
				<ul className={css.list}>
					{dataNav.map(({ id, title, href }) => {
						const activeClass =
							href === pathname ? `${css.is_active}` : " ";

						return (
							<li key={id}>
								<Link
									href={href}
									className={`f_body_1 ${activeClass}`}
									style={{ pointerEvents }}
								>
									{title}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}
