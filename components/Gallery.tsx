/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import BookModal from './BookModal'

export default function Gallery({navigation}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentBook, setCurrentBook] = useState()

  const [books, setBooks] = useState([])
    useEffect(()=> {
        const getBooks = async () => {
            try {
                const response = await axios.get('http://10.0.2.2:3000/books')
                setBooks(response.data)
            } catch (error) {
                console.log('Error getting books', error)
            }
        }

        const unsubscribe = navigation.addListener('focus', ()=> {
          getBooks();
        })

        if (!isModalOpen) {
          getBooks();
        }
        return unsubscribe
    }, [currentBook, navigation, isModalOpen])

    const renderItem = ({ item }) => (
      <Card book={item} setIsModalOpen={setIsModalOpen} setCurrentBook={setCurrentBook} />
    );

  return (
    <>
      <FlatList 
        contentInsetAdjustmentBehavior="automatic"
        style={styles.gallery}
        data = {books}
        numColumns={2}
        contentContainerStyle={{ gap: 20}}
        columnWrapperStyle={{ gap: 20 }}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
      {isModalOpen && <BookModal setIsModalOpen={setIsModalOpen} book={currentBook} setCurrentBook={setCurrentBook}/>}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
  gallery: {
    margin: 10,
    marginTop: 30,
  },
})
