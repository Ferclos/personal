import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';

class Login extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                nombre: '',
                password: ''
            };
        }
    
        handleLogin = () => {
            fetch('http://localhost:8081/routes/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: this.state.nombre,
                    password: this.state.password
                })
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('El usuario o contraseña son incorrectos');
                }
            })
            .then(usuario => {
                if (usuario.rol === 'C') {
                    // Redirigir a indexUsuario
                    this.props.navigation.navigate('IndexUsuario');
                } else if (usuario.rol === 'A') {
                    // Redirigir a indexAdmin
                    this.props.navigation.navigate('IndexAdmin');
                } else {
                    console.error('El usuario tiene un rol desconocido');
                }
            })
            .catch(error => console.error('Error de autenticación:', error.message));
        }
    
        render() {
            return (
                <View style={styles.formContainer}>
                    <View style={styles.form}>
                        <Text style={styles.header}>Locker's Company</Text>
                        <View style={styles.cuadro}>
                            <View style={styles.loginLabelContainer}>
                                <Text style={styles.loginLabel}> ~ Iniciar sesión ~</Text>
                            </View>
                            <Text style={styles.label}>Nombre:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ingresar solo letras"
                                onChangeText={nombre => this.setState({ nombre })}
                                value={this.state.nombre}
                            />
                            <Text style={styles.label}>Contraseña:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="**********"
                                secureTextEntry={true}
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                            />
                           <Button
    title="Ingresar"
    onPress={this.handleLogin}
    style={styles.button}
    color="#2c3e50" // Color del botón
/>

                            <TouchableOpacity style={[styles.button, styles.resetButton]}>
                                <Text style={styles.buttonText}>Borrar datos</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.link}>
                            <Text style={styles.linkText}>Registrarse</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }
    

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    form: {
        width: '80%',
        padding: 20,
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
        color: '#333',
    },
    cuadro: {
        marginTop: 15,
        width: '100%',
    },
    loginLabelContainer: {
        marginBottom: 15,
    },
    loginLabel: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'rgb(94, 94, 94)',
    },
    label: {
        marginBottom: 10,
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 3,
    },
    button: {
        backgroundColor: '#2c3e50',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
    resetButton: {
        backgroundColor: '#59405c',
    },
    link: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginBottom: 15,
    },
    linkText: {
        color: 'black',
    },
});

export default Login;