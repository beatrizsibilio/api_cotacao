import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Cotacao from './componentes/DadosCotacao';
import Api from './componentes/Api';

export default function App() {
	const [dolar, setDolar] = useState(0);
	
	async function carregaCotacao(){
		const resposta = await Api.get('/last/USD-BRL');
		setDolar(resposta.data.USDBRL);
	}
	
	return (
		<View style={styles.container}>
			  <View style={styles.bloco}>
				<Text style={styles.texto}>Cotação de moedas</Text>

				<TouchableOpacity 
					style={styles.botao}
					onPress={carregaCotacao}
				>
					<Text style={styles.textoBotao}>Dólar para real</Text>
				</TouchableOpacity>
			  </View>
			
			<Cotacao data={dolar}/>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	
	bloco: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	
	texto: {
		fontSize:20,
		textAlign: 'center',
	},
	
	botao: {
		width: '10%',
		backgroundColor:'black',
		
	},
	
	textoBotao: {
		fontSize:20,
		textAlign: 'center',
		color:'white',
	}
});