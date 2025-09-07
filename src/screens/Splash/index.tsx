import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Easing, Animated, Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./../../../App";
import Images from "../../constants/images";
import { INTRO } from "../../navigation/navigationConstants";
import color from "../../constants/color";


type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'SPLASH'> };

const { height, width } = Dimensions.get('window');

export default function SplashScreen({ navigation }: Props) {
    const progress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(progress, {
            toValue: 1,
            duration: 2500,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => {
            navigation.replace(INTRO);
        });
    }, []);

    const widthAnim = progress.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "100%"],
    });

    return (
        <View style={styles.container}>
            <Image source={Images.splash} style={styles.img} />
            <Text style={styles.text}>Loading brands...</Text>
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
        alignItems: "center",
        backgroundColor: color.WHITE,
    },
    img: {
        width: width * 0.5,
        height: width * 0.5,
        resizeMode: "contain"
    },
    text: {
        marginTop: height / 15,
        fontSize: 16,
        fontWeight: '700',
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