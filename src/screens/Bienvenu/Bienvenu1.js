import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/AntDesign';

// import { fontLater } from "../../components/Font";
const Bienvenu1 = () => {
  return (
    <View style={styles.Container}>
      <StatusBar />
      <Image
        style={styles.Ellipseleft}
        source={require("../../assets/images/Ellipseleft.png")}
      />
      <Image
        style={styles.Ellipseright}
        source={require("../../assets/images/Ellipseright.png")}
      />

      <View style={styles.bienvenuscreen}>
        <View style={styles.boximg}>
          <Image
            style={styles.img}
            source={require("../../assets/images/womanlaptop.png")}
          />
          <Image
            style={styles.imgcirclered}
            source={require("../../assets/images/redcbienvenu.png")}
          />
          <Image
            style={styles.imgcircleleft}
            source={require("../../assets/images/Ellipsesmallyellow.png")}
          />
          <Image
            style={styles.imgcircleright}
            source={require("../../assets/images/Ellipsesmallblue.png")}
          />
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>Welcome to Learner</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt dolore magna aliqua
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
          <Icon name="leftcircle" size={30} color="#900" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bienvenu1;

const styles = StyleSheet.create({
  bienvenuscreen: {
    marginHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  Container: {
    position: "relative",
  },
  Ellipseleft: {
    position: "absolute",
    left: 0,
    top: "15%",
  },
  Ellipseright: {
    position: "absolute",
    right: 0,
    top: "4%",
  },
  boximg: {
    marginTop: "30%",
    position: "relative",
    height: 380,
  },
  imgcircleleft: {
    position: "absolute",
    top: "20%",
    left: "25%",
  },
  imgcircleright: {
    position: "absolute",
    bottom: 0,
    right: "15%",
  },
  imgcirclered: {
    position: "absolute",
    zIndex: -2,
    bottom: 10,
    left: "20%",
  },
  title: {
    paddingTop: "5%",
    textAlign: "center",
    fontSize: 35,
    fontStyle: "normal",
    textTransform: "capitalize",
  },
  paragraph: {
    paddingTop: "5%",
    textAlign: "center",
    fontSize: 14,
    fontStyle: "normal",
    color: "#6F6F79",
  },
  button: {
    marginTop: "10%",
    backgroundColor: "#4E74F9",
    width: "100%",
    paddingVertical: 15,
    borderRadius:12
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
  },
});
