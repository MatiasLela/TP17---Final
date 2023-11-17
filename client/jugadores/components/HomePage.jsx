import React from 'react';
import { View, Button, StyleSheet} from 'react-native';
import { Card } from 'react-native-paper';

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <View style={styles.space}>
                    <Button
                        title="Lista Jugadores"
                        color="#5555ad"
                        onPress={() => navigation.navigate('Lista')}
                    />
                </View>
                <View style={styles.space}>
                    <Button
                        title="Nacionalidad Argentina"
                        color="#5555ad"
                        onPress={() => navigation.navigate('Nacionalidad')}
                    />
                </View>
                <View style={styles.space}>
                    <Button
                        title="75-80kg"
                        color="#5555ad"
                        onPress={() => navigation.navigate('Peso')}
                    />
                </View>
                <View style={styles.space}>
                    <Button
                        title="Jugador mas alto"
                        color="#5555ad"
                        onPress={() => navigation.navigate('Altura')}
                    />
                </View>
                <View style={styles.space}>
                    <Button
                        title="Insertar Jugador"
                        color="#5555ad"
                        onPress={() => navigation.navigate('Insertar')}
                    />
                </View>
            </Card>
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    space: {
        marginBottom: 10,
    },
    card: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        elevation: 3,
    },
  });