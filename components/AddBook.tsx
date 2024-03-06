import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function AddBook({navigation}) {
  const [created, setCreated] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm();

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', ()=> {
      setCreated(false)
    })
    return unsubscribe
    
  },[navigation])

  const postBook = async data => {
    try {
      await axios.post('http://10.0.2.2:3000/books/', data)
      setCreated(true);
    } catch (error) {
      console.log('Error creating new book', error);
    }
  };

  const submitForm = async data => {
    try {
      await postBook(data);
      console.log('Book created successfully');
    } catch (error) {
      console.log('Error handling form submit', error);
    }
    reset()
  };

  return (
    <SafeAreaView>
      {created
        ? <View style={styles.success}><Text style={styles.successMsg}>Hay un nuevo libro en tu Biblio!</Text></View>
        : 
        <ScrollView style={styles.formWrapper}>
          <Controller
            control={control}
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
          <Pressable
            onPress={handleSubmit(submitForm)}
            style={({pressed})=> [
              styles.submitBtn,
              pressed && {opacity: .7}
            ]}
          >
            <Text style={styles.btnTxt}>Añadir libro</Text>
          </Pressable>
        </ScrollView>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    marginTop: 8,
  },
  submitBtn: {
    marginBottom: 30,
    marginTop: 20,
    backgroundColor: '#f7b395',
    padding: 13,
    alignItems: 'center',
    borderRadius: 5,
  },
  btnTxt: {
    fontSize: 20,
    letterSpacing: 1,
  },
  success: {
    padding: 40
  },
  successMsg: {
    fontSize: 25,
    textAlign: 'center'
  }
});
