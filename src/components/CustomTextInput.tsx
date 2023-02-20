import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

function CustomTextInput(props) {
	return (
		<View style={styles.input_container}>
			<TextInput {...props} />
		</View>
	);
}

function NumberTextInput(props) {
	const [enteredValue, setEnteredValue] = useState(0);

	function numberInputHandler(inputText) {
		setEnteredValue(inputText);
	}

	return (
		<View style={styles.input_container}>
			<TextInput style={styles.number_input} {...props} onChangeText={numberInputHandler} />
		</View>
	);
}

const styles = StyleSheet.create({
	input_container: {
		padding: 10,
		borderRadius: 5,
		marginVertical: 10,
		width: "20%",
		height: 50,
	},
	number_input: {
		textAlign: "center",
		borderBottomWidth: 2,
		borderBottomColor: "yellow",
		fontSize: 26,
		color: "white",
	},
});

export { CustomTextInput, NumberTextInput };
