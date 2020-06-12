import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button,Dimensions} from "react-native";
import { Container, Content } from "native-base";
import{
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
}from 'react-native-chart-kit'

function monthlyRes() {
    
    return(
        <View style={styles.monthView}>
            <View style = {styles.boxView}>
                <View style = {styles.boxContent}>
                    <Text style = {styles.boxContentFont}>5월</Text>
                </View>
                <View style={styles.boxChartImg}>
                    <LineChart
                    data={{
                        labels: [
                        '5월 첫째주',
                        '5월 둘째주',
                        '5월 셋째주',
                        '5월 넷째주',
                        ],
                        datasets: [
                        {
                            data: [13, 47, 68, 80],
                            strokeWidth: 2,
                        },
                        ],
                    }}
                    width={300}
                    height={170}
                    yAxisSuffix={'점'}
                    chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                        borderRadius: 16,
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                    />
                </View>
            </View>
            <View style = {styles.boxView}>
                <View style = {styles.boxContent}>
                    <Text style = {styles.boxContentFont}>6월</Text>
                </View>
                <View style={styles.boxChartImg}>
                    <LineChart
                    data={{
                        labels: [
                        '6월 첫째주',
                        '6월 둘째주',
                        '6월 셋째주',
                        '6월 넷째주',
                        ],
                        datasets: [
                        {
                            data: [80,72,88 ],
                            strokeWidth: 2,
                        },
                        ],
                    }}
                    width={300}
                    height={170}
                    yAxisSuffix={'점'}
                    chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                        borderRadius: 16,
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                    />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    monthView:{
        flex:1,
    },
    boxChartImg:{
        margin:1,
        borderColor:'black',
    },
    boxContent:{
        alignItems:'center'
    },
    boxView:{
        borderColor:'black',
    },
    boxContentFont:{
        fontSize:20,
        fontWeight:'bold',
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
export default monthlyRes;