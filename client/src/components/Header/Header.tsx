import React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';

const headerResponsive = {
	margin: { xl: '0 auto' },
	width: { xl: '1200px' },
};

const Header: React.FC = () => {
	return (
		<>
			<AppBar>
				<Toolbar sx={headerResponsive}>
					<Typography variant='h6' component='div'>
						Rick and Morty app
					</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar id='back-to-top-anchor' />
		</>
	);
};

export default Header;
