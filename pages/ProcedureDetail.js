import React, { useState, useEffect} from "react";
import { View, Text, Image, FlatList, StyleSheet, Linking } from "react-native";
import { useRoute } from "@react-navigation/native";
import colors from "../config/colors";

function ContactDetail() {
    const [data, setData] = useState([]);
    const route = useRoute();
    const url = "http://192.168.253.188:3000/procedures?id="+route.params.procedure_id;
    
 
    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            setData(json);
          })
          .catch((error) => alert(error))
      }, [route]);

    const ListItemNama = (dataPassing) => {
    return (
        <View style={styles.ItemListContainer}>
            <View style={styles.itemListContent}>
                <View style={{alignContent : "center", paddingTop : "10%", paddingBottom : "13%"}}>
                    <Text style={{alignSelf:"center", fontSize : 20, fontWeight : "bold", paddingTop : "3%"}}>
                        {dataPassing.procedure.title}
                    </Text>
                </View>
                <View style={{paddingBottom: "10%"}}>
                    <Text style={styles.itemListText}>
                        {dataPassing.procedure.content}
                    </Text>
                </View>
            </View>
        </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        legacyImplementation={false}
        data={data}
        renderItem={({ item }) => <ListItemNama procedure={item} />}
        keyExtractor={(item) => item.id}
        style={styles.card}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : colors.background
  },
  card: {
    flex: 1,
    marginHorizontal: 10
  },
  ItemListContainer: {
    backgroundColor: colors.primary,
    marginVertical: 5,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20
  },
  itemListContent: {
    marginLeft: 10
  },
  itemListText: {
    color: colors.text,
    fontSize: 17
  }
});

export default ContactDetail;
