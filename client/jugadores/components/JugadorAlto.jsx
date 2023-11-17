import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';

const JugadorAlto = () => {
    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://10.0.3.225:8080/jugador/alto');
                setJugadores(response.data);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, []);

    const renderJugador = ({ item }) => (
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
    );

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.titulo}>Jugador Alto:</Text>
                <FlatList
                    data={jugadores ? [jugadores] : []}
                    keyExtractor={(item) => (item && item.id_jugador ? item.id_jugador.toString() : '')}
                    renderItem={renderJugador}
                />
            </Card>
        </View>
    );
};

export default JugadorAlto;

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