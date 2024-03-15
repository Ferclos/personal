import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function HistorialReservasScreen() {
  // Datos simulados para mostrar la estructura de la tabla
  const tableData = [
    ['Solicitante', 'Locker', 'Tamaño', 'Ubicación', 'Reserva', 'Vencimiento', 'Estado'],
    ['Solicitante 1', 'A1', 'Chico', 'Almacenes', '2022-01-01', '2022-01-15', 'Activa'],
    ['Solicitante 2', 'B2', 'Grande', 'Áreas de producción', '2022-01-05', '2022-01-20', 'Vencida'],
    ['Solicitante 3', 'C3', 'Mediano', 'Áreas de servicios', '2022-01-10', '2022-01-25', 'Pendiente']
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#ccc' }}>
        <Row data={tableData[0]} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData.slice(1)} textStyle={styles.text} />
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, textAlign: 'center' },
});
