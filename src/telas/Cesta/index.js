import React from 'react';
import {StyleSheet, Image, Dimensions, Text, View} from 'react-native';

import top from '../../../assets/topoZJ.jpg';
import logo from '../../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
    <Image source={top} style={styles.top} />
    <Text style={styles.title}>Detalhes da Compra</Text>

    <View style={styles.View1Prop}>

        <Text style={styles.farmName}>Cesta de Verduras</Text>

        <View style={styles.fazenda}>
            <Image source={logo} style={styles.logoFarm}/>
            <Text style={styles.name}>Jenny Jack Farm</Text>
        </View>

        <Text style={styles.description}>Produtos selecionados cuidadosamente da fazenda para sua cozinha!</Text>
        <Text style={styles.preco}>R$ 40</Text>

    </View>

    </>
}

const styles = StyleSheet.create({

    fazenda: {
        flexDirection: "row", /*alinha os itens em sequencia, mesma linha - seu oposto é o column*/
        paddingVertical: 26
    },

    View1Prop: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },

    top: {
        width: "100%",
        height: 578 / 768 * width,
    },

    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 16,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },

    name: {
        color: "#464646",
        fontSize: 14,
        lineHeight: 30,
        fontWeight: "bold",
    },

    farmName: {
        color:"#464646",
        fontSize: 18,
        lineHeight: 18,
        fontWeight: "bold",

    },

    description: {
        color: "black",
        fontSize: 15,
    },

    preco:{
        color: "green",
        fontSize: 25,
        fontWeight: "bold",
        lineHeight: 42,
        marginTop: 8,
    },

    logoFarm: {
        width:32,
        height:32,
    }

});
