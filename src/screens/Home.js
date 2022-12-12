import {Text, View, Button, ScrollView, StyleSheet} from "react-native";
import { useState } from 'react'
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";

const Home = () => {

    const [term, setTerm] = useState();
    const [searchApi, results, error] = useRestaurants();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }
    return (
        <>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)}/>
            {error ? <Text style={{textAlign: "center"}}>{error}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
                <ResultsList results={filterResultsByPrice('$$')}title="Bit pricier"/>
                <ResultsList results={filterResultsByPrice('$$$')} title="Big spender"/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({

})

export default Home;