import React from 'react';
import { View, Text, ShadowPropsTypesIOS } from 'react-native';
import styles from "./style";

export default function ResultadoCalculo(props){
    return(
        <View style={styles.resultado}>
            <Text style={styles.txtMensagem}>{props.mensagem}</Text>
            <Text style={styles.txtResultado}>{props.resultado}</Text>
        </View>
    );
}
