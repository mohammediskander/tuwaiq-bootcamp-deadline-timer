import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import moment from "moment";
import DateHelper from "./utils/DateHelper";

export default function App() {
  const bootcampDeadline = new Date("2021/01/17");

  const [dateHelper, setDateHelper] = React.useState(
    new DateHelper(new Date().getTime())
  );

  React.useEffect(() => {
    setDateHelper(
      new DateHelper(bootcampDeadline.getTime() - new Date().getTime())
    );

    setInterval(() => {
      setDateHelper(
        new DateHelper(bootcampDeadline.getTime() - new Date().getTime())
      );
    }, dateHelper.SEC);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView
        style={{
          flexDirection: "column",
        }}
      >
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            TUWAIQ BOOTCAMP
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              {dateHelper.moduler(dateHelper.date.getTime(), dateHelper.DAY)[1]}
            </Text>
          </View>
          <View style={styles.subheader}>
            <Text style={styles.subtext}>Days</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              {
                dateHelper.moduler(
                  dateHelper.date.getTime(),
                  dateHelper.WEEK
                )[1]
              }
            </Text>
          </View>
          <View style={styles.subheader}>
            <Text style={styles.subtext}>Weeks</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            // paddingTop: 10,
            justifyContent: "space-between",
          }}
        >
          <View style={styles.box}>
            <View style={styles.boxHeader}>
              <Text style={styles.boxText}>
                {dateHelper.calculator(dateHelper.date.getTime()).month}
              </Text>
            </View>
            <View style={styles.boxSubheader}>
              <Text style={styles.boxSubtext}>Month(s)</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxHeader}>
              <Text style={styles.boxText}>
                {dateHelper.calculator(dateHelper.date.getTime()).day}
              </Text>
            </View>
            <View style={styles.boxSubheader}>
              <Text style={styles.boxSubtext}>Day(s)</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxHeader}>
              <Text style={styles.boxText}>
                {dateHelper.calculator(dateHelper.date.getTime()).hour}
              </Text>
            </View>
            <View style={styles.boxSubheader}>
              <Text style={styles.boxSubtext}>Hour(s)</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxHeader}>
              <Text style={styles.boxText}>
                {dateHelper.calculator(dateHelper.date.getTime()).min}
              </Text>
            </View>
            <View style={styles.boxSubheader}>
              <Text style={styles.boxSubtext}>Minute(s)</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxHeader}>
              <Text style={styles.boxText}>
                {dateHelper.calculator(dateHelper.date.getTime()).sec}
              </Text>
            </View>
            <View style={styles.boxSubheader}>
              <Text style={styles.boxSubtext}>Second(s)</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../logo-plan-white.png")}
            style={{
              height: 250,
              aspectRatio: 1,
            }}
          />
          <Text
            style={{
              fontSize: 17,
              textAlign: "center",
              color: "#FFFFFF",
              fontWeight: "bold",
            }}
          >
            الإتحاد السعودي للأمن السيبراني والبرمجة والدرونز
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#138AF2",
    height: "100%",
    width: "100%",
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "center",
    flex: 8,
  },
  subheader: {
    flex: 3,
    justifyContent: "flex-end",
  },
  headerText: {
    fontSize: 100,
    fontWeight: "900",
    color: "#FFFFFF",
  },
  subtext: {
    fontSize: 30,
    fontWeight: "400",
    color: "#FFFFFF",
  },
  box: {
    // flexDirection: "row",
    // flex: 1,
    height: (Dimensions.get("screen").width - 40) / 3,
    width: (Dimensions.get("screen").width - 40) / 3,
    justifyContent: "center",
    alignItems: "center",
  },
  boxHeader: {
    // flex: 1,
  },
  boxSubheader: {
    // flex: 1,
    // justifyContent: "flex-end",
  },
  boxText: {
    fontSize: 50,
    fontWeight: "900",
    color: "#FFFFFF",
  },
  boxSubtext: {
    fontSize: 15,
    fontWeight: "400",
    color: "#FFFFFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
