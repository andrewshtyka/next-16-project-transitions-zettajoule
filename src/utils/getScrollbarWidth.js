let cachedScrollbarWidth = null;

/**
 * Measure scrollbar width.
 * On mob and macbooks with overlay scrollbars returns 0.
 * Result is cached (measured once).
 */
export function getScrollbarWidth() {
	if (cachedScrollbarWidth !== null) return cachedScrollbarWidth;

	if (typeof document === "undefined") return 0;

	const outer = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.overflow = "scroll";
	outer.style.position = "absolute";
	outer.style.top = "-9999px";
	outer.style.width = "100px";
	document.body.appendChild(outer);

	const inner = document.createElement("div");
	inner.style.width = "100%";
	outer.appendChild(inner);

	cachedScrollbarWidth = outer.offsetWidth - inner.offsetWidth;

	outer.parentNode.removeChild(outer);

	return cachedScrollbarWidth;
}
