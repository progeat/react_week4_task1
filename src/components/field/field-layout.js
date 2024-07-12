import styles from './field.module.css';

export const FieldLayout = ({ field, onClickButton }) => (
	<div className={styles.field}>
		{field.map((elem, index) => (
			<button
				className={styles.button}
				key={index}
				onClick={() => onClickButton(index)}
			>
				{elem}
			</button>
		))}
	</div>
);
