import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Separator from '../components/Separator';
import { FontAwesome5 } from '@expo/vector-icons'; // Ícone mensagem erro
export default function Home({ route }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Lava a Jato ViniBreno</Text>
            <Image
                style={styles.imgLogo}
                source={require('../../assets/car_washing_320.png')}
            />
            <Text style={styles.helloText}>Olá {route.params?.name},</Text>
            <Text style={styles.helloText}>Seja bem-vindo(a)!</Text>
            <Separator marginVertical={10} />
            <Text style={styles.helloText}>Não perca tempo e agende agora</Text>
            <View style={styles.contentAlert}>
                <Text style={styles.helloText}>a lavagem do seu carro </Text>
                <View style={styles.contentAlert}></View>
                <FontAwesome5
                    name='smile-wink'
                    size={24}
                    color='#FF5733'
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFC300',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#FF5733',
        textAlign: 'center',
        fontStyle: 'italic'
    },
    button: {
        backgroundColor: '#FF8C42',
        padding: 5,
        borderRadius: 5,
    },
    loginButton: {
        width: '50%',
        height: 40,
        backgroundColor: '#FF8C42',
        padding: 5,
        borderRadius: 5,
    },
    loginButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5733',
        textAlign: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#FF5733',
        textAlign: 'center',
    },
    input: {
        flex: 1,
        paddingHorizontal: 12,
        fontSize: 16,
    },
    inputView: {
        marginTop: 20,
        width: '95%',
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    touchableIcon: {
        padding: 4,
    },
    textSimple: {
        color: '#FF5733',
    },
    textSimpleJustify: {
        color: '#FF5733',
        width: '95%',
        textAlign: 'justify',
    },
    imgLogo: {
        marginBottom: 10
    },
    warningAlert: {
        paddingLeft: 2,
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    contentAlert: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});
