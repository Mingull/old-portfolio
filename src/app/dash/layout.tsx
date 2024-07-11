import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { TooltipProvider } from "../../components/ui/tooltip";
import { Home, LineChart, Package, ShoppingCart, Users2 } from "lucide-react";

export const metadata: Metadata = {
	title: "Dashboard | Mingull",
	description: "Mingull Portfolio Dashboard.",
};

const sidebarRoutes = [
	{ name: "Dashboard", icon: <Home className="h-5 w-5" /> },
	{ name: "Orders", icon: <ShoppingCart className="h-5 w-5" /> },
	{ name: "Products", icon: <Package className="h-5 w-5" /> },
	{ name: "Customers", icon: <Users2 className="h-5 w-5" /> },
	{ name: "Analytics", icon: <LineChart className="h-5 w-5" /> },
];

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<TooltipProvider>
			<Sidebar links={sidebarRoutes}>{children}</Sidebar>
		</TooltipProvider>
	);
}
