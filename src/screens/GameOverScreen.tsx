import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

//COMPONENTS
import { PrimaryButton } from "../components/CustomButton";
import Title from "../components/Title";

export default function GameOverScreen({ rounds, userNum, startNewGame }) {
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
			<View style={styles.container}>
				<Title>Game Over</Title>
				<View style={styles.image_container}>
					<Image
						source={require("../assets/images/gameover.jpg")}
						style={{ width: "100%", height: "100%" }}
						resizeMode={"cover"}
					/>
				</View>
				<Title>Final Score</Title>
				<View style={styles.gameOverScoreContainer}>
					<Text style={styles.rounds_text}># of Guesses: {rounds} </Text>
					<Text style={styles.user_number_text}># You Chose: {userNum}</Text>
				</View>
				<View>
					<PrimaryButton text={"Start New Game"} onPress={startNewGame}></PrimaryButton>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	image_container: {
		width: 360,
		height: 360,
		borderRadius: 180,
		overflow: "hidden",
		borderWidth: 2,
		borderColor: "black",
		margin: 30,
	},
	gameOverScoreContainer: {
		marginVertical: 30,
		backgroundColor: "#8db580",
		width: "90%",
		height: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	rounds_text: {
		fontSize: 20,
		color: "white",
	},
	user_number_text: {
		fontSize: 20,
		color: "white",
	},
});
