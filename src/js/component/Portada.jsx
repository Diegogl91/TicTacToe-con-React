import React from "react";
import propTypes from "prop-types";

const Portada = props => {
	const { setScreen, setStartingPlayer } = props;

	return (
		<div>
			<h2>Pick a Weapon</h2>

			<div className="contInicio">
				<h3>Choose your Weapon</h3>
				<input
					type="text"
					className="player1"
					placeholder="Player 1 username"
				/>
				<input
					type="text"
					className="player2"
					placeholder="Player 2 username"
				/>
			</div>
			<div>
				<button
					className="botonX"
					onClick={() => {
						setStartingPlayer("X");
						setScreen(true);
					}}>
					X
				</button>
				<button
					className="botonO"
					onClick={() => {
						setStartingPlayer("O");
						setScreen(true);
					}}>
					O
				</button>
			</div>
		</div>
	);
};

Portada.propTypes = {
	setScreen: propTypes.func,
	setStartingPlayer: propTypes.func
};

export default Portada;
