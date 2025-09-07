import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, ImageBackground } from "react-native";
import Images from "../../constants/images";
import color from "../../constants/color";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./../../../App";
import { PRODUCT_LISTING } from "../../navigation/navigationConstants";

const { height, width } = Dimensions.get('window');

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, "PRODUCT_TYPES"> };

export default function ProductTypesScreen({ navigation }: Props) {

    const menuContainer = [
        { name: "Dresses", icon: Images.dresses },
        { name: "Tops", icon: Images.tops },
        { name: "Pants", icon: Images.pants },
        { name: "Jeans", icon: Images.jeans },
    ];

    const renderMenuItem = ({ item }: { item: { name: string; icon: any } }) => (
        <TouchableOpacity
            style={styles.menuContainer}
            onPress={() => {
                if (item.name === "Dresses") {
                    navigation.navigate(PRODUCT_LISTING);
                } else {
                    console.log(`${item.name} clicked`);
                }
            }}
        >
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
                    <Text style={styles.headerTitle}>Types</Text>
                    <FlatList
                        data={menuContainer}
                        numColumns={2}
                        renderItem={renderMenuItem}
                        keyExtractor={(item) => item.name}
                        showsVerticalScrollIndicator={false}
                        columnWrapperStyle={{ gap: 10 }}
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
        width: "55%",
    },
    flatListContainer: {
        height: height,
        width: "45%",
        backgroundColor: color.WHITE,
    },
    menuContainer: {
        marginVertical: 15,
        alignItems: "center",
    },
    iconContainerStyle: {
        borderRadius: 70 / 2,
        height: 70,
        width: 70,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
    },
    iconStyle: {
        height: 70,
        width: 70,
        resizeMode: "contain",
    },
    nameTextStyle: {
        color: color.BLACK,
        fontWeight: "500",
        fontSize: 10,
        marginTop: 6,
        paddingVertical: 3,
        paddingHorizontal: 8,
        textAlign: "center",
        borderRadius: 5,
    },
    headerTitle: {
        marginTop: 60,
        marginLeft: 15,
        fontSize: 16,
        fontWeight: '700',
        color: color.BLACK,
    },
    contentContainerStyle: {
        flexGrow: 1,
        alignItems: 'center'
    }
});

