import React from 'react';
import {StyleSheet, Image, Dimensions, Text, View} from 'react-native';

import top from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
    <Image source={top} style={styles.top} />
    <Text style={styles.title}>Detalhes da Compra</Text>

    <View style={styles.cesta}>
        <Text style={styles.name}>Cesta de Verduras</Text>
        <Text style={styles.farmName}>Fazenda dú Zilmá</Text>
        <Text>Os melhores produtos selecionados cuidadosamente da fazenda para a sua cozinha, uai!</Text>
        <Text>40R$</Text>
    </View>

    </>
}

const styles = StyleSheet.create({

    cesta: {
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
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",

    }

});
