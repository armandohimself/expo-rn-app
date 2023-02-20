// DEPENDENCIES
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ text, onPress }: { text: string; onPress?: () => void }) {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer
				}
				onPress={onPress}
				android_ripple={{ color: "#3a405a" }}
			>
				<Text style={styles.buttonText}>{text}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonOuterContainer: {
		backgroundColor: "#3a405a",
		borderRadius: 10,
		marginHorizontal: 20,
		marginVertical: 20,
		overflow: "hidden",
	},
	buttonInnerContainer: {
		backgroundColor: "#3a405a",
		padding: 15,
		marginHorizontal: 10,
	},
	pressed: {
		opacity: 0.25,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
});

export { PrimaryButton };
