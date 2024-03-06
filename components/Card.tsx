import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';

export default function Card({book, setIsModalOpen, setCurrentBook}) {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImg} source={{uri: book.portada}} />
      <Text style={styles.cardTitle}>{book.titulo}</Text>
      <Text style={styles.cardSubtitle}>{book.autoria}</Text>
      <Pressable
        style={styles.cardBtn}
        onPress={() => {
          setIsModalOpen(true);
          setCurrentBook(book);
        }}>
        <Text style={styles.bold}>DETALLES</Text>
        <Icons name="arrowright" size={24} color={'#9bb2b1'}/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    rowGap: 5,
    width: '47%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 4
  },
  cardImg: {
    height: 200,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  cardSubtitle: {
    fontSize: 16,
  },
  cardBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
    borderRadius: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 'auto',
  },
  bold: {
    fontWeight: 'bold',
  },
});
