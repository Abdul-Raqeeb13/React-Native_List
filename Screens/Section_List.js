import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

export default function Section_List() {
    const users = [
        {
            name: "Abdul Raqeeb",
            courses: ["HTML", "CSS"]
        },
        {
            name: "Abdul Haseeb",
            courses: ["JS", "Bootstrap"]
        },
        {
            name: "Abdul Muneeb",
            courses: ["Tailwind CSS", "Firebase"]
        },
        {
            name: "Abdul Karim",
            courses: ["React JS", "Libraries"]
        },
        {
            name: "Abdul Hadi",
            courses: ["Material UI", "Mongo DB"]
        },
        {
            name: "Abdul Qadir",
            courses: ["Node JS", "Express JS"]
        },
        {
            name: "Muhammad Qavi",
            courses: ["React Native", "Mobile App"]
        },
    ];

    const sections = users.map(user => ({
        title: user.name,
        data: user.courses
    }));

    return (
        <>
            <Text>Show data using section list</Text>
            <View>
                <SectionList 
                    sections={sections}
                    renderItem={({ item }) => <Text style={styles.txtStyle}>{item}</Text>}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.headerStyle}>{title}</Text>
                    )}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    txtStyle: {
        fontSize: 30,
        backgroundColor: "#D3D3D3",
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    headerStyle: {
        fontSize: 25,
        backgroundColor: "#F3F3F3",
        padding: 10,
        color : "red",
        marginTop: 10,
    }
});
