import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ResultadoCalculo from './ResultadoCalculo';
import styles from './style';

export default function Formulario() {
    
    const [valor_alc,setValorAlc] = useState(null)
    const [valor_gas,setValorGas] = useState(null)
    const [consu_alc,setConsuAlc] = useState(null)
    const [consu_gas,setConsuGas] = useState(null)
    const [mensagemVantagem,setMensagemVantagem] = useState("Preencha os valores antes de calcular")
    const [vantagem,setVantagem] = useState(null)
    const [textoBotao,setTextoBotao] = useState("Calcular Vantagem")

    function calculaVantagem() {

        if((valor_alc/consu_alc) < (valor_gas/consu_gas)){
            return setVantagem("Álcool")
        }
        else{
            if((valor_alc/consu_alc) > (valor_gas/consu_gas)){
                return setVantagem("Gasolina")
            }
            else{
                return setVantagem("Ambos")
            }
        }
    }

    function validaVantagem(){
        if(valor_alc != null && valor_gas != null && consu_alc != null && consu_gas != null){
            setMensagemVantagem("Combustível mais vantajoso:")
            calculaVantagem()
            setTextoBotao("Calcular Novamente")
            setValorAlc(null)
            setValorGas(null)
            setConsuAlc(null)
            setConsuGas(null)
            return
        }
        setVantagem(null)
        setTextoBotao("Calculo de Vantagem")
        setMensagemVantagem("Preencha os valores antes de calcular")
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Valor do álcool</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setValorAlc}
                    value={valor_alc}
                    placeholder="Ex. 4.35"
                    keyboardType="numeric"
                ></TextInput>

                <Text style={styles.formLabel}>Valor da gasolina</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setValorGas}
                    value={valor_gas}
                    placeholder="Ex. 3.50"
                    keyboardType="numeric"
                ></TextInput>

                <Text style={styles.formLabel}>Consumo no álcool</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setConsuAlc}
                    value={consu_alc}
                    placeholder="Ex. 9.7"
                    keyboardType="numeric"
                ></TextInput>

                <Text style={styles.formLabel}>Consumo na gasolina</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setConsuGas}
                    value={consu_gas}
                    placeholder="Ex. 8.5"
                    keyboardType="numeric"
                ></TextInput>

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => {
                        validaVantagem()
                    }}
                >
                    <Text style={styles.formLabel}>{textoBotao}</Text>
                </TouchableOpacity>
            </View>

            <ResultadoCalculo
                mensagem={mensagemVantagem} 
                resultado={vantagem} 
            />
        </View>
    );
}