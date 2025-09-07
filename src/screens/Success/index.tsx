import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated, Easing, Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./../../../App";
import Images from "../../constants/images";
import color from "../../constants/color";
import { PRODUCT_LANDING } from "../../navigation/navigationConstants";

const { height, width } = Dimensions.get('window');
type Props = { navigation: NativeStackNavigationProp<RootStackParamList, "SUCCESS"> };

export default function SuccessScreen({ navigation }: Props) {
    const progress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(progress, {
            toValue: 1,
            duration: 2500,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => {
            navigation.replace(PRODUCT_LANDING);
        });
    }, []);

    const widthAnim = progress.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "100%"],
    });

    return (
        <View style={styles.container}>
            <Image source={Images.success} style={styles.icon} />
            <Text style={styles.text}>Selfie captured perfectly!</Text>
            <Text style={styles.text}>Let’s build your own fashion avatar.</Text>
            <View style={styles.loaderBackground}>
                <Animated.View style={[styles.loaderFill, { width: widthAnim }]} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        width: 100,
        height: 100,
        marginBottom: 20
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 5
    },
    loaderBackground: {
        marginTop: height / 15,
        width: "40%",
        height: 6,
        backgroundColor: color.LOADER_BG,
        borderRadius: 3,
        overflow: "hidden",
    },
    loaderFill: {
        height: "100%",
        backgroundColor: color.BLACK,
    },
});