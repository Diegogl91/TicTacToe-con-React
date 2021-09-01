import React, { useState } from "react";
import Portada from "./Portada.jsx";
import Juego from "./Juego.jsx";

const Home = () => {
	const [screen, setScreen] = useState(false);
	const [startingPlayer, setStartingPlayer] = useState("X");

	return (
		<>
			{screen ? (
				<Juego setScreen={setScreen} startingPlayer={startingPlayer} />
			) : (
				<Portada
					setScreen={setScreen}
					setStartingPlayer={setStartingPlayer}
				/>
			)}
		</>
	);
};

export default Home;
