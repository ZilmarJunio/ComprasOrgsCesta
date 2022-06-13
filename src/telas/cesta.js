import React from 'react';
import {StyleSheet, Image, Dimensions, Text, View} from 'react-native';

import top from '../../assets/topoZJ.jpg';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
    <Image source={top} style={styles.top} />
    <Text style={styles.title}>Detalhes da Compra</Text>

    <View style={styles.View1Prop}>

            <View styles={styles.View2Prop}>
                <Image source={logo} style={styles.logoFarm}/>
                <Text style={styles.name}>Cesta de Verduras</Text>
            </View>

        <Text style={styles.farmName}>Fazenda dú Zilmá</Text>
        <Text style={styles.description}>Os melhores produtos selecionados cuidadosamente da fazenda para a sua cozinha, uai!</Text>
        <Text>Your mom price:</Text>
        <Text style={styles.preco}>40R$</Text>

    </View>

    </>
}

const styles = StyleSheet.create({

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
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },

    farmName: {
        color:"#464646",
        fontSize: 18,
        lineHeight: 40,
        fontWeight: "bold",

    },

    description: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        lineHeight: 26
    },

    preco:{
        color: "green",
        fontSize: 25,
        fontWeight: "bold",
        lineHeight: 42,
        marginTop: 8,
    },

    View2Prop: {
        flexDirection: "row",
    },

    logoFarm: {
        width:32,
        height:32,/**/
    }

});
