// #region ============================== Imports

// components
import Nav from "@/components/ui/Nav/Nav";
import PagesWrapper from "@/components/layout/PagesWrapper/PagesWrapper";

// fonts
import { font } from "@/utils/importFonts";

// providers
import TransitionProvider from "@/providers/TransitionProvider";

// styles
import "@/styles/tokens/spacings.css";
import "@/styles/tokens/colors.css";
import "@/styles/tokens/fonts.css";
import "@/styles/reset.css";
import "@/styles/global.css";

// #endregion ===========================

export const metadata = {
	title: "Page Transition #2",
	description: "Page Transition #2",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={font.variable}>
			<body>
				<TransitionProvider>
					<Nav />
					<PagesWrapper>{children}</PagesWrapper>
				</TransitionProvider>
			</body>
		</html>
	);
}
