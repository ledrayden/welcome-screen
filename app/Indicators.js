import React from 'react';
import { View, StyleSheet } from 'react-native';

const Indicators = ({ indicatorCount, currentSliderIndex }) => {
    if (!indicatorCount || typeof indicatorCount !== 'number') return null;

    let indicators = [];
    for (let i = 0; i < indicatorCount; i++) {
        indicators.push(i);
    }

    return (
        indicators.map((indicator, index) => (
            <View
                key={indicator.toString()}
                style={[
                    styles.indicator, index === currentSliderIndex ?  styles.selected : styles.unSelected
                ]}
            />
        ))
    );
};

const styles = StyleSheet.create({
    indicator: {
        width: 10,
        height: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    selected: {
        backgroundColor: 'white',
    },
    unSelected: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'white',
    }
});

export default Indicators;