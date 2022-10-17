import React from 'react';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Fab, Box, Fade } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface ScrollTopInterface {
	anchorName: string;
}

const ScrollTop: React.FC<ScrollTopInterface> = (props: ScrollTopInterface) => {
	const anchorName: string = props.anchorName;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = () => {
		const anchor = document.getElementById(anchorName);

		if (anchor) {
			anchor.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
		}
	};

	return (
		<Fade in={trigger}>
			<Box
				onClick={handleClick}
				role='presentation'
				sx={{ position: 'fixed', bottom: 16, right: 16 }}>
				<Fab size='small' aria-label='scroll back to top'>
					<KeyboardArrowUpIcon />
				</Fab>
			</Box>
		</Fade>
	);
};

export default ScrollTop;
