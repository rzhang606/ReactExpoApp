import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
const headerTitle = 'To Do';

<View style={styles.centered}>
    <Header title={headerTitle} />
</View>

const styles = StyleSheet.create({
    centered: {
        alignItems: 'center'
    }    
});
