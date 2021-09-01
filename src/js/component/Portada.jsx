import React from "react";
import propTypes from "prop-types";

const Portada = props => {
	const { setScreen, setStartingPlayer } = props;

	return (
		<div className="contenedor">
			<h4>TicTacToe with React</h4>

			<div className="contInicio">
				<h5>Choose your Weapon</h5>
				{/* <input
					type="text"
					className="player1"
					placeholder="Player 1 username"
				/>
				<input
					type="text"
					className="player2"
					placeholder="Player 2 username"
				/> */}
				<div>
					<button
						className="botonX"
						onClick={() => {
							setStartingPlayer("X");
							setScreen(true);
						}}>
						<p>X</p>
					</button>
					<button
						className="botonO"
						onClick={() => {
							setStartingPlayer("O");
							setScreen(true);
						}}>
						<span>O</span>
					</button>
				</div>
			</div>
		</div>
	);
};

Portada.propTypes = {
	setScreen: propTypes.func,
	setStartingPlayer: propTypes.func
};

export default Portada;
