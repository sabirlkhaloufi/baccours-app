import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

const CategoryItem = ({key, category})=> {

    return (
        <TouchableOpacity style={styles.categoryitem}>
        <Image
          style={styles.circlered}
          source={require("../assets/images/home/cat.png")}
        />
        <Text style={styles.categorytitle}>{category}</Text>
        <Text style={styles.coursnumber}>20 course</Text>
        </TouchableOpacity>
    )
  
}

export default CategoryItem

const styles = StyleSheet.create({
    categoryitem:{
        width:150,
        height:150,
        backgroundColor:"#fff",
        borderRadius:10,
        padding:10,
        alignContent:"center",
        justifyContent:"center",
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,
      },
      categorytitle:{
        fontSize:20,
        fontWeight:"bold",
      },
      coursnumber:{
        fontSize:16,
        color:"#6F6F79",
      }
})