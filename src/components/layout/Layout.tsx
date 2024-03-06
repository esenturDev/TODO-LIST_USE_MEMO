import Header from "./header/Header";
import { TodoList } from "./pages/TodoList/TodoList";
import scss from "./Layout.module.scss";
import { Cards } from "./pages/cards/Cards";
export const Layout = () => {
	return (
		<div className={scss.layout}>
			{/* <Header /> */}
			<main>
				<TodoList />
				<Cards />
			</main>
		</div>
	);
};
