import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,Image, Button} from "react-native";
import { Container, Content } from "native-base";

function weeklyRes() {
    return(
        <>
        <View style = {styles.weeklyView}>
            <View style = {styles.weekTitle}>
                <Text style = {styles.arrowFont}>{`<`}</Text>
                <Text style = {styles.titleFont}>6월 첫째주</Text>
                <Text style = {styles.arrowFont}>{`>`}</Text>
            </View>
            <View style = {styles.imageView}>
                <Image
                    source={require("./img/low2.png")}
                    style={{height:200, width:240}}>
                </Image>
            </View>
            <View style = {styles.pointView}>
                <Text style = {styles.pointFont}>
                    냠냠점수 : 68점
                </Text>
                <Text style = {styles.pointFont}>
                    오른쪽이 많이 부었네요..
                </Text>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    weeklyView:{
        flex:1,
    },
    weekTitle:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    imageView:{
        flex:3,
        alignItems:'center',
    },
    arrowFont:{
        textAlign:"center",
        flex:1,
        fontSize:25,
        color:"gray",
    },
    titleFont:{
        textAlign:"center",
        flex:3,
        fontSize:25,
        fontWeight:'bold',
        alignItems:'center',
    },
    pointView:{
        flex:1.5,
        alignItems:"center",
        backgroundColor:"white",
    },
    pointFont:{
        fontSize :20,
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
  
});
export default weeklyRes;