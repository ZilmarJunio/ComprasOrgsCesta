import React from 'react';
import {StyleSheet, Image, Dimensions, Text, View} from 'react-native';

import top from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
    <Image source={top} style={styles.top} />
    <Text style={styles.title}>Detalhes da Compra</Text>

    <View>
        <Text>Cesta de Verduras</Text>
        <Text>Fazenda dú Zilmá</Text>
        <Text>Os melhores produtos selecionados cuidadosamente da fazenda para a sua cozinha, uai!</Text>
    </View>

    </>
}

const styles = StyleSheet.create({

    top: {
        width: "100%",
        height: 578 / 768 * width,
    },

    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        padding: 16
    }

});
