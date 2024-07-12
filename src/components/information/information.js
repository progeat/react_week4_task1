import { InformationLayout } from './information-layout.js';

export const Information = ({ currentPlayer, isGameEnded }) => {
	return (
		<>
			<InformationLayout currentPlayer={currentPlayer} isGameEnded={isGameEnded} />
		</>
	);
};
