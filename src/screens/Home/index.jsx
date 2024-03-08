import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import amazonLogo from "../../assets/amazon_logo.png";
import primeLogo from "../../assets/prime_video.png";
import banner from "../../assets/movies/banner.png";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import {MOVIESWATCH} from "../../utils/moviesWatch";
import MovieCard from "../../components/MoviesCard";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={primeLogo} style={styles.primeLogoImg} />
          <Image source={amazonLogo} style={styles.amazonLogoImg} />
        </View>

        <View style={styles.category}>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>TV SHOWS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Kids</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.banner}>
          <Image source={banner} style={styles.bannerImg} />
        </TouchableOpacity>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.contentMovies}
        >
          <Text style={styles.movieText}>Continue Watching</Text>
          <FlatList
            data={MOVIESWATCHING}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MovieCard movieUrl={item.moviesURL} />}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
          />

          <Text style={styles.movieText}>Crime movies</Text>
          <FlatList
            data={MOVIESCRIME}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MovieCard movieUrl={item.moviesURL} />}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
          />

          <Text style={styles.movieText}>Other lenguages movies</Text>
          <FlatList
            data={MOVIESWATCH}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MovieCard movieUrl={item.moviesURL} />}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232F3E",
    alignItems: "flex-start",
  },
  header: {
    width: "100%",
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  amazonLogoImg: {
    marginTop: -32,
    marginLeft: 30,
  },
  category: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginBottom: 15,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },
  banner: {
    width: "100%",
    marginVertical: 20,
    alignItems: "center",
  },
  bannerImg: {
    width: "95%",
    height: 200,
    borderRadius: 10,
  },
  movieText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    padding: 15,
  },
  contentList: {
    paddingLeft: 18,
    paddingRight: 30,
  },
  contentMovies: {},
});
