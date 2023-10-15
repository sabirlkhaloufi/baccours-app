import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({navigation,screen,content}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={styles.button}
    >
      <Text style={styles.buttonText}>{content}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
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
