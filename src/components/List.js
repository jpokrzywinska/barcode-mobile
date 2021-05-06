import React from 'react';
import { SectionList, StyleSheet, View, Text } from 'react-native';


export default function List({ data }) {
    const group = () => {
        var ordersWithFronts = new Map();
        data.forEach(entry => {
            const key = entry.order.id;
            if (!ordersWithFronts.has(key)) {
                ordersWithFronts.set(key, { order: entry.order, fronts: [] });
            }
            ordersWithFronts.get(key).fronts.push(entry.front);
        });
        return ordersWithFronts;
    };
    const sections = [];
    group().forEach(entry => {
        sections.push({
            title: entry.order.name,
            data: entry.fronts.map(front => front.dimensions.height + " x " + front.dimensions.width)
        });
    })
    return (
        <View style={styles.list}>
            <SectionList sections={sections}
                renderItem={({ item }) => <Text>{item}</Text>}
                renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
        </View>
    );

}
const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
});