import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default function Grid_List() {

    const users = [
        {
            id: 1,
            name: "Abdul Raqeeb"
        },
        {
            id: 2,
            name: "Abdul Haseeb"
        },
        {
            id: 3,
            name: "Abdul Muneeb"
        },
        {
            id: 4,
            name: "Abdul Karim"
        },
        {
            id: 5,
            name: "Abdul Hadi"
        },
        {
            id: 6,
            name: "Abdul Qadir"
        },
        {
            id: 7,
            name: "Muahmmad Qavi"
        },
        {
            id: 8,
            name: "Muhammad Hashir"
        },
        {
            id: 9,
            name: "Mushammad Rizwan"
        },
        {
            id: 10,
            name: "Abdul Raqeeb"
        },
        {
            id: 7,
            name: "Muahmmad Qavi"
        },
        {
            id: 8,
            name: "Muhammad Hashir"
        },
        {
            id: 9,
            name: "Mushammad Rizwan"
        },
        {
            id: 10,
            name: "Abdul Raqeeb"
        },
        {
            id: 7,
            name: "Muahmmad Qavi"
        },
        {
            id: 8,
            name: "Muhammad Hashir"
        },
        {
            id: 9,
            name: "Mushammad Rizwan"
        },
        {
            id: 10,
            name: "Abdul Raqeeb"
        },
        {
            id: 7,
            name: "Muahmmad Qavi"
        },
        {
            id: 8,
            name: "Muhammad Hashir"
        },
        {
            id: 9,
            name: "Mushammad Rizwan"
        },
        {
            id: 10,
            name: "Abdul Raqeeb"
        },
        {
            id: 7,
            name: "Muahmmad Qavi"
        },
        {
            id: 8,
            name: "Muhammad Hashir"
        },
        {
            id: 9,
            name: "Mushammad Rizwan"
        },
        {
            id: 10,
            name: "Abdul Raqeeb"
        },
        {
            id: 7,
            name: "Muahmmad Qavi"
        },
        {
            id: 8,
            name: "Muhammad Hashir"
        },
      
    ]
    return (
        <View>

            <Text>Grid list using flex</Text>
            <ScrollView>
            <View style = {{flex : 1 , flexDirection : "row" , flexWrap : "wrap"}}>
                    {
                        users.map((item) =>
                            <Text style={styles.txtStyle}>{item.name}</Text>
                        )
                    }
            </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    txtStyle: {
        fontSize: 18,
        width : 110,
        height : 100,
        backgroundColor: "yellow",
        borderWidth : 2,
        borderColor : "black",
        borderStyle : "solid",
        margin: 5,
        padding: 5,
        textAlign : "center",
        textAlignVertical : "center",
        borderRadius: 10
    }
}) 
