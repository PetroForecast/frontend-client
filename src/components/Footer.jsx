import React from "react";
import { Typography, Link, Box } from "@mui/material";

export default function Footer() {
	return (
		<Box sx={{ bgcolor: '#5a6f7e', p: 6}} component="footer">
			<Typography variant="h6" align="center" gutterBottom>
			PETROFORECAST
			</Typography>
			<Typography
			variant="subtitle1"
			align="center"
			color="text.secondary"
			component="p"
			>
			Main Address: 1234 Road Lane, Houston, Texas 77001 |
			PETROFORECAST Information Line: 713.713.0713
			</Typography>
			<Typography variant="body2" color="text.secondary" align="center">
					{'Copyright © '}
					<Link color="inherit" href="/">
					PETROFORECAST
					</Link>{' '}
					{new Date().getFullYear()}
					{'. Petroforecast. All rights reserved.'}
			</Typography>
		</Box>
	);
}