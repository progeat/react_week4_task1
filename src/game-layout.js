import { Information, Field } from './components/index.js';
import { styles } from './game.module.css';

export const GameLayout = ({ field, setField, ...props }) => {
	return (
		<>
			<Information props={props} />
			<Field field={field} setField={setField} />
		</>
	);
};
