import { useState, useEffect } from "react";
import {Text, View, StyleSheet, ActivityIndicator, FlatList
} from "react-native";


const url = "https://swapi.py4e.com/api/people";

export default function PokeStar() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          setData(result.results);
          setIsLoading(false);
        },
        (error) => {
          setError(error);
          setIsLoading(false);
        }
      );
  }, []);

  console.log(data);
  console.log(error);

  const getContent = () => {
    if (isLoading) {
      return (
        <View>
          <Text>Loading Data</Text>
          <ActivityIndicator
            size='large'
            color='green'
          />
        </View>
      );
    }
    if (error) {
      return <Text>Error</Text>;
    }
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <Text>Name: {item.name}</Text>
              <Text>Height: {item.height}</Text>
              <Text>Mass:{item.mass}</Text>
              <Text>Created: {item.created}</Text>
              <Text>Films: {item.films}</Text>

            </View>
          )}
        />
      </View>
    );
  };

  return <View>{getContent()}</View>;
}
const styles = StyleSheet.create({
  textProps: {
    fontSize: 20,
    color: "red",
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    BoxShadowColor: "#000",
    BoxShadowOffset: {width: 0, height: 2},
    BoxShadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 20,
  },
  image: {

  },
  errorStyle: {

  },
});