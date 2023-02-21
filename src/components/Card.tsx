import { View, Text, StyleSheet, Pressable, Platform, useWindowDimensions } from "react-native";

export default function Card({ children, onPress }) {
	const { width, height } = useWindowDimensions();

	return (
		<View style={[styles.outer_container, { width: width * 0.9 }]}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => {
					return [styles.button_container, pressed ? styles.button_pressed : null];
				}}
				onPress={onPress}
			>
				<View style={[styles.inner_container, { width: width * 0.9 }]}>{children}</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	outer_container: {
		flex: 1,
		margin: 15,
		backgroundColor: "#F8FBF4",
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
	button_container: {
		flex: 1,
		width: "100%",
	},
	button_pressed: {
		backgroundColor: "#6b705c",
		opacity: 0.75,
	},
	inner_container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
