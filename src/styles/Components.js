import styled from '@emotion/styled';

// potential breakpoints 
// const breakpoints = [360, 768, 1280];
// const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const Container = styled.div`
	// mobile
    @media screen and (min-width: 360px) {
		margin: 0 auto;
        padding: 0 24px;
	}

	// tablet
	@media screen and (min-width: 768px) {
		max-width: 768px;
	}

	// desktop
	@media screen and (min-width: 1280px) {
		max-width: 1280px;
	}
`;
