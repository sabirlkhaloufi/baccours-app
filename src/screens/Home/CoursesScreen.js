import { StyleSheet, Text, View, ScrollView,Image, FlatList , TextInput, TouchableOpacity } from "react-native";
import React, {useEffect} from "react";
import {Data} from '../../database/Data'
import CategoryItem from "../../components/CategoryItem";

const CoursesScreen = () => {

  useEffect(() => {
    console.log('====================================');
    console.log(Data);
    console.log('====================================');
  },[]);

  return (
    <View>
      <View style={styles.TopBar}>
      <Image
            style={styles.circle}
            source={require("../../assets/images/home/Circle.png")}
          />
        <View style={styles.hello}>
          <Text style={[styles.hellotext,{color:"#FFFFFF" , fontSize:20}]}>Hello Sabir</Text>
          <View style={styles.langue}><Text>ksksk</Text>
          </View>
        </View>
        <View style={styles.barSearch}>
        <TextInput
        style={styles.input}
        placeholder="Search For a Course"
      />
        </View>
      </View>
      <View style={styles.category}>
        
          <Text style={styles.explore}>Explore categories</Text>
         <FlatList
        data={Data}
        renderItem={({item}) => <CategoryItem key={item.id} category={item.category}/>}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listCategory}
      />
       
      </View>
    </View>
  );
};

export default CoursesScreen;

const styles = StyleSheet.create({
  TopBar: {
    position: 'relative',
    margin:8,
    backgroundColor: "#4E74F9",
    borderRadius:30,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:20,
  },
  circle: {
    position:"absolute",
    top: 0,
    left: 0,
  },
  hello:{
    marginTop:20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  barSearch:{
    marginTop:30,
    marginBottom:20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor:"#fff",
    borderRadius:30,
    height:45,
    paddingHorizontal:20,
  },
  explore:{
    fontSize:20,
    fontWeight:"bold",
  },
  category:{
    paddingHorizontal :8,
  },
  listCategory:{
    gap:10,
    paddingBottom:60,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    flexWrap:"wrap",
  }
});
