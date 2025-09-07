import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, ImageBackground } from "react-native";
import Images from "../../constants/images";
import color from "../../constants/color";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./../../../App";
import { PRODUCT_TYPES } from "../../navigation/navigationConstants";


const { height, width } = Dimensions.get('window');

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, "PRODUCT_LANDING"> };


export default function ProductLandingScreen({ navigation }: Props) {

    const menuContainer = [
        { name: "Dresses", icon: Images.dress },
        { name: "Makeup", icon: Images.brush },
        { name: "Goggles", icon: Images.glasses },
        { name: "Shoes", icon: Images.sneakers },
        { name: "Location", icon: Images.pictures },
    ];

    const renderMenuItem = ({ item }: { item: { name: string; icon: any } }) => (
        <TouchableOpacity
            onPress={() => {
                if (item.name === "Dresses") {
                    navigation.navigate(PRODUCT_TYPES);
                } else {
                    console.log(`${item.name} clicked`);
                }
            }}
            style={styles.menuContainer} activeOpacity={0.7}>
            <View style={styles.iconContainerStyle}>
                <Image style={styles.iconStyle} source={item.icon} />
            </View>
            <Text style={styles.nameTextStyle}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <ImageBackground source={Images.bg} style={styles.bgImageContainer}>
                <Image style={styles.modelStyle} source={Images.model} />

                <View style={styles.flatListContainer}>
                    <FlatList
                        data={menuContainer}
                        renderItem={renderMenuItem}
                        keyExtractor={(item) => item.name}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.contentContainerStyle}
                    />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImageContainer: {
        flex: 1,
        width: width,
        height: height,
        flexDirection: "row",
    },
    modelStyle: {
        height: height,
        width: "70%",
    },
    menuContainer: {
        marginVertical: 15,
        alignItems: "center",
    },
    flatListContainer: {
        height: height,
        width: "30%",
        backgroundColor: color.LIGHT_GRAY,
        opacity: 0.7,
        alignItems: "center",
    },
    iconContainerStyle: {
        borderRadius: 60 / 2,
        height: 60,
        width: 60,
        backgroundColor: color.WHITE,
        alignItems: "center",
        justifyContent: "center",
    },
    iconStyle: {
        height: 30,
        width: 30,
        resizeMode: "contain",
    },
    nameTextStyle: {
        color: color.WHITE,
        fontWeight: "500",
        fontSize: 10,
        marginTop: 6,
        paddingVertical: 3,
        paddingHorizontal: 8,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: color.GRAY,
    },
    contentContainerStyle: {
        flexGrow: 1,
        justifyContent: "center"
    }
});