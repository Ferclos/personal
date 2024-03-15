import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function HistorialPagoScreen() {
  // Datos simulados para mostrar la estructura de la tabla
  const tableData = [
    ['Solicitante', 'Fecha', 'Monto', 'Locker', 'Estado', 'Ubicación'],
    ['Solicitante 1', '2022-01-01', '$100', 'A1', 'Pagado', 'Almacences'],
    ['Solicitante 2', '2022-01-02', '$200', 'B2', 'Pendiente', 'Áreas de producción'],
    ['Solicitante 3', '2022-01-03', '$300', 'C3', 'Rechazado', 'Áreas de servicios'],
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