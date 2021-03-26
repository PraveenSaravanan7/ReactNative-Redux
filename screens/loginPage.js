import React, { useState } from 'react'
import { View, SafeAreaView, ScrollView, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Title, Button, TextInput , Chip} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonLg } from '../CustomComponents';
import { GS } from '../GlobalStyles';
import {loginAction} from '../actions/loginAction'
export const loginPage = ({ navigation }) => {
    var [email, setEmail] = useState()
    var [password, setPassword] = useState()
    const counter = useSelector(state => state.myCounter.counter);
    const user = useSelector(state => state.logIn);
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={GS.container}>
        <ScrollView style={GS.scrollView}>
                <Text style={{fontWeight:'bold', fontSize:35, marginTop:30}} >
                    Login to App {counter} {user.userid}
                </Text>
                <View style={{marginTop:30}} >            
                    <TextInput style={GS.input_two} label="Email" onChangeText={text => setEmail(text)} />
                    <TextInput style={GS.input_two} label="Password" onChangeText={text => setPassword(text)} />
                </View>
                <ButtonLg disabled={false} style={{marginTop:20}}  onPress={() => {loginAction(dispatch, email, password)}} >Login</ButtonLg>
                <ButtonLg disabled={false} style={{marginTop:20}}  onPress={() => {navigation.push("homePage")}} >Login</ButtonLg>
                <View style={{alignItems:'center',marginTop: 30}} >
                <Text style={{color:'#c4c4c4', fontSize:13, textAlign:'center'}} >By continue to login, you accept our company's {'\n'}
                <Text style={{color:'#ff124d', fontSize:13,}} >Terms & Conditions</Text> and <Text style={{color:'#ff124d', fontSize:13,}} >Private policies</Text>.
                 </Text>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}
