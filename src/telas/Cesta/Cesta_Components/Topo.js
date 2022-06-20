import React from "react";
import { Image , Dimensions} from "react-native";

import top from '../../../../assets/topoZJ.jpg';

const width = Dimensions.get('screen').width;

export default function Topo(){
    return <>
    <Image source={top} style={styles.top} />
    <Text style={styles.title}>Detalhes da Compra</Text>
    </>
}

const estilos = StyleSheet.create({

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

});