import React, { useState } from 'react';
import {Image, ScrollView, StyleSheet, Text, View, Dimensions, Pressable} from 'react-native';
import EditBook from './EditBook';
import BookDetails from './BookDetails';
import Icons from 'react-native-vector-icons/AntDesign';



export default function BookModal({setIsModalOpen, book, setCurrentBook}) {
  const [editionMode, setEditionMode] = useState(false)
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <Icons name="close" style={styles.closeIcon} onPress={() => setIsModalOpen(false)} />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {editionMode 
            ? <EditBook book={book} setEditionMode={setEditionMode}/> 
            : <BookDetails book={book} setEditionMode={setEditionMode}/>}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#00000057',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // height: Dimensions.get('window').height,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
  },
  modal: {
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  closeIcon: {
    marginLeft: 'auto',
    fontSize: 20,
    marginBottom: 10,
  },
  
});
