import React from 'react';

import Header from './components/Header/Header';
import ScrollTop from './lib/scrollTop/ScrollTop';
import CharacterGallery from './components/CharacterGallery/CharacterGallery';

import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<CssBaseline>
				<Header />
				<Box className='App' sx={{ my: 2 }}>
					<CharacterGallery />
				</Box>
				<ScrollTop anchorName={'back-to-top-anchor'} />
			</CssBaseline>
		</React.Fragment>
	);
};

export default App;
