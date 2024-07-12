import styles from './information.module.css';

export const InformationLayout = ({ currentPlayer, isGameEnded }) => (
	<div>
		{isGameEnded ? `Победа: ${currentPlayer}` : `Текущий ход: ${currentPlayer}`}
	</div>
);
