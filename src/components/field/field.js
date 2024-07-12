import { FieldLayout } from './field-layout';
import { WIN_PATTERNS } from '../../constants';

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
}) => {
	const onClickButton = (cellIndex) => {
		if (field[cellIndex] === '' && !isGameEnded) {
			const updateField = field.map((elem, index) =>
				cellIndex === index ? currentPlayer : elem,
			);

			const isWinner = WIN_PATTERNS.some((pattern) =>
				pattern.every(
					(indexPattern) => updateField[indexPattern] === currentPlayer,
				),
			);

			if (isWinner) {
				setIsGameEnded(true);
			} else {
				setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
			}

			setField(updateField);
		}
	};

	return <FieldLayout field={field} onClickButton={onClickButton} />;
};
