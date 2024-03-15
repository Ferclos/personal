import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, View } from "react-native";

export default function EditarUsuarioScreen() {
  const [formData, setFormData] = useState({
    txtName: '',
    txtapMat: '',
    txtapPat: '',
    txtPwd: '',
    txtTelefono: '',
    txtEmail: ''
  });

  const handleChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    console.log('Datos enviados:', formData);
    // Limpia el formulario después del envío
    setFormData({
      txtName: '',
      txtapMat: '',
      txtapPat: '',
      txtPwd: '',
      txtTelefono: '',
      txtEmail: ''
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={formData.txtName}
            onChangeText={(text) => handleChange('txtName', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Apellido Paterno"
            value={formData.txtapMat}
            onChangeText={(text) => handleChange('txtapMat', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Apellido Materno"
            value={formData.txtapPat}
            onChangeText={(text) => handleChange('txtapPat', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            keyboardType="numeric"
            value={formData.txtTelefono}
            onChangeText={(text) => handleChange('txtTelefono', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            value={formData.txtEmail}
            onChangeText={(text) => handleChange('txtEmail', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            value={formData.txtPwd}
            onChangeText={(text) => handleChange('txtPwd', text)}
          />
          <Text style={styles.passwordNote}>Nota: el formato de la contraseña es de 8 valores o más, una mayúscula y un número.</Text>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Guardar cambios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Regresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  formContainer: {
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  hr: {
    width: '25%',
    height: 3,
    backgroundColor: '#000',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordNote: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#2c3e50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
