import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Zipy, {FloatingButton} from 'package_zipy';
import axios from 'axios';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenNavigation, GestureCapture} from 'package_zipy';

function Home({navigation}) {
  return (
    <View>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function Settings({navigation}) {
  return (
    <View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Stack = createStackNavigator();
const App = () => {
  const [apiData, setapiData] = useState('');
  const [message, setMessage] = useState('');
  const onChangeTextMessage = text => {
    setMessage(text);
  };
  handledException = () => {
    try {
      console.log(first);
    } catch (error) {
      console.log('error is ', JSON.stringify(error));
      Zipy.logException('raised an handled exception', error.message);
    }
  };
  unhandledException = () => {
    console.log(first);
  };
  const [timerId, setTimerId] = useState(null);

  postApiCall = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        setapiData(JSON.stringify(json));
        console.log(json);
      });
  };

  putApiCall = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        setapiData(JSON.stringify(json));
        console.log(json);
      });
  };

  deleteApiCall = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    });
  };

  postAxiosCall = async () => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          title: 'foo',
          body: 'bar',
          userId: 1,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );

      const json = response.data;
      setapiData(JSON.stringify(json));
      console.log(json);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  putAxiosCall = async () => {
    try {
      const response = await axios.put(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );

      const json = response.data;
      console.log(JSON.stringify(json))
      setapiData(JSON.stringify(json));
      console.log(json);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  deleteAxiosCall = async () => {
    try {
      await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{backgroundColor: 'red'}}>
      <>
        <ScreenNavigation>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </ScreenNavigation>
        <GestureCapture>
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: 'red',
                fontWeight: '900',
                fontSize: 20,
              }}>
              Hello Everyone Welcome to this app
            </Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                padding: 2,
              }}>
              <Text style={{color: 'blue', fontWeight: 600}}>{apiData}</Text>
              <TextInput
                onChangeText={onChangeTextMessage}
                style={{borderWidth: 2, borderColor: 'gray', margin: 5}}
                value={message}
                placeholder="Enter some text to log"
              />
              <View style={{display: 'flex', flexWrap: 'wrap', padding: 2}}>
                <Button
                  onPress={() => {
                    Zipy.logMessage(message);
                    setMessage('');
                  }}
                  title="Click to log the above message"
                  color="#FF7F50"
                  style={{margin: 5}}
                />
                <Button
                  onPress={handledException}
                  title="Click to raise Handled Exception"
                  color="#FA8072"
                />
                <Button
                  onPress={unhandledException}
                  title="Click to raise UN-Handled Exception"
                  color="#AB4E52"
                />
                <Button
                  onPress={postApiCall}
                  title="Click to call an Post Http API"
                  color="#3AB09E"
                />
                <Button
                  onPress={putApiCall}
                  title="Click to call an Put Http API"
                  color="#006D6F"
                />
                <Button
                  onPress={deleteApiCall}
                  title="Click to call an delete Http API"
                  color="#F08080"
                />
                <Button
                  onPress={postAxiosCall}
                  title="Axios post api call"
                  color="#0D98BA"
                />
                <Button
                  onPress={putAxiosCall}
                  title="Axios put api call"
                  color="#007BA7"
                />
                <Button
                  onPress={deleteAxiosCall}
                  title="Axios delete api call"
                  color="#F88379"
                />
              </View>
              <FloatingButton
                title="this is floating button"
                message="you clicked me"
              />
            </View>
          </View>
        </GestureCapture>
      </>
    </TouchableWithoutFeedback>
  );
};

export default App;
