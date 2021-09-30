import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ResultadoCalculo from './ResultadoCalculo';

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
        <View>
            <View>
                <Text>Valor do álcool</Text>
                <TextInput
                    onChangeText={setValorAlc}
                    value={valor_alc}
                    placeholder="Ex. 4.35"
                    keyboardType="numeric"
                ></TextInput>

                <Text>Valor da gasolina</Text>
                <TextInput
                    onChangeText={setValorGas}
                    value={valor_gas}
                    placeholder="Ex. 3.50"
                    keyboardType="numeric"
                ></TextInput>

                <Text>Consumo no álcool</Text>
                <TextInput
                    onChangeText={setConsuAlc}
                    value={consu_alc}
                    placeholder="Ex. 9.7"
                    keyboardType="numeric"
                ></TextInput>

                <Text>Consumo na gasolina</Text>
                <TextInput
                    onChangeText={setConsuGas}
                    value={consu_gas}
                    placeholder="Ex. 8.5"
                    keyboardType="numeric"
                ></TextInput>

                <Button 
                    onPress={validaVantagem}
                    title={textoBotao} 
                />
            </View>

            <ResultadoCalculo
                mensagem={mensagemVantagem} 
                resultado={vantagem} 
            />
        </View>
    );
}