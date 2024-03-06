import { useState } from "react";
import scss from "./TodoList.module.scss";
import { Input } from "../../../Ul/input/Input";
import Button from "../../../Ul/button/Button";
import { useDispatch } from "react-redux";
import { postTodoAndMoviList } from "../../../../store/tools/Todos";

export const TodoList = () => {
	const [titleValue, setTitleValue] = useState<string>("");
	const [dateValue, setDateValue] = useState<string>("");
	const dispatch = useDispatch();
	const handlePost = () => {
		const newTodo = {
			title: titleValue,
			date: dateValue,
		};
		if (titleValue.trim() === "") {
			alert("Введите что-то!");
		} else {
			dispatch(postTodoAndMoviList(newTodo));
			setTitleValue("");
			setDateValue("");
		}
	};
	return (
		<div className={scss.TodoList}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.form}>
						<h2>Todo List</h2>
						<Input
							placeholder="Texts..."
							type="text"
							value={titleValue}
							setData={setTitleValue}
						/>
						<Input
							placeholder="Date..."
							type="date"
							value={dateValue}
							setData={setDateValue}
						/>
						<Button onClick={handlePost}>Add!</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
