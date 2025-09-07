import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, Alert } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./../../../App";
import ImagePicker from "react-native-image-crop-picker";
import Images from "../../constants/images";
import color from "../../constants/color";
import { PREVIEW } from "../../navigation/navigationConstants";

const { height, width } = Dimensions.get('window');

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, "FACE_UPLOAD"> };

export default function FaceUploadScreen({ navigation }: Props) {
    const [image, setImage] = useState<string | null>(null);

    const pickFromGallery = async () => {
        try {
            const result = await ImagePicker.openPicker({
                width: 300,
                height: 300,
                cropping: true,
                mediaType: "photo",
            });
            setImage(result.path);
            navigation.navigate(PREVIEW, { image: result.path });
        } catch (error: any) {
            if (error.message !== "User cancelled image selection") {
                Alert.alert("Error", "Failed to pick image");
            }
        }
    };

    const pickFromCamera = async () => {
        try {
            const result = await ImagePicker.openCamera({
                width: 300,
                height: 300,
                cropping: true,
                mediaType: "photo",
            });
            setImage(result.path);
            navigation.navigate(PREVIEW, { image: result.path });
        } catch (error: any) {
            if (error.message !== "User cancelled image selection") {
                Alert.alert("Error", "Failed to capture image");
            }
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.title}>Let’s add a Photo</Text>
            </View>

            <View style={styles.btnRow}>
                <TouchableOpacity onPress={pickFromGallery} style={styles.buttonContainer}>
                    <Image source={Images.gallery} style={styles.icon} />
                    <Text style={styles.buttonTitle}>From Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pickFromCamera} style={styles.buttonContainer}>
                    <Image source={Images.camera} style={styles.icon} />
                    <Text style={styles.buttonTitle}>Take a selfie</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
    },
    labelContainer: {
        marginTop: height * 0.1,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 30,
        color: color.GRAY,
    },
    btnRow: {
        flexDirection: "row",
        gap: width / 5,
        position: 'absolute',
        bottom: height * 0.1,
        alignSelf: 'center',
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    buttonTitle: {
        fontSize: 14,
        textAlign: 'center',
        color: color.BLACK,
    }
});