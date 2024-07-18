import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

export default function Flat_List() {

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
            <Text>List with flat components</Text>

            <View>
                {/* if component is out of screen flatlist automatically scroll the list which is not in the map */}
                <FlatList data = {users} renderItem = {({item})=> <Text style = {styles.txtStyle}>{item.name}</Text>}
                keyExtractor = {item=>item.id}/>
            </View>
        </>
    
)}

const styles = StyleSheet.create({
    txtStyle : {
        fontSize : 30,
        backgroundColor : "#D3D3D3",
        margin : 10,
        padding : 10,
        borderRadius : 10
    }
}) 
