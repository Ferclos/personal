import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function SolicitantesScreen() {
  // Datos simulados para mostrar la estructura de la tabla
  const solicitantes = [
    ['Solicitante', 'Telefono', 'E-mail', 'Departamento'],
    ['Solicitante 1', '1234567890', 'solicitante1@example.com', 'Administración'],
    ['Solicitante 2', '0987654321', 'solicitante2@example.com', 'Finanzas'],
    ['Solicitante 3', '1112223333', 'solicitante3@example.com', 'Contabilidad']
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.tableContainer}>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#000' }}>
            <Row data={solicitantes[0]} style={styles.header} textStyle={styles.headerText} />
            <Rows data={solicitantes.slice(1)} textStyle={styles.text} />
          </Table>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tableContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  header: { height: 40, backgroundColor: '#f2f2f2' },
  headerText: { margin: 6, fontWeight: 'bold', textAlign: 'center' },
  text: { margin: 6, textAlign: 'center' },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#ffd700',
  },
  contactText: {
    fontSize: 16,
  },
});
