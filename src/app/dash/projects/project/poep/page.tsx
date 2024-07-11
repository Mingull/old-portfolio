import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
	return (
		<div className="grid flex-1 grid-cols-2">
			<Card className="w-[400px]">
				<CardHeader>
					<CardTitle>Create project</CardTitle>
					<CardDescription>Deploy your new project in one-click.</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Get started with Mingull by creating a new project. You can deploy your project to Vercel with a single click.</p>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button>Deploy</Button>
				</CardFooter>
			</Card>
			<Card className="w-[400px]">
				<CardHeader>
					<CardTitle>Create project</CardTitle>
					<CardDescription>Deploy your new project in one-click.</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Get started with Mingull by creating a new project. You can deploy your project to Vercel with a single click.</p>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button>Deploy</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
