import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";

const url ="https://fakestoreapi.com/products"

export default function Products(){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result =>{
                setIsLoading(false);
                setData(result);
            }, error =>{
                setIsLoading(false);
                setError(error);
            })
    }, []);

   
    console.log(data)
    
    const getContent = () => {
        if(isLoading){
            return(
                <View>
                    <Text style={styles.textSize}>Loading data...</Text>
            <ActivityIndicator size="large"/>
                </View>
            );
        }
        if(error){
            return <Text style={styles.textSize}>Error: {error}</Text>
    }
    return(
        <View style={styles.FlatListContainer}>
            <FlatList
            data ={data}
            renderItem={({item}) =>(
                <View>
                    <Image source={{uri: item.image}} style={styles.image}/>
                    <Text style={styles.text}>Name: {item.title}</Text>
                </View>
            )}
            />
        </View> 
    )}

   


}
const styles = StyleSheet.create({
    textSize: {
        fontSize: 20,
    },
    image:{
        width: 100,
        height: 100,
        alignItems: "center",
    },
    FlatListContainer: {
        fontFamily: "arial",
    },

})