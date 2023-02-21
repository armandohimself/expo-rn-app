//DEPENDECIES
import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	useWindowDimensions,
	Pressable,
	Platform,
} from "react-native";

// DATA
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
	const { width } = useWindowDimensions();

	function renderCategoryItem({ item }) {
		function pressHandler() {
			navigation.navigate("Meals Overview", { categoryId: item.id, title: item.title });
		}

		return (
			<View style={styles.gridItem}>
				<Pressable
					android_ripple={{ color: "#ccc" }}
					style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
					onPress={pressHandler}
				>
					<View style={[styles.innerGrid, { backgroundColor: item.color }]}>
						<Text style={styles.gridText}>{item.title}</Text>
					</View>
				</Pressable>
			</View>
		);
	}

	return (
		<View style={[styles.gridContainer, { width: width * 0.95 }]}>
			<FlatList
				data={CATEGORIES}
				keyExtractor={(item) => item.id}
				renderItem={renderCategoryItem}
				numColumns={2}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	gridContainer: {
		flex: 1,
		margin: 15,
	},
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		elevation: 3,
		shadowColor: "black",
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	button: {
		flex: 1,
		width: "100%",
	},
	buttonPressed: {
		opacity: 0.5,
	},
	innerGrid: {
		flex: 1,
		borderRadius: 8,
		padding: 16,
		justifyContent: "center",
		alignItems: "center",
	},
	gridText: {
		fontSize: 18,
		color: "#313131",
	},
});

export default CategoriesScreen;
