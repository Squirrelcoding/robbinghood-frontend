import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";
import Image from "next/image";

interface Order {
	id: number;
	title: {
		image: string;
		name: string;
		role: string;
	};
	projectName: string;
	team: {
		images: string[];
	};
	yesPrice: number;
	status: string;
	newCategory: string;
}

// Define the table data using the interface
const tableData: Order[] = [
	{
		id: 1,
		title: {
			image: "/images/title/title-17.jpg",
			name: "Will Trump release Epstein files by...?",
			role: "Web Designer",
		},
		projectName: "Politics",
		team: {
			images: [
				"/images/title/title-22.jpg",
				"/images/title/title-23.jpg",
				"/images/title/title-24.jpg",
			],
		},
		yesPrice: 0.81,
		status: "closed",
		newCategory: "ewrth",
	},
	{
		id: 2,
		title: {
			image: "/images/title/title-18.jpg",
			name: "Russia x Ukraine ceasefire in 2025?",
			role: "Project Manager",
		},
		projectName: "Geopolitics",
		team: {
			images: ["/images/title/title-25.jpg", "/images/title/title-26.jpg"],
		},
		yesPrice: 0.67,
		status: "running",
		newCategory: "ewrth",
	},
	{
		id: 3,
		title: {
			image: "/images/title/title-17.jpg",
			name: "Buffalo at Houston",
			role: "Content Writing",
		},
		projectName: "Sports",
		team: {
			images: ["/images/title/title-27.jpg"],
		},
		yesPrice: 0.35,
		status: "completed",
		newCategory: "ewrth",
	},
	{
		id: 4,
		title: {
			image: "/images/title/title-20.jpg",
			name: "Next US Presidential Election Winner?",
			role: "Digital Marketer",
		},
		projectName: "Politics",
		team: {
			images: [
				"/images/title/title-28.jpg",
				"/images/title/title-29.jpg",
				"/images/title/title-30.jpg",
			],
		},
		yesPrice: 0.28,
		status: "failed",
		newCategory: "ewrth",
	},
	{
		id: 5,
		title: {
			image: "/images/title/title-21.jpg",
			name: "Top artist on Spotify this year?",
			role: "Front-end Developer",
		},
		projectName: "Culture",
		team: {
			images: [
				"/images/title/title-31.jpg",
				"/images/title/title-32.jpg",
				"/images/title/title-33.jpg",
			],
		},
		yesPrice: 0.45,
		status: "running",
		newCategory: "ewrth",
	},
];

export default function BasicTableOne() {
	return (
		<div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
			<div className="max-w-full overflow-x-auto">
				<div className="min-w-[1102px]">
					<Table>
						{/* Table Header */}
						<TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
							<TableRow>
								<TableCell
									isHeader
									className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
								>
									Market Title
								</TableCell>
								<TableCell
									isHeader
									className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
								>
									Category
								</TableCell>
								<TableCell
									isHeader
									className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
								>
									Team
								</TableCell>
								<TableCell
									isHeader
									className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
								>
									status
								</TableCell>
								<TableCell
									isHeader
									className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
								>
									yesPrice
								</TableCell>
								<TableCell
									isHeader
									className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
								>
									New category
								</TableCell>
							</TableRow>
						</TableHeader>

						{/* Table Body */}
						<TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
							{tableData.map((order) => (
								<TableRow key={order.id}>
									<TableCell className="px-5 py-4 sm:px-6 text-start">
										<div className="flex items-center gap-3">

											<div>
												<span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
													{order.title.name}
												</span>
											</div>
										</div>
									</TableCell>
									<TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
										{order.projectName}
									</TableCell>
									<TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
										<div className="flex -space-x-2">
											{order.team.images.map((teamImage, index) => (
												<div
													key={index}
													className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
												>
													<Image
														width={24}
														height={24}
														src={teamImage}
														alt={`Team member ${index + 1}`}
														className="w-full"
													/>
												</div>
											))}
										</div>
									</TableCell>
									<TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
										<Badge
											size="sm"
											color={
												order.status === "completed"
													? "success"
													: order.status === "running"
														? "info"
														: order.status === "closed"
															? "warning"
															: "error"
											}
										>
											{order.status}
										</Badge>
									</TableCell>
									<TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
										{order.yesPrice}
									</TableCell>
									<TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
										{order.newCategory}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		</div>
	);
}
