import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'


export default function Map_list() {

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
    ]

  return (
    <>
       <>
            <Text>List with map coustom list</Text>

            <View>
                <ScrollView>
                {
                    users.map((item)=>
                        <Text style = {styles.txtStyle}>{item.name}</Text>
                    )
                }
                </ScrollView>
            </View>
        </>
    </>
  )
}


const styles = StyleSheet.create({
    txtStyle : {
        fontSize : 30,
        backgroundColor : "#D3D3D3",
        margin : 10,
        padding : 10,
        borderRadius : 10
    }
}) 
