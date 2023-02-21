// DEPENDENCIES
import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, useWindowDimensions, Image } from "react-native";

// COMPONENTS
import Card from "./Card";
import Title from "./Title";

function MealItemOverview({ title, affordability, complexity, imageUrl, duration, ...rest }) {
	const { width, height } = useWindowDimensions();

	function onPressHandler() {
		console.log("MealItemOverview pressed");
	}

	let textColor = "black";
	if (affordability === "affordable") {
		textColor = "green";
	} else if (affordability === "pricey") {
		textColor = "orange";
	} else if (affordability === "luxurious") {
		textColor = "red";
	}

	return (
		<Card onPress={onPressHandler}>
			<View style={[styles.image_container]}>
				<Image
					source={{ uri: imageUrl }}
					style={[styles.image, { width: width * 0.9, height: height * 0.2 }]}
				/>
			</View>
			<View style={styles.content}>
				<Title>{title}</Title>
				<View style={[styles.content_tags, { width: width * 0.9 }]}>
					<Text style={[styles.tag, { color: textColor }]}>💲 {affordability}</Text>
					<Text>🛠️ {complexity}</Text>
					<Text>⏱️ {duration} mins</Text>
				</View>
			</View>
		</Card>
	);
}

const styles = StyleSheet.create({
	image_container: {
		flex: 1,
	},
	image: {
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		overflow: "hidden",
	},
	content: {
		flex: 1,
		margin: 8,
		padding: 8,
		alignItems: "center",
	},
	content_tags: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: "100%",
		marginVertical: 8,
	},
	tag: {
		fontSize: 12,
		fontWeight: "bold",
	},
});

export default MealItemOverview;
