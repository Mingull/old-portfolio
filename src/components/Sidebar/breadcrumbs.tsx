import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import Link from "next/link";

export default function Breadcrumbs() {
	const pathname = usePathname();
	return (
		<Breadcrumb className="hidden md:flex">
			<BreadcrumbList>
				{pathname
					.slice(1)
					.split("/")
					.map<React.ReactNode>((path, index, paths) => {
						if (index === paths.length - 1)
							return (
								<BreadcrumbItem key={index}>
									<BreadcrumbPage>{path}</BreadcrumbPage>
								</BreadcrumbItem>
							);
						return (
							<BreadcrumbItem key={index}>
								<BreadcrumbLink asChild>
									<Link href={`/${paths.slice(0, index + 1).join("/")}`}>{path}</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
						);
					})
					.reduce((acc, item) => [acc, <BreadcrumbSeparator />, item])}
				{/* <BreadcrumbItem>
            <BreadcrumbLink asChild>
                <Link href="#">Dashboard</Link>
            </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
            <BreadcrumbLink asChild>
                <Link href="#">Orders</Link>
            </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
            <BreadcrumbPage>Recent Orders</BreadcrumbPage>
        </BreadcrumbItem> */}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
