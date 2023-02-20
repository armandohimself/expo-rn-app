import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: "black",
		padding: 10,
		borderRadius: 10,
		marginVertical: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 22,
	},
});
