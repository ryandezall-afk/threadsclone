import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
  Button,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="reorder-two-outline" size={30} color="#FFFFFF" />

        <Text style={styles.headerLogo}>@threads</Text>

        <Ionicons name="search-outline" size={24} color="#FFFFFF" />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* card1 container for post */}
        <View style={styles.card}>
          {/* left side of card, profile pic*/}
          <View style={styles.leftSide}>
            <Image
              source={{ uri: "https://i.pravatar.cc/150" }}
              style={styles.profilePic}
            />
          </View>

          {/* right side of card, post content */}
          <View style={styles.rightSide}>
            <Text style={styles.username}>lucky_duck187</Text>
            <Text style={styles.uniqueContent}>What's New?</Text>
          </View>
        </View>

        {/* Divider line between posts */}
        <View style={styles.divider} />

        {/* card2 container for post */}
        {/* card1 container for post */}
        <View style={styles.card}>
          {/* left side of card, profile pic*/}
          <View style={styles.leftSide}>
            <Image
              source={{ uri: "https://i.pravatar.cc/150" }}
              style={styles.profilePic}
            />
          </View>

          {/* right side of card, post content */}
          <View style={styles.rightSide}>
            <Text style={styles.username}>catchmenever_68_.ach</Text>
            <Text style={styles.cardTextContent}>
              Check out this amazing sunset! I went hiking today and captured
              this beautiful moment.
            </Text>
            <Text style={styles.cardTextContent}>
              Golden hour hit the ridge just right tonight. Still can’t believe
              we caught the sky looking like painted watercolor.
            </Text>
            <Text style={styles.cardTextContent}>
              The trek back down in the dark was an adventure in itself, but
              views like this make every steep step completely worth it.
              Definitely making this trail a regular weekend spot.
            </Text>
            <ScrollView
              style={styles.postImageContainer}
              contentContainerStyle={styles.postImageScrollContent}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
            >
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
                }}
                style={styles.carouselImage}
              />
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
                }}
                style={styles.carouselImage}
              />
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
                }}
                style={styles.carouselImage}
              />
            </ScrollView>
            <View style={styles.postInfo}>
              {/* Like */}
              <View style={styles.actionItem}>
                <Ionicons
                  name="heart-outline"
                  style={styles.actionIcon}
                  size={20}
                />
                <Text style={styles.actionCount}>670</Text>
              </View>

              {/* Comment */}
              <View style={styles.actionItem}>
                <Ionicons
                  name="chatbubble-outline"
                  style={styles.actionIcon}
                  size={20}
                />
                <Text style={styles.actionCount}>61</Text>
              </View>

              {/* Repost */}
              <View style={styles.actionItem}>
                <MaterialCommunityIcons
                  name="repeat-variant"
                  style={styles.actionIcon}
                  size={22}
                />
                <Text style={styles.actionCount}>18</Text>
              </View>

              {/* Share */}
              <View style={styles.actionItem}>
                <Feather name="send" style={styles.actionIcon} size={18} />
                <Text style={styles.actionCount}>13</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Divider line between posts */}
        <View style={styles.divider} />

        <View style={styles.card}>
          {/* left side of card, profile pic*/}
          <View style={styles.leftSide}>
            <Image
              source={{ uri: "https://i.pravatar.cc/150" }}
              style={styles.profilePic}
            />
          </View>

          {/* right side of card, post content */}
          <View style={styles.rightSide}>
            <Text style={styles.username}>streamer_conspiracy</Text>
            <Text style={styles.cardTextContent}>
              Remember when streaming was supposed to save us from cable? For a
              glorious few years, paying $8 a month gave you instant access to
              virtually every movie and show you actually cared about, with zero
              commercial interruptions and an interface that just worked. It
              felt like the future had finally arrived, completely dismantling
              the bloated, predatory channel bundles that made traditional
              television so unbearable to deal with.
            </Text>
            <Text style={styles.cardTextContent}>
              Fast forward to today, and we’ve somehow engineered an ecosystem
              that is exponentially worse and more expensive than cable ever
              was. Every legacy media studio decided they needed their own
              proprietary platform, chopped up classic catalogs into exclusive
              licensing silos, and steadily hiked prices every six months. Now
              you need four or five separate subscriptions just to follow basic
              pop culture, only to still get hit with 90-second unskippable ad
              breaks on an "ad-supported tier" you are literally already paying
              for.
            </Text>
            <View style={styles.postInfo}>
              {/* Like */}
              <View style={styles.actionItem}>
                <Ionicons
                  name="heart-outline"
                  style={styles.actionIcon}
                  size={20}
                />
                <Text style={styles.actionCount}>670</Text>
              </View>

              {/* Comment */}
              <View style={styles.actionItem}>
                <Ionicons
                  name="chatbubble-outline"
                  style={styles.actionIcon}
                  size={20}
                />
                <Text style={styles.actionCount}>61</Text>
              </View>

              {/* Repost */}
              <View style={styles.actionItem}>
                <MaterialCommunityIcons
                  name="repeat-variant"
                  style={styles.actionIcon}
                  size={22}
                />
                <Text style={styles.actionCount}>18</Text>
              </View>

              {/* Share */}
              <View style={styles.actionItem}>
                <Feather name="send" style={styles.actionIcon} size={18} />
                <Text style={styles.actionCount}>13</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.alertButton}>
          <Button title="Alert" onPress={() => Alert.alert("Alert Button pressed!")} />
        </View>
      </ScrollView>
      <View style={styles.navbar}>
        <Ionicons name="home" size={26} style={styles.navIconCurrent} />
        <Ionicons name="send-outline" size={26} style={styles.navIcon} />
        <Ionicons name="add-outline" size={26} style={styles.navIcon} />
        <Ionicons name="heart-outline" size={26} style={styles.navIcon} />
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={styles.profilePicNav}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: "#000000",
    paddingBottom: 10,
  },
  card: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  leftSide: {
    marginRight: 10,
  },
  profilePic: {
    borderRadius: 100,
    width: 40,
    height: 40,
  },
  rightSide: {
    flex: 1,
    justifyContent: "space-evenly",
    gap: 6,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  uniqueContent: {
    color: "#777777",
    fontSize: 16,
  },
  divider: {
    height: 0.5,
    backgroundColor: "#262626",
    width: "100%",
  },
  cardTextContent: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  carouselImage: {
    width: 250,
    aspectRatio: 4 / 3,
    borderRadius: 12,
  },
  postImageContainer: {
    marginTop: 10,
  },
  postImageScrollContent: {
    paddingRight: 10,
    gap: 10,
  },
  postInfo: {
    flexDirection: "row",
    gap: 20,
    marginTop: 6,
  },
  actionIcon: {
    color: "#FFFFFF",
  },
  actionCount: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  safeArea: {
    backgroundColor: "#000000",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  headerLogo: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 8,
  },
  navIcon: {
    color: "#FFFFFF",
  },
  navIconCurrent: {
    color: "#FFFFFF",
  },
  profilePicNav: {
    borderRadius: 100,
    width: 30,
    height: 30,
  },
  alertButton: {
    marginHorizontal: 16,
    marginVertical: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
