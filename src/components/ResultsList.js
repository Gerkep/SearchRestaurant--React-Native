import {Text, View, StyleSheet, FlatList, ScrollView, TouchableOpacity} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({title, results}) => {

    if (!results.length){
        return null;
    }
    
    const navigation = useNavigation();

    return (
        <View style={styles.listContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text>Results: {results.length}</Text>
            <FlatList horizontal data={results} keyExtractor={(result) => result.id} showsHorizontalScrollIndicator={false} renderItem={({item}) => {
                return (
                <TouchableOpacity onPress={() => navigation.navigate("Details", { id: item.id })}>
                    <ResultsDetail result={item} />
                </TouchableOpacity>
                )
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
    },
    listContainer: {
        paddingVertical: 5,
        paddingHorizontal: 12
    }
})

export default ResultsList;