//DEPENDENCIES
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";

//COMPONENTS
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import { PrimaryButton } from "../components/CustomButton";

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

export default function GameScreen({ userNum, gameOverHandler, roundsHandler }) {
	const initialGuess = generateRandomBetween(1, 100, userNum);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [roundsGuessed, setRoundsGuessed] = useState([]);

	const nextGuessHandler = (direction) => {
		// EDGE CASE: if user tries to cheat
		if (
			(direction === "LOWER" && currentGuess < userNum) ||
			(direction === "HIGHER" && currentGuess > userNum)
		) {
			Alert.alert("Don't lie!", "You know that this is wrong...", [
				{ text: "Sorry!", style: "cancel" },
			]);
			return;

			// User tells the computer to guess higher or lower
		} else {
			//LOWER CONDITION
			if (direction === "LOWER") {
				setCurrentGuess(generateRandomBetween(1, currentGuess, currentGuess));

				// HIGHER CONDITION
			} else {
				setCurrentGuess(generateRandomBetween(currentGuess, 100, currentGuess));
			}

			// Update roundsGuessed array and update number of rounds completed handler
			roundsHandler();
			setRoundsGuessed((previousGuess) => [currentGuess, ...previousGuess]);
		}
	};

	useEffect(() => {
		if (currentGuess === userNum) {
			gameOverHandler(roundsGuessed.length);
		}
	}, [currentGuess, userNum]);

	return (
		<View style={styles.page}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View style={styles.buttonsContainer}>
				<PrimaryButton text='LOWER' onPress={nextGuessHandler.bind(this, "LOWER")}></PrimaryButton>
				<PrimaryButton
					text='HIGHER'
					onPress={nextGuessHandler.bind(this, "HIGHER")}
				></PrimaryButton>
			</View>
			<Title>Guess Log</Title>
			<FlatList
				data={roundsGuessed}
				renderItem={({ item, index }) => {
					let indexText = index + 1;

					return (
						<View style={styles.roundsContainer}>
							<Text style={styles.indexText}>Guess #{indexText}:</Text>
							<Text style={styles.roundsText}>{`${item} was not your number`}</Text>
						</View>
					);
				}}
				keyExtractor={(item) => item}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonsContainer: {
		backgroundColor: "#8db580",
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: "100%",
		marginTop: 20,
	},
	roundsContainer: {
		backgroundColor: "#8db580",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		width: "100%",
		marginTop: 20,
		height: 40,
	},
	indexText: {
		fontSize: 20,
		color: "white",
	},
	roundsText: {
		fontSize: 20,
		color: "white",
	},
});
