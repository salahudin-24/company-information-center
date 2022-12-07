import React, { useState, useEffect} from "react";
import { View, Text, Image, FlatList, StyleSheet, Linking } from "react-native";
import { useRoute } from "@react-navigation/native";
import colors from "../config/colors";

function ContactDetail() {
    const [data, setData] = useState([]);
    const route = useRoute();
    const url = "http://52.253.96.50:5328/employees?email_work="+route.params.email_work;
    
 
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
                    <Image source={{uri : dataPassing.employees.pic_url }} style={styles.profile_picture}/>
                    <Text style={{alignSelf:"center", fontSize : 20, fontWeight : "bold", paddingTop : "3%"}}>
                        {dataPassing.employees.name}
                    </Text>
                </View>
                <View style={{paddingBottom: "10%"}}>
                    <Text style={styles.itemListText}>
                        {"Divisi : " + dataPassing.employees.division}
                    </Text>
                    <Text style={styles.itemListText}>
                        {"Email (Kantor) : " + dataPassing.employees.email_work}
                    </Text>
                    <Text style={styles.itemListText}>
                        {"Email (Pribadi) : " + dataPassing.employees.email_personal}
                    </Text>
                    <Text style={styles.itemListText}>
                        {"Telepon : " + dataPassing.employees.phone}
                    </Text>
                    <Text style={styles.itemListText}>
                        {"Alamat : " + dataPassing.employees.address}
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
        renderItem={({ item }) => <ListItemNama employees={item} />}
        keyExtractor={(item) => item.email_work}
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
  profile_picture: {
    height: 200,
    width: 200,
    resizeMode : "center",
    borderRadius : 200,
    alignSelf : "center",
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
