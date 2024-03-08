import { Image, TouchableOpacity, StyleSheet } from "react-native"

export default function MovieCard(props){
    return (
        <TouchableOpacity style={styles.banner}>
            <Image source={props.movieUrl} style={styles.movieImg} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    movieImg:{ 
        marginRight: 20,
    }

})