import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';

export default function EditBook({book, setEditionMode, setCurrentBook}) {
  const [updated, setUpdated] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [formData, setFormData] = useState(book);

  useEffect(()=>{
    setUpdated(false);
  },[])

  const putBook = async newData => {
    try {
      const updatedBook = await axios.put(
        `http://10.0.2.2:3000/books/${book.id}`,
        newData,
      );
      setUpdated(true)
      setCurrentBook(newData)
      console.log('Book updated successfully')
    } catch (error) {
      console.log('Error updating book', error);
    }
  };

  const submitForm = async data => {
    const newData = {...formData, ...data};
    setFormData(newData);
    try {
      await putBook(newData);
    } catch (error) {
      console.log('Error handling submit', error);
    }
  };

  return (
    <>
      <Text style={styles.tituloModal}>Editar libro</Text>
      {updated ? (
        <View style={styles.success}>
          <Text style={styles.successMsg}>Libro actualizado!</Text>
        </View>
      ) : (
        <View>
          <Controller
            control={control}
            defaultValue={book.portada}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <Text>Imagen de portada</Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  multiline={true}
                  style={styles.input}
                />
              </>
            )}
            name="portada"
          />

          <Controller
            control={control}
            defaultValue={book.titulo}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <Text>Título</Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  multiline={true}
                  style={styles.input}
                />
              </>
            )}
            name="titulo"
          />
          <Controller
            control={control}
            defaultValue={book.autoria}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <Text>Autoría</Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  multiline={true}
                  style={styles.input}
                />
              </>
            )}
            name="autoria"
          />
          <Controller
            control={control}
            defaultValue={book.año}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <Text>Año</Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                />
              </>
            )}
            name="año"
          />
          <Controller
            control={control}
            defaultValue={book.descripcion}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <Text>Descripción</Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  multiline={true}
                  style={styles.input}
                />
              </>
            )}
            name="descripcion"
          />
          <Controller
            control={control}
            defaultValue={book.editorial}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <Text>Editorial</Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  multiline={true}
                  style={styles.input}
                />
              </>
            )}
            name="editorial"
          />
          <Controller
            control={control}
            defaultValue={book.genero}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <Text>Género</Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                />
              </>
            )}
            name="genero"
          />
          <Pressable onPress={handleSubmit(submitForm)}
          style={({pressed})=> [
              styles.modalBtn,
              pressed && {opacity: .7}
          ]}
          >
            <Text style={styles.btnTxt}>Actualizar</Text>
          </Pressable>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  tituloModal: {
    fontSize: 25,
    marginBottom:10
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    marginTop: 8,
  },
  success: {
    padding: 40,
  },
  successMsg: {
    fontSize: 25,
    textAlign: 'center',
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
});
