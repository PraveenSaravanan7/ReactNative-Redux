import React, { useEffect } from 'react'
import { View, SafeAreaView, ScrollView, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Title, Button, TextInput , Chip} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonLg } from '../CustomComponents';
import { GS } from '../GlobalStyles';

import { usersAction } from "../actions/usersAction";

export const homePage = ({navigation}) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.logIn);
    const users = useSelector(state => state.myUsers);
    useEffect(() => {
       if(!user.userid){
           console.log('yes')
           navigation.replace('loginPage')
       }
       usersAction(dispatch)
    }, []) 
    return (
        <SafeAreaView style={GS.container}>
            <ScrollView style={GS.scrollView}>
                {/* <TouchableOpacity onPress={() => { navigation.goBack() }} >
                    <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png' }} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
                </TouchableOpacity>      */}
                <Text style={{ fontWeight: 'bold', fontSize: 35, marginTop: 30 }} >
                    home Page {user.userid} len: {users.users.length}
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}
