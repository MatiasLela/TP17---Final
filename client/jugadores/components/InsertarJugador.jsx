import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';

const FormularioJugador = () => {
    const [nombre, setNombre] = useState('');
    const [posicion, setPosicion] = useState('');
    const [edad, setEdad] = useState('');
    const [estatura, setEstatura] = useState('');
    const [peso, setPeso] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [apariciones, setApariciones] = useState('');
    const [apariciones_sustituto, setAparicionesSustituto] = useState('');
    const [atajadas, setAtajadas] = useState('');
    const [goles_concedidos, setGolesConcedidos] = useState('');
    const [asistencias, setAsistencias] = useState('');
    const [faltas_cometidas, setFaltasCometidas] = useState('');
    const [faltas_sufridas, setFaltasSufridas] = useState('');
    const [tarjetas_amarillas, setTarjetasAmarillas] = useState('');
    const [tarjetas_rojas, setTarjetasRojas] = useState('');

    const handleSubmit = () => {

        axios.post('http://10.0.3.225:8080/jugador/agregar', {
            nombre,
            posicion,
            edad,
            estatura,
            peso,
            nacionalidad,
            apariciones,
            apariciones_sustituto,
            atajadas,
            goles_concedidos,
            asistencias,
            faltas_cometidas,
            faltas_sufridas,
            tarjetas_amarillas,
            tarjetas_rojas,
        })
            .then(response => {
                console.log('Jugadoor agregado:', response.data);
                setNombre('');
                setPosicion('');
                setEdad('');
                setEstatura('');
                setPeso('');
                setNacionalidad('');
                setApariciones('');
                setAparicionesSustituto('');
                setAtajadas('');
                setGolesConcedidos('');
                setAsistencias('');
                setFaltasCometidas('');
                setFaltasSufridas('');
                setTarjetasAmarillas('');
                setTarjetasRojas('');
            })
            .catch(error => console.error(error));
    };

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
            <Text>Agregar Jugador:</Text>
            <TextInput
                placeholder="Nombre"
                value={nombre}
                onChangeText={text => setNombre(text)}
            />
            <TextInput
                placeholder="Posicion"
                value={posicion}
                onChangeText={text => setPosicion(text)}
            />
            <TextInput
                placeholder="Edad"
                value={edad}
                onChangeText={text => setEdad(text)}
            />
            <TextInput
                placeholder="Estatura"
                value={estatura}
                onChangeText={text => setEstatura(text)}
            />
            <TextInput
                placeholder="Peso"
                value={peso}
                onChangeText={text => setPeso(text)}
            />
            <TextInput
                placeholder="Nacionalidad"
                value={nacionalidad}
                onChangeText={text => setNacionalidad(text)}
            />
            <TextInput
                placeholder="Apariciones"
                value={apariciones}
                onChangeText={text => setApariciones(text)}
            />
            <TextInput
                placeholder="Apariciones S."
                value={apariciones_sustituto}
                onChangeText={text => setAparicionesSustituto(text)}
            />
            <TextInput
                placeholder="Atajadas"
                value={atajadas}
                onChangeText={text => setAtajadas(text)}
            />
            <TextInput
                placeholder="Goles Concedidos"
                value={goles_concedidos}
                onChangeText={text => setGolesConcedidos(text)}
            />
            <TextInput
                placeholder="Asistencias"
                value={asistencias}
                onChangeText={text => setAsistencias(text)}
            />
            <TextInput
                placeholder="Faltas Cometidas"
                value={faltas_cometidas}
                onChangeText={text => setFaltasCometidas(text)}
            />
            <TextInput
                placeholder="Faltas Sufridas"
                value={faltas_sufridas}
                onChangeText={text => setFaltasSufridas(text)}
            />
            <TextInput
                placeholder="Tarjetas Amarillas"
                value={tarjetas_amarillas}
                onChangeText={text => setTarjetasAmarillas(text)}
            />
            <TextInput
                placeholder="Tarjetas Rojas"
                value={tarjetas_rojas}
                onChangeText={text => setTarjetasRojas(text)}
            />
            <Button title="Agregar Alumno" onPress={handleSubmit} />
            </Card>
        </View>
    );
};

export default FormularioJugador;

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