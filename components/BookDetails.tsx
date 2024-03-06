import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

export default function BookDetails({book, setEditionMode, setCurrentBook}) {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteBook = async () => {
    try {
      const deletedBook = await axios.delete(`http://10.0.2.2:3000/books/${book.id}`);
      console.log(`${book.title} has been deleted`);
      setIsDeleted(true)
      setCurrentBook(deletedBook.data)
    } catch (error) {
      console.log('Error: couldnt delete book', error);
    }
  };

  return (
    <>
      {isDeleted ? (
        <View style={styles.success}>
          <Text style={styles.successMsg}>Libro eliminado correctamente</Text>
        </View>
      ) : (
        <View>
          <Image
            style={styles.modalImg}
            source={{uri: book.portada}}
            alt={book.title}
          />
          <Text style={styles.modalTitle}>{book.titulo}</Text>
          <Text style={styles.modalSubtitle}>{book.autoria}</Text>
          <Text style={styles.modalTxt}>{book.descripcion}</Text>
          <View>
            <Text style={styles.modalInfo}>Editorial: {book.editorial}</Text>
            <Text style={styles.modalInfo}>Año de publicación: {book.año}</Text>
          </View>
          <Pressable
            style={styles.modalBtn}
            onPress={() => setEditionMode(true)}>
            <Text style={styles.btnTxt}>Editar</Text>
          </Pressable>
          <Pressable style={styles.modalBtn} onPress={deleteBook}>
            <Text style={styles.btnTxt}>Eliminar</Text>
          </Pressable>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  modalImg: {
    width: '100%',
    aspectRatio: 2 / 3,
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  modalSubtitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  modalTxt: {
    fontSize: 16,
    marginBottom: 20,
    marginTop: 20,
  },
  modalInfo: {
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
  modalBtn: {
    marginBottom: 0,
    marginTop: 20,
    backgroundColor: '#f7b395',
    padding: 13,
    alignItems: 'center',
    borderRadius: 5,
  },
  btnTxt: {
    fontSize: 16,
    letterSpacing: 1,
  },
  success: {
    padding: 40,
  },
  successMsg: {
    fontSize: 25,
    textAlign: 'center',
  },
});
