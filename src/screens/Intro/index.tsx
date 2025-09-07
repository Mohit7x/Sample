import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./../../../App";
import Images from "../../constants/images";
import { FACE_UPLOAD } from "../../navigation/navigationConstants";
import color from "../../constants/color";
import { IntroScreenData } from "../../constants/constants";

const { width } = Dimensions.get('window');
type Props = { navigation: NativeStackNavigationProp<RootStackParamList, "INTRO"> };


export default function IntroScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Image source={Images.profile} style={styles.profileImageStyle} />
            <View style={styles.messageContainer}>
                <Text style={styles.messageTextStyle}>
                    {IntroScreenData.message}
                </Text>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate(FACE_UPLOAD)}>
                    <Image source={Images.next} style={styles.arrow} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    messageContainer: {
        borderWidth: 1,
        borderColor: color.GRAY,
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginHorizontal: 30,
    },
    profileImageStyle: {
        width: width * 0.6,
        height: width * 0.9,
        resizeMode: "contain"
    },
    messageTextStyle: {
        marginTop: 20,
        fontSize: 16,
        textAlign: "left",
        width: width * 0.7,
    },
    arrow: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    buttonContainer:{
        alignSelf: 'flex-end',
    }
});
