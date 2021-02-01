import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = (props) => {
    const {signout} = useContext(AuthContext);
    return <>
            <Text style={{color: 'plum', backgroundColor: 'purple', fontSize: 48}}>Account Screen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout}/>
            </Spacer>
        </>
    ;
}

const styles = StyleSheet.create({

});

export default AccountScreen;