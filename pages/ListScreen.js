import React, { useState, useEffect} from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableNativeFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";

const url = "http://192.168.198.188:3000/employees";

function ListScreen() {
    const [data, setData] = useState([]);
    const navigation=useNavigation();
    
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
        })
        .catch((error) => alert(error))
    }, []);
  
    
  const ListItemNama = (dataPassing) => {
    return (
      <TouchableNativeFeedback onPress={() => navigation.navigate("Detail",{email_work : dataPassing.employees.email_work})}>
        <View style={styles.ItemListContainer}>
          <View>
            <View style={styles.itemListLine} />
          </View>
          <View style={styles.itemListContent}>
            <Text style={styles.itemListText}>
              {"Nama : " + dataPassing.employees.name}
            </Text>
            <Text style={styles.itemListText}>
              {"Divisi : " + dataPassing.employees.division}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        legacyImplementation={false}
        data={data}
        renderItem={({ item }) => <ListItemNama employees={item} />}
        keyExtractor={(item) => item.email_work}
        style={styles.flatlist}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : colors.background
  },
  headerContainer: {
    backgroundColor: "#1363DF",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 15,
    alignItems: "center",
    paddingBottom: 10
  },
  headerImage: {
    height: 120,
    width: 100
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold"
  },
  flatlist: {
    flex: 1,
    marginHorizontal: 10
  },
  ItemListContainer: {
    height: 100,
    backgroundColor: colors.primary,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20
  },
  itemListContent: {
    marginLeft: 10
  },
  itemListLine: {
    backgroundColor: colors.secondary,
    width: 5,
    height: "80%"
  },
  itemListText: {
    color: colors.text,
    marginVertical: 2,
    fontWeight: "bold",
    fontSize: 17
  }
});

export default ListScreen;
