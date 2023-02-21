// DEPENDENCIES
import React, { useLayoutEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	useWindowDimensions,
	Pressable,
	Platform,
} from "react-native";

// ROUTE
import { useNavigation } from "@react-navigation/native";

// DATA
import { MEALS } from "../data/dummy-data";

// COMPONENTS
import MealItemOverview from "../components/MealItemOverview";

function MealsOverviewScreen({ route }) {
	const { categoryId, title } = route.params;
	const navigation = useNavigation();

	const displayedMeals = MEALS.filter(function (meal) {
		return meal.categoryIds.indexOf(categoryId) >= 0;
	});

	useLayoutEffect(() => {
		navigation.setOptions({
			title: title,
		});
	}, [navigation]);

	return (
		<View>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return <MealItemOverview {...item} />;
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});

export default MealsOverviewScreen;
