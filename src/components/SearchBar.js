import {Text, StyleSheet, View, TextInput} from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather name="search" size={25}/>
            <TextInput 
                value={term} 
                onChangeText={newTerm => onTermChange(newTerm)} 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search" 
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F1F1F1',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 60,
        alignItems: "center",
        flexDirection: 'row',
        paddingHorizontal: 7,
        overflow: "hidden",
        marginBottom: 14
    },
    input: {
        marginLeft: 10,
        paddingHorizontal: 5,
        fontSize: 20,
        flex: 1
    }
})
export default SearchBar;