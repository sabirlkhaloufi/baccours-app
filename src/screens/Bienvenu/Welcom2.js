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
import Icon from "react-native-vector-icons/AntDesign";
import Button from "../../components/Button";

// import { fontLater } from "../../components/Font";
const Welcom2 = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <StatusBar />
      <View style={styles.bienvenuscreen}>
        <TouchableOpacity style={styles.skip}>
          <Text>Skip</Text>
        </TouchableOpacity>
        <View style={styles.boxtop}>
          <Text style={styles.title}>Fees</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt dolore magna aliqua
          </Text>
          <Image
            style={styles.imgcircleright}
            source={require("../../assets/images/Ellipsesmallyellow.png")}
          />
          <Image
            style={styles.imgcirclerleft}
            source={require("../../assets/images/Ellipsesmallblue.png")}
          />
        </View>
        <View style={styles.imgBox}>
          <Image
            style={styles.imgfille}
            source={require("../../assets/images/welcome2/young.png")}
          />
          <Image
            style={styles.circlered}
            source={require("../../assets/images/Ellipsew2.png")}
          />
        </View>

        <Button navigation={navigation} screen={"Home"} content={"Next"}/>
      </View>
    </View>
  );
};

export default Welcom2;

const styles = StyleSheet.create({
  bienvenuscreen: {
    marginHorizontal: 30,
    justifyContent: "between",
  },
  Container: {
    position: "relative",
  },
  boxtop: {
    marginTop: "5%",
    position: "relative",
    height: 180,
  },
  imgcirclerleft: {
    position: "absolute",
    left: 0,
    bottom: 0,
  },

  imgcircleright: {
    position: "absolute",
    right: 0,
    bottom: 25,
  },
  skip: {
    marginTop: "5%",
    alignSelf: "flex-end",
    padding: 10,
  },

  imgBox: {
    position: "relative",
    height: "50%",
  },
  imgfille:{
    width:380,
    height:650,
    alignSelf:"flex-end",
    position:"relative",
    // top:"2%",
    left:120,
  },
  circlered: {
    position: "absolute",
    left: -30,
    top: "45%",
  },
  title: {
    fontSize: 35,
    fontStyle: "normal",
    textTransform: "capitalize",
  },
  paragraph: {
    paddingTop: "5%",
    fontSize: 14,
    fontStyle: "normal",
    color: "#6F6F79",
    width: 200,
  }
});
