import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ToastAndroid, Platform, ActivityIndicator, Dimensions, ImageBackground, Alert } from "react-native";
import Images from "../../constants/images";
import color from "../../constants/color";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./../../../App";


const { height, width } = Dimensions.get('window');

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, "PRODUCT_LISTING"> };

export default function ProductListingScreen({ navigation }: Props) {
    const [loading, setLoading] = useState<boolean>(false);
    const [dressData, setDressData] = useState<any[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://t03.tryndbuy.com/api/GetMappedSKUDetails", {
                method: "GET",
                headers: {
                    authID: "3c643a25e11144ad",
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();
            if (result && JSON.parse(result)) {
                setDressData(JSON.parse(result).MappedSkuList);
            } else {
                console.log("MappedSkuList not found in response:", result);
            }
        } catch (error) {
            console.error("API Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const showToast = (msg: string) => {
        if (Platform.OS === "android") {
            ToastAndroid.show(`SKUID: ${msg}`, ToastAndroid.SHORT);
        } else {
            Alert.alert("Item Clicked", `SKUID: ${msg}`); // iOS fallback
        }
    };

    const renderMenuItem = ({ item }: { item: { name: string; icon: any } }) => (
        <TouchableOpacity style={styles.menuContainer} onPress={() => { showToast(item.SKUID) }}>
            <View style={styles.iconContainerStyle}>
                <Image source={{ uri: `https://demo03.tryndbuy.com/images/Th${item.SKUID}.jpg` }} style={styles.iconStyle} />
            </View>
            <Text style={styles.labelStyle}>{item.SKUID}</Text>
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="blue" />
            ) : (
                <ImageBackground source={Images.bg} style={styles.bgImageContainer}>
                    <Image style={styles.modelStyle} source={Images.model} />

                    <View style={styles.flatListContainer}>
                        <Text style={styles.headerTitle}>Dresses</Text>
                        <FlatList
                            data={dressData}
                            numColumns={2}
                            renderItem={renderMenuItem}
                            keyExtractor={(item) => item.SKUID}
                            showsVerticalScrollIndicator={false}
                            columnWrapperStyle={{ gap: 10 }}
                            contentContainerStyle={styles.contentContainerStyle}
                        />
                    </View>
                </ImageBackground>
            )}
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
        height: 80,
        width: 80,
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
    labelStyle: {
        marginTop: 8,
        fontSize: 8,
        fontWeight: "500",
    },
    contentContainerStyle: {
        flexGrow: 1,
        alignItems: 'center'
    }
});

