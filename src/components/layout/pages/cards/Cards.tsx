import { useCallback, useEffect } from "react";
import { useAppSelector } from "../../../../store/store";
import scss from "./Cards.module.scss";
import { useDispatch } from "react-redux";
import {
	deleteTodoAndMoviList,
	getTodoAndMoviList,
	// postCards,
} from "../../../../store/tools/Todos";
import Button from "../../../Ul/button/Button";
export const Cards = () => {
	const todoAndMovi = useAppSelector((state) => state.todolistAndMoviList.data);
	const dispatch = useDispatch();
	console.log(todoAndMovi);
	const handleDelete = (id: number) => {
		dispatch(deleteTodoAndMoviList(id));
	};
	useCallback(() => {
		handleDelete
	}, [dispatch])

	// const itemIdResult = (id: number) => {
	// 	console.log(id);

	// 	setIsOpenForms(id);
	// };

	// useCallback(() => {
	// 	itemIdResult;
	// }, [itemIdResult]);

	// const handleSave = (id: number, newData: TodoListResult[]) => {
	// 	console.log(newData);

	// 	console.log(id, newData);
	// 	const resultIsEdit = newData.map((itemIdEdit) => {
	// 		if (itemIdEdit._id !== id) {
	// 			return itemIdEdit;
	// 		}
	// 		return {
	// 			_id: id,
	// 			title: nameValue,
	// 		};
	// 	});
	// 	const newDataToSend = {
	// 		resultIsEdit,
	// 	};
	// 	dispatch(postCards(newDataToSend, id));
	// 	setNameValue(""); // Очистить значение nameValue после сохранения
	// 	setIsOpenForms(null);
	// };

	useEffect(() => {
		dispatch(getTodoAndMoviList());
	}, [dispatch]);
	return (
		<div className={scss.cards}>
			<div className="container">
				<div className={scss.content}>
					{todoAndMovi.map((item) => (
						<div className={scss.card} key={item._id}>
							<h2>{item.title}</h2>
							<p>{item.date}</p>
							<Button onClick={() => handleDelete(item._id)}>delete</Button>
			
							{/* {item.newData.map((itemIndex) => (
                <div key={itemIndex._id}>
                  <p>{itemIndex.name}</p>
                </div>
              ))} */}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};


// {isOpenForms === item._id ? (
// 	<>
// 		<h1>Добавить карточки!</h1>
// 		<Button onClick={() => setIsOpenForms(null)}>
// 			Noo Forms
// 		</Button>
// 		<Button onClick={() => handleSave(item._id, item.newData)}>
// 			Save
// 		</Button>
// 		<Input type="text" value={nameValue} setData={setNameValue} />
// 		{/* <Button
// 			onClick={() => handlePostCards(item._id)}>
// 			Add Cards
// 		</Button> */}
// 	</>
// ) : (
// 	<Button onClick={() => itemIdResult(item._id)}>
// 		Добавить Cards
// 	</Button>
// )}