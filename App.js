// DEPENDENCIES
import { useState } from "react";
import { StyleSheet, ImageBackground, View, Text, SafeAreaView, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

// NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useHeaderHeight } from "@react-navigation/elements";

// COMPONENTS
import CategoriesScreen from "./src/screens/CategoryScreen";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";

// COMPONENTS
// import StartGameScreen from "./src/screens/StartGameScreen";
// import GameScreen from "./src/screens/GameScreen";
// import GameOverScreen from "./src/screens/GameOverScreen";

const Stack = createNativeStackNavigator();
// const headerHeight = useHeaderHeight();

export default function App() {
	// const [userNum, setUserNum] = useState();
	// const [isGameOver, setIsGameOver] = useState(false);
	// const [rounds, setRounds] = useState(0);

	// function userEnteredNumberHandler(enteredNumber) {
	// 	setUserNum(enteredNumber);
	// }

	// function roundsHandler() {
	// 	setRounds((rounds) => rounds + 1);
	// }

	// function gameOverHandler(roundsLength) {
	// 	setIsGameOver(true);
	// 	setRounds(roundsLength);
	// }

	// function startNewGame() {
	// 	setIsGameOver(false);
	// 	setRounds(0);
	// 	setUserNum(null);
	// }

	// let screen = <StartGameScreen userEnteredNumberHandler={userEnteredNumberHandler} />;

	// if (userNum)
	// 	screen = (
	// 		<GameScreen
	// 			userNum={userNum}
	// 			gameOverHandler={gameOverHandler}
	// 			roundsHandler={roundsHandler}
	// 		/>
	// 	);

	// if (isGameOver)
	// 	screen = <GameOverScreen rounds={rounds} userNum={userNum} startNewGame={startNewGame} />;

	//GAME APP
	// return(
	// 	<>
	// 		<StatusBar style='light' />
	// 		<View style={styles.container}>
	// 			<ImageBackground
	// 				source={require("./src/assets/images/cards.jpg")}
	// 				style={{ flex: 1, width: "100%", height: "100%" }}
	// 				resizeMode={"cover"}
	// 				imageStyle={{ opacity: 0.35 }}
	// 			>
	// 				<SafeAreaView style={styles.container}>{screen}</SafeAreaView>
	// 			</ImageBackground>
	// 		</View>
	// 	</>
	// );

	return (
		<NavigationContainer theme={{ colors: { primary: "#6B705C", background: "#F7FCE8" } }}>
			<Stack.Navigator
				initialRouteName='Categories'
				screenOptions={{
					headerStyle: {
						backgroundColor: "#F7FCE8",
					},
					headerTransparent: true,
					headerTintColor: "#6b705c",
					headerTitleStyle: {
						fontWeight: "bold",
					},
				}}
			>
				<Stack.Screen name='Categories' component={CategoriesScreen} />
				<Stack.Screen name='Meals Overview' component={MealsOverviewScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
