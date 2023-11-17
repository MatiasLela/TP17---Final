import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';

const ListaArgentinos = ({ navigation }) => {
    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        axios.get('http://10.0.3.225:8080/jugadores/argentinos')
            .then(response => setJugadores(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.titulo}>Jugadores Argentinos:</Text>
                <FlatList
                    data={jugadores}
                    keyExtractor={(jugador) => jugador.id_jugador.toString()}
                    renderItem={({ item }) => (
                        <Card style={styles.card}>
                            <View>
                                <Text>Nombre: {item.nombre}</Text>
                                <Text>POS: {item.posicion}</Text>
                                <Text>Edad: {item.edad}</Text>
                                <Text>Est: {item.estatura}</Text>
                                <Text>P: {item.peso}</Text>
                                <Text>NAC: {item.nacionalidad}</Text>
                                <Text>Ap: {item.apariciones}</Text>
                                <Text>SUB: {item.apariciones_sustituto}</Text>
                                <Text>A: {item.atajadas}</Text>
                                <Text>GA: {item.goles_concedidos}</Text>
                                <Text>A: {item.asistencias}</Text>
                                <Text>FC: {item.faltas_cometidas}</Text>
                                <Text>FS: {item.faltas_sufridas}</Text>
                                <Text>TA: {item.tarjetas_amarillas}</Text>
                                <Text>TR: {item.tarjetas_rojas}</Text>
                            </View>
                        </Card>
                    )}
                />
            </Card>
        </View>
    );
};

export default ListaArgentinos;

const styles = StyleSheet.create({
    titulo: {
        textAlign: 'center',
        fontSize: 20,
    },
    container: {
        margin: 10,
        flex: 1,
        justifyContent: 'center',
    },
    card: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        elevation: 3,
    },
});