import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, View } from "react-native";

export default function AgregarAdminScreen() {
  const [formData, setFormData] = useState({
    txtName: '',
    txtapMat: '',
    txtapPat: '',
    txtPwd: '',
    txtTelefono: '',
    txtEmail: '',
    txtDepto: ''
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
      txtEmail: '',
      txtDepto: ''
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        {/* <Text style={styles.title}>Agregar Administrador</Text> */}
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
        <View>
          <Text style={styles.radioLabel}>Departamento:</Text>
          <ScrollView style={styles.radioGroup}>
            <TouchableOpacity
              style={[styles.radioOption, formData.txtDepto === 'ADMIN' && styles.selected]}
              onPress={() => handleChange('txtDepto', 'ADMIN')}
            >
              <Text style={styles.radioText}>Administración</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioOption, formData.txtDepto === 'COMPR' && styles.selected]}
              onPress={() => handleChange('txtDepto', 'COMPR')}
            >
              <Text style={styles.radioText}>Compras</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioOption, formData.txtDepto === 'FIN' && styles.selected]}
              onPress={() => handleChange('txtDepto', 'FIN')}
            >
              <Text style={styles.radioText}>Finanzas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioOption, formData.txtDepto === 'INVS' && styles.selected]}
              onPress={() => handleChange('txtDepto', 'INVS')}
            >
              <Text style={styles.radioText}>Investigacion y Desarrollo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioOption, formData.txtDepto === 'MKT' && styles.selected]}
              onPress={() => handleChange('txtDepto', 'MKT')}
            >
              <Text style={styles.radioText}>Ventas y Marketing</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.radioOption, formData.txtDepto === 'LOG' && styles.selected]}
              onPress={() => handleChange('txtDepto', 'LOG')}
            >
              <Text style={styles.radioText}>Logística y Distribución</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioOption, formData.txtDepto === 'RH' && styles.selected]}
              onPress={() => handleChange('txtDepto', 'RH')}
            >
              <Text style={styles.radioText}>Recursos Humanos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.radioOption, formData.txtDepto === 'SST' && styles.selected]}
              onPress={() => handleChange('txtDepto', 'SST')}
            >
              <Text style={styles.radioText}>Seguridad y Salud en el Trabajo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.radioOption, formData.txtDepto === 'TI' && styles.selected]}
              onPress={() => handleChange('txtDepto', 'TI')}
            >
              <Text style={styles.radioText}>Tecnología de la Información</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  formContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#2c3e50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    backgroundColor: "#2c3e50",
  },
  radioLabel: {
    marginBottom: 5,
  },
  radioGroup: {
    width: '100%',
    marginBottom: 10,
  },
  radioOption: {
    backgroundColor: '#ddd',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  radioText: {
    fontSize: 16,
  },
  selected: {
    backgroundColor: '#3c3e50', // Cambia el color de selección aquí
  },
});
