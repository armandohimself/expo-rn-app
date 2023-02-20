import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		color: "white",
	},
});
