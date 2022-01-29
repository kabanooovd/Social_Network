import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";
import s from "./Navbar.module.css";

const Navbar = () => {
	const userID = useSelector<AppStateType, string>((state) => state.auth.id);
	const idAuth = useSelector<AppStateType, boolean>(
		(state) => state.auth.isAuth
	);
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink
					to={idAuth ? `/profile/${userID}` : "/login"}
					activeClassName={s.activeTTT}
				>
					Profile
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/dialogs" activeClassName={s.activeTTT}>
					Messages
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/users" activeClassName={s.activeTTT}>
					Users
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/news" activeClassName={s.activeTTT}>
					News
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/music" activeClassName={s.activeTTT}>
					Music
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/settings" activeClassName={s.activeTTT}>
					Settings
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
