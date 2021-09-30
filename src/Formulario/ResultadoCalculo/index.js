import React from 'react';
import { View, Text, ShadowPropsTypesIOS } from 'react-native';

export default function ResultadoCalculo(props){
    return(
        <View>
            <Text>{props.resultado}</Text>
            <Text>{props.mensagem}</Text>
        </View>
    );
}
