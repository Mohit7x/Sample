import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./../../../App";
import { SUCCESS } from "../../navigation/navigationConstants";
import color from "../../constants/color";

const { height, width } = Dimensions.get('window');
type PreviewScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "PREVIEW">;
type PreviewScreenRouteProp = RouteProp<RootStackParamList, "PREVIEW">;


type Props = {
  navigation: PreviewScreenNavigationProp;
  route: PreviewScreenRouteProp;
};

export default function PreviewScreen({ navigation, route }: Props) {
  const { image } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.subtitle}>FACIAL ATTRIBUTES</Text>
        <Text style={styles.title}>Let’s add a Photo</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image source={{ uri: image }} style={styles.img} />
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(SUCCESS)}>
        <Text style={styles.btnText}>UPLOAD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  headerContainer: {
    marginTop: height * 0.1,
    borderBottomWidth: 1,
    borderColor: color.GRAY,
  },
  title: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10
  },
  subtitle: {
    color: color.GRAY,
  },
  profileContainer:{
    flex: 0.5,
    justifyContent: 'center',
  },
  img: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width / 2,
    marginBottom: 20,
    alignSelf: 'center',
    borderColor: color.GREEN,
    borderWidth: 2,

  },
  btn: {
    backgroundColor: color.BLACK,
    padding: 15,
    borderRadius: 5
  },
  btnText: {
    color: color.WHITE,
    fontWeight: "bold",
    textAlign: 'center',
  },
});