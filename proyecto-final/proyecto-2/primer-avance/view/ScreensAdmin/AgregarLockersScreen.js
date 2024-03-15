import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function AgregarLockersScreen() {
  const [formData, setFormData] = useState({
    nameLocker: '',
    size: '',
    ubicacion: '',
    observaciones: ''
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
      nameLocker: '',
      size: '',
      ubicacion: '',
      observaciones: ''
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
  
      <TextInput
        style={styles.input}
        placeholder="Número de Locker"
        keyboardType="numeric"
        value={formData.nameLocker}
        onChangeText={(text) => handleChange('nameLocker', text)}
      />
      <Text style={styles.label}>Tamaño de Locker:</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[styles.radioOption, formData.size === 'Chico 40cmX55cm' && styles.selected]}
          onPress={() => handleChange('size', 'Chico 40cmX55cm')}
        >
          <Text style={styles.radioText}>Chico 40cmX55cm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioOption, formData.size === 'Grande 50cmX70cm' && styles.selected]}
          onPress={() => handleChange('size', 'Grande 50cmX70cm')}
        >
          <Text style={styles.radioText}>Grande 50cmX70cm</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Ubicación:</Text>
      <View style={styles.radioContainer}>
        {/* Ubicaciones */}
        <TouchableOpacity
          style={[styles.radioOption, formData.ubicacion === 'Áreas de producción' && styles.selected]}
          onPress={() => handleChange('ubicacion', 'Áreas de producción')}
        >
          <Text style={styles.radioText}>Áreas de producción</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioOption, formData.ubicacion === 'Almacenes' && styles.selected]}
          onPress={() => handleChange('ubicacion', 'Almacenes')}
        >
          <Text style={styles.radioText}>Almacenes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioOption, formData.ubicacion === 'Oficinas administrativas' && styles.selected]}
          onPress={() => handleChange('ubicacion', 'Oficinas administrativas')}
        >
          <Text style={styles.radioText}>Oficinas administrativas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioOption, formData.ubicacion === 'Áreas de mantenimiento' && styles.selected]}
          onPress={() => handleChange('ubicacion', 'Áreas de mantenimiento')}
        >
          <Text style={styles.radioText}>Áreas de mantenimiento</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioOption, formData.ubicacion === 'Áreas de logística y envío' && styles.selected]}
          onPress={() => handleChange('ubicacion', 'Áreas de logística y envío')}
        >
          <Text style={styles.radioText}>Áreas de logística y envío</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioOption, formData.ubicacion === 'Áreas de servicios.' && styles.selected]}
          onPress={() => handleChange('ubicacion', 'Áreas de servicios.')}
        >
          <Text style={styles.radioText}>Áreas de servicios.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioOption, formData.ubicacion === 'Áreas de ingeniería' && styles.selected]}
          onPress={() => handleChange('ubicacion', 'Áreas de ingeniería')}
        >
          <Text style={styles.radioText}>Áreas de ingeniería</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioOption, formData.ubicacion === 'Áreas de seguridad' && styles.selected]}
          onPress={() => handleChange('ubicacion', 'Áreas de seguridad')}
        >
          <Text style={styles.radioText}>Áreas de seguridad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioOption, formData.ubicacion === 'Area de Transportes' && styles.selected]}
          onPress={() => handleChange('ubicacion', 'Area de Transportes')}
        >
          <Text style={styles.radioText}>Area de Transportes</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.textarea}
        placeholder="Observaciones"
        multiline={true}
        numberOfLines={4}
        value={formData.observaciones}
        onChangeText={(text) => handleChange('observaciones', text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Agregar Locker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Regresar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  radioOption: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 5,
  },
  radioText: {
    fontSize: 16,
  },
  selected: {
    backgroundColor: 'blue', // Cambia el color de selección aquí
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

