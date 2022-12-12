import {View, Image, Text, StyleSheet} from "react-native";

const ResultsDetails = ({result}) => {
    return (
        <View style={styles.resultContainer}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.rating}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultContainer: {
        margin: 5,
        marginTop:10
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15,
        padding: 4,
        maxWidth: 250
    },
    rating: {
        padding: 4
    }
})
export default ResultsDetails;