import React, { useState } from "react";
import propTypes from "prop-types";

const Juego = props => {
	const boardSpaces = [
		[null, null, null],
		[null, null, null],
		[null, null, null]
	];
	const { setScreen, startingPlayer } = props;
	const [board, setBoard] = useState(boardSpaces);
	const [player, setPlayer] = useState(startingPlayer);
	const [winner, setWinner] = useState(false);

	const makeMove = (row, cell) => {
		let matrix = [...board];
		matrix[row].splice(cell, 1, player);
		setBoard(matrix);
		calculateWinner(board);
	};

	const switchPlayer = () => {
		player == "X" ? setPlayer("O") : setPlayer("X");
	};

	function calculateWinner(squares) {
		let winningCombs = [
			[
				[0, 0],
				[0, 1],
				[0, 2]
			],
			[
				[1, 0],
				[1, 1],
				[1, 2]
			],
			[
				[2, 0],
				[2, 1],
				[2, 2]
			],
			[
				[0, 0],
				[1, 0],
				[2, 0]
			],
			[
				[0, 1],
				[1, 1],
				[2, 1]
			],
			[
				[0, 2],
				[1, 2],
				[2, 2]
			],
			[
				[0, 0],
				[1, 1],
				[2, 2]
			],
			[
				[0, 2],
				[1, 1],
				[2, 0]
			]
		];

		for (let i = 0; i < winningCombs.length; i++) {
			const [a, b, c] = winningCombs[i];

			if (
				squares[a[0]][a[1]] &&
				squares[a[0]][a[1]] == squares[b[0]][b[1]] &&
				squares[a[0]][a[1]] == squares[c[0]][c[1]]
			) {
				console.log("ganador");
				setWinner(true);
				return null;
			}
		}
		switchPlayer();
	}

	return (
		<div>
			<button className="botonReset" onClick={() => setScreen(false)}>
				Start Over
			</button>
			<div>{winner ? `${player} wins!` : `It's ${player} turn`}</div>
			<div className="" style={{ width: "600px" }}>
				{board.map((row, rowIndex) => {
					return (
						<div className="row" key={rowIndex}>
							{row.map((cell, cellIndex) => {
								return (
									<button
										disabled={cell || winner}
										className={`col-4 play`}
										key={cellIndex}
										onClick={() => {
											makeMove(rowIndex, cellIndex);
										}}>
										<span>{cell}</span>
									</button>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

Juego.propTypes = {
	setScreen: propTypes.func,
	startingPlayer: propTypes.string
};
export default Juego;
