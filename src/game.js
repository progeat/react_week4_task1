import { useState } from 'react';
import { GameLayout } from './game-layout';
import { FIELD_PARAM, WIN_PATTERNS } from './constants';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(FIELD_PARAM);
	const winPatterns = WIN_PATTERNS;

	const isFullCells = field.every((cell) => cell !== '');

	if (!isDraw && isFullCells && !isGameEnded) setIsDraw(true);

	const onClickReset = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(FIELD_PARAM);
	};

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			isDraw={isDraw}
			field={field}
			setField={setField}
			winPatterns={winPatterns}
			onClickReset={onClickReset}
		/>
	);
};
