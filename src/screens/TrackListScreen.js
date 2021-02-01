import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const TrackListScreen = ({navigation}) => {
    return <>
            <Button title="GO BACK" onPress={() => navigation.navigate('Signup')}/>
            <Text style={{color: 'plum', backgroundColor: 'brown', fontSize: 54}}>Track List Screen</Text>
            <Button title='Go to Track Detail'
            onPress={() => navigation.navigate('TrackDetail')}
        />
    </>
}

const styles = StyleSheet.create({

});

export default TrackListScreen;