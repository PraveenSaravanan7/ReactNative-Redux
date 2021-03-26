import React from 'react'
import { View, SafeAreaView, ScrollView, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Title, Button, TextInput , Chip} from 'react-native-paper';
import { ButtonLg } from '../CustomComponents';
import { GS } from '../GlobalStyles';

export const homePage = () => {
    return (
        <SafeAreaView style={GS.container}>
            <ScrollView style={GS.scrollView}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} >
                    <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png' }} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
                </TouchableOpacity>     
                <Text style={{ fontWeight: 'bold', fontSize: 35, marginTop: 30 }} >
                    home Page
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}
