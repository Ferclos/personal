import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';

export default function EditarPrecioScreen() {
  // Estado para almacenar los datos de los lockers
  const [lockersData, setLockersData] = useState([]);

  // Función para obtener los datos de los lockers
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../data/lockers.php');
        const data = await response.json();
        setLockersData(data);
      } catch (error) {
        console.error('Error fetching lockers data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#ddd' }}>
        <Row
          data={['Precio', 'Descripción', 'Dimensiones', 'Acción']}
          style={styles.head}
          textStyle={styles.text}
        />
        {lockersData.map((locker, index) => (
          <Row
            key={index}
            data={[
              locker.precio,
              locker.descripcion,
              locker.dimensiones,
              `Editar precio`
            ]}
            style={[styles.row, index % 2 && { backgroundColor: '#f2f2f2' }]}
            textStyle={styles.text}
          />
        ))}
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f2f2f2' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#fff', minHeight: 56 },
});
