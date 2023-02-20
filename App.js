// DEPENDENCIES
import { useState } from "react";
import { StyleSheet, ImageBackground, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

// COMPONENTS
import StartGameScreen from "./src/screens/StartGameScreen";
import GameScreen from "./src/screens/GameScreen";
import GameOverScreen from "./src/screens/GameOverScreen";

export default function App() {
	const [userNum, setUserNum] = useState();
	const [isGameOver, setIsGameOver] = useState(false);
	const [rounds, setRounds] = useState(0);

	function userEnteredNumberHandler(enteredNumber) {
		setUserNum(enteredNumber);
	}

	function roundsHandler() {
		setRounds((rounds) => rounds + 1);
	}

	function gameOverHandler(roundsLength) {
		setIsGameOver(true);
		setRounds(roundsLength);
	}

	function startNewGame() {
		setIsGameOver(false);
		setRounds(0);
		setUserNum(null);
	}

	let screen = <StartGameScreen userEnteredNumberHandler={userEnteredNumberHandler} />;

	if (userNum)
		screen = (
			<GameScreen
				userNum={userNum}
				gameOverHandler={gameOverHandler}
				roundsHandler={roundsHandler}
			/>
		);

	if (isGameOver)
		screen = <GameOverScreen rounds={rounds} userNum={userNum} startNewGame={startNewGame} />;

	return (
		<>
			<StatusBar style='light' />
			<View style={styles.container}>
				<ImageBackground
					source={require("./src/assets/images/cards.jpg")}
					style={{ flex: 1, width: "100%", height: "100%" }}
					resizeMode={"cover"}
					imageStyle={{ opacity: 0.35 }}
				>
					<SafeAreaView style={styles.container}>{screen}</SafeAreaView>
				</ImageBackground>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
