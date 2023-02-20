// DEPENDENCIES
import React, { useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	Alert,
	KeyboardAvoidingView,
	ScrollView,
	useWindowDimensions,
} from "react-native";

// COMPONENTS
import { PrimaryButton } from "../components/CustomButton";

export default function StartGameScreen({ userEnteredNumberHandler }) {
	const [enteredNum, setEnteredNum] = useState("");

	const { width, height } = useWindowDimensions();

	function numberInputHandler(inputText: string): void {
		setEnteredNum(inputText);
	}

	function resetInputHandler(): void {
		setEnteredNum("");
	}

	function confirmInputHandler(): void {
		const chosenNumber = parseInt(enteredNum);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert("Invalid Number!", "Number has to be between 1 and 99.", [
				{ text: "Okay", style: "destructive", onPress: resetInputHandler },
			]);
			return;
		}

		userEnteredNumberHandler(chosenNumber);
	}

	const marginTopDistance = height < 380 ? 30 : 100;

	return (
		<ScrollView style={{ flex: 1 }}>
			<KeyboardAvoidingView style={{ flex: 1 }} behavior={"position"} keyboardVerticalOffset={20}>
				<View style={[styles.page, { marginTop: marginTopDistance }]}>
					<View style={styles.container}>
						<View style={styles.gameStartContainer}>
							<Text style={styles.gameStartText}>Start a New Game!</Text>
							<Text style={[styles.gameStartText, { fontSize: 14, opacity: 0.8 }]}>
								Enter a number between 1 and 99.
							</Text>
						</View>
						<View style={styles.input_container}>
							<TextInput
								maxLength={2}
								keyboardType={"number-pad"}
								returnKeyType='done'
								onChangeText={numberInputHandler}
								autoCorrect={false}
								autoCapitalize='none'
								value={enteredNum}
								style={styles.number_input}
							/>
						</View>
						<View style={styles.buttonsContainer}>
							<View style={styles.buttonContainer}>
								<PrimaryButton text='Reset' onPress={resetInputHandler} />
							</View>
							<View style={styles.buttonContainer}>
								<PrimaryButton text='Confirm' onPress={confirmInputHandler} />
							</View>
						</View>
					</View>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		width: "100%",
		height: 200,
		justifyContent: "center",
		alignItems: "center",
	},
	gameStartContainer: {
		width: "100%",
		height: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	gameStartText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "white",
	},
	container: {
		backgroundColor: "#8db580",
		alignItems: "center",
		width: "90%",
	},
	input_container: {
		backgroundColor: "white",
		width: 75,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		marginVertical: 10,
	},
	number_input: {
		textAlign: "center",
		borderBottomWidth: 2,
		borderBottomColor: "yellow",
		fontSize: 22,
		color: "black",
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "center",
	},
	buttonContainer: {
		flex: 1,
	},
});
