import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export type SidebarLinks = {
	name: string;
	icon: React.ReactNode;
};

export default function SidebarItem({ name, icon }: Readonly<SidebarLinks>) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Link href="#" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
					{icon}
					<span className="sr-only">{name}</span>
				</Link>
			</TooltipTrigger>
			<TooltipContent side="right">{name}</TooltipContent>
		</Tooltip>
	);
}
