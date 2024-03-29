import { FC } from "react";
import scss from "./Input.module.scss";

export const Input: FC<{
	type: string;
	value: string;
	setData: (value: string) => void;
	placeholder: string;
}> = ({ type, value, setData , placeholder}) => {
	return (
		<input
		placeholder={placeholder}
		className={scss.inputs}
			type={type}
			value={value}
			onChange={(e) => setData(e.target.value)}
		/>
	);
};
