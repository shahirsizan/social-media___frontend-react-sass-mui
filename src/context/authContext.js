import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);

	const login = () => {
		//TO DO
		setCurrentUser({
			id: 1,
			name: "Shahir Adil Sizan",
			profilePic:
				"https://media.licdn.com/dms/image/D4E03AQGy5Hh-TEty5w/profile-displayphoto-shrink_200_200/0/1695308514513?e=2147483647&v=beta&t=Sw3EMxIzk0c0U3SZxsJD1vdxd3Mjljebq-DTfoCrr_w",
		});
	};

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, login }}>
			{children}
		</AuthContext.Provider>
	);
};
