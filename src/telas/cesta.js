import React from 'react';
import {StyleSheet, Image, Dimensions, Text, View} from 'react-native';

import top from '../../assets/hellen.jpeg';
import logo from '../../assets/hellen.jpeg';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
    <Image source={top} style={styles.top} />
    <Text style={styles.title}>Detalhes da Compra</Text>

    <View style={styles.View1Prop}>

        <View style={styles.fazenda}>
            <Image source={logo} style={styles.logoFarm}/>
            <Text style={styles.name}>Compre o seu Zilmar</Text>
        </View>
        <Text style={styles.farmName}>Me compra</Text>
        <Text style={styles.description}>Hellen, eu te amo</Text>
        <Text>promo</Text>
        <Text style={styles.preco}>10.000 R$ (Preço do seguro)</Text>

    </View>

    </>
}

const styles = StyleSheet.create({

    fazenda: {
        flexDirection: "row",
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
        lineHeight: 20,
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

    logoFarm: {
        width:32,
        height:32,/**/
    }

});
