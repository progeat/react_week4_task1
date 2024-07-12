import { Information } from './components/information/information';
import { Field } from './components/field/field';
import styles from './game.module.css';

export const GameLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	onClickReset,
	...props
}) => {
	return (
		<div className={styles.game}>
			<Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} />
			<Field
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				field={field}
				setField={setField}
			/>
			<button className={styles['button-reset']} onClick={onClickReset}>
				Начать заново
			</button>
		</div>
	);
};
