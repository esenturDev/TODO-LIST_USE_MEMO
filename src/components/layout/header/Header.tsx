import scss from "./Header.module.scss";

const Header = () => {
	return (
		<header className={scss.header}>
			<div className="container">
				<div className={scss.content}></div>
			</div>
		</header>
	);
};

export default Header;
