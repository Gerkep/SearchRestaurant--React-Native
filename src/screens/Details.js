import {Text, StyleSheet, FlatList, Image} from "react-native";
import { useEffect } from "react";
import yelp from "../api/yelp";

const Details = ({ route, navigation }) => {

    const { itemId, otherParam } = route.params;
    const [result, setResult] = useState(null);

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, [])

    return (
        <>
            <Text>{result.name}</Text>
            <FlatList
            data={result.photos}
            keyExtractor={photo => photo}
            renderItem={({item}) => {
                return <Image style={styles.image} source={{ uri: item }}/>
            }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
})

export default Details;