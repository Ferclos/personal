import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function AgregarUbicacionScreen() {
  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    console.log('Datos enviados');
    // Limpia el formulario después del envío
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Código de ubicación"
      />
      <TextInput
        style={[styles.input, { height: 50 }]}
        placeholder="Area ej: Area de almacenes!"
        multiline={true}
      />
      <TextInput
        style={[styles.input, { height: 60 }]}
        placeholder="Referencia ej: Primera puerta a la derecha"
        multiline={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Agregar ubicación</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Regresar')}>
        <Text style={styles.buttonText}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "#2c3e50",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
