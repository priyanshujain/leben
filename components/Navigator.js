import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import BackupIcon from "@mui/icons-material/Backup";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsIcon from "@mui/icons-material/Settings";
import PieChartIcon from "@mui/icons-material/PieChart";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import ContrastIcon from "@mui/icons-material/Contrast";
import { downloadData } from "../utils/storage";
import { getFeatures, getMandatoryFeatures } from "../utils/storage/settings";
import Router from "next/router";

const categories = [
	{
		id: "habit",
		children: [
			{
				id: "Edit Daily Habits",
				icon: <SettingsEthernetIcon />,
				action: () => {
					Router.push("/goals");
				},
			},
			{
				id: "History",
				icon: <HistoryIcon />,
				action: () => {
					Router.push("/history");
				},
			},
		],
	},
	{
		id: "sleep",
		children: [
			{
				id: "Tracker",
				icon: <BedtimeIcon />,
				action: () => {
					Router.push("/sleep-tracker");
				},
			},
			{
				id: "Statistics",
				icon: <PieChartIcon />,
				action: () => {
					Router.push("/sleep-metrics");
				},
			},
			{
				id: "Sleep Goals",
				icon: <ContrastIcon />,
				action: () => {
					Router.push("/sleep-goals");
				},
			},
		],
	},
	{
		id: "settings",
		children: [
			{
				id: "Download Backup",
				icon: <BackupIcon />,
				action: downloadData,
			},
			{
				id: "App Settings",
				icon: <SettingsIcon />,
				action: () => {
					Router.push("/settings");
				},
			},
		],
	},
];

const item = {
	py: "2px",
	px: 3,
	color: "#fff",
	"&:hover, &:focus": {
		bgcolor: "rgba(255, 255, 255, 0.08)",
	},
};

const itemCategory = {
	boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
	py: 1.5,
	px: 3,
};

export default function Navigator(props) {
	const { onDrawerToggle, ...other } = props;
	const features = Object.assign(getFeatures(), getMandatoryFeatures());
	const renderCategories = categories.filter(
		(category) => features[category.id]
	);

	return (
		<Drawer variant="permanent" {...other}>
			<List disablePadding>
				<ListItem
					sx={{
						...item,
						...itemCategory,
						fontSize: 22,
						color: "#fff",
					}}
				>
					👋 Hey There!
				</ListItem>
				<ListItemButton
					sx={{ ...item, ...itemCategory }}
					onClick={() => Router.push("/")}
				>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText>Home</ListItemText>
				</ListItemButton>
				{renderCategories.map(({ id, children }) => (
					<Box key={id} sx={{ bgcolor: "#16463F" }}>
						<ListItem sx={{ py: 2, px: 3 }}>
							<ListItemText sx={{ color: "#fff" }}>
								{id}
							</ListItemText>
						</ListItem>
						{children.map(
							({ id: childId, icon, active, action }) => (
								<ListItem disablePadding key={childId}>
									<ListItemButton
										selected={active}
										sx={item}
										onClick={() => {
											action();
											props.onDrawerToggle();
										}}
									>
										<ListItemIcon>{icon}</ListItemIcon>
										<ListItemText>{childId}</ListItemText>
									</ListItemButton>
								</ListItem>
							)
						)}

						<Divider sx={{ mt: 2 }} />
					</Box>
				))}
			</List>
		</Drawer>
	);
}
