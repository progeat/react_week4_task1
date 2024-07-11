import { useState } from 'react';
import { GameLayout } from './game-layout';
import { FIELD_PARAM } from './constants/index';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(FIELD_PARAM);

	return <GameLayout field={field} setField={setField} />;
};
