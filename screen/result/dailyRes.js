import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,Image, Button} from "react-native";
import { Container, Content } from "native-base";

function dailyRes() {
    return(
        <>
        <View style = {styles.dailyView}>
        <View style = {styles.dailyresultBox}>
            <View style = {styles.boxImages}>
                <Image
                    source={require("./img/70percent.png")}
                    style={styles.teethImage}>
                </Image>
            </View>
            <View style = {styles.boxContents}>
                <Text style = {styles.boxContentsTitle}>6월 14일 12:00</Text>
                <Text style = {styles.boxContentsContent}>냠냠점수 80</Text>
            </View>
        </View>
        <View style = {styles.dailyresultBox}>
            <View style = {styles.boxImages}>
                <Image
                    source={require("./img/50percent.png")}
                    style={styles.teethImage}>
                </Image>
            </View>
            <View style = {styles.boxContents}>
                <Text style = {styles.boxContentsTitle}>6월 13일 08:00</Text>
                <Text style = {styles.boxContentsContent}>냠냠점수 50</Text>
            </View>
        </View>
        <View style = {styles.dailyresultBox}>
            <View style = {styles.boxImages}>
                <Image
                    source={require("./img/100percent.png")}
                    style={styles.teethImage}>
                </Image>
            </View>
            <View style = {styles.boxContents}>
                <Text style = {styles.boxContentsTitle}>6월 12일 15:00</Text>
                <Text style = {styles.boxContentsContent}>냠냠점수 100</Text>
            </View>
        </View>
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    dailyView:{
        flex:1,
    },
  dailyresultBox:{
    backgroundColor:"white",
    height:100,
    width:300,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:10,
    margin:20,
    padding:10,
    flexDirection:'row'
  },
  boxContents:{
      flex:2,
      backgroundColor:"white",
  },
  boxContentsTitle:{
      fontSize:15,
      fontWeight:"bold",
  },
  boxContentsContent:{
      marginTop:10,
      fontSize:15,
  },
  boxImages:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      marginRight:10
  },
  teethImage:{
      width:60,
      height:60,
  }
});
export default dailyRes;