import { GestureResponderEvent, Pressable, StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import Text from "./CustomText";

type TButtonProps = {
    title: string;
    onPress: ((event: GestureResponderEvent) => void);
    style?: StyleProp<ViewStyle>;
    textStyle?: TextStyle;
}

const Button = ({ title, onPress, style, textStyle }: TButtonProps) => {
    return (
        <Pressable onPress={onPress} style={[styles.pressableContainer, style]}><Text style={{ ...styles.textStyle, ...textStyle }}>{title}</Text></Pressable>
    );
};

const styles = StyleSheet.create({
    pressableContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1
    },
    textStyle: { fontSize: 20, textAlign: "center" }
})

export default Button;