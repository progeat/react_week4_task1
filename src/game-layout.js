import { Information, Field } from './components';
import PropTypes from 'prop-types';
import styles from './game.module.css';

export const GameLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isDraw,
	isGameEnded,
	setIsGameEnded,
	winPatterns,
	onClickReset,
}) => {
	return (
		<div className={styles.game}>
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				field={field}
				setField={setField}
				winPatterns={winPatterns}
			/>
			<button className={styles['button-reset']} onClick={onClickReset}>
				Начать заново
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	winPatterns: PropTypes.array,
	onClickReset: PropTypes.func,
};
