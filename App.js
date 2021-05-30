import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button
} from 'react-native';

import * as ImagePicker from 'react-native-image-picker'

export default function App({ navigation }) {

  const [response, setResponse] = React.useState(null);

  return (
    <SafeAreaView>
      <ScrollView>
        <Button
          title="Take image"
          onPress={() =>
            ImagePicker.launchCamera(
              {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              },
              (response) => {
                setResponse(response);
              },
            )
          }
        />

        <Button
          title="Select image"
          onPress={() =>
            ImagePicker.launchImageLibrary(
              {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              },
              (response) => {
                setResponse(response);
                console.log(response);
              },
            )
          }
        />

        <Button
          title="Take video"
          onPress={() =>
            ImagePicker.launchCamera({ mediaType: 'video' }, (response) => {
              setResponse(response);
            })
          }
        />

        <Button
          title="Select video"
          onPress={() =>
            ImagePicker.launchImageLibrary({ mediaType: 'video' }, (response) => {
              setResponse(response);
            })
          }
        />

        <Button
          title="Select image or video (mixed)"
          onPress={() =>
            ImagePicker.launchImageLibrary(
              {
                mediaType: 'mixed',
                maxHeight: 200,
                maxWidth: 200,
              },
              (response) => {
                setResponse(response);
              },
            )
          }
        />

        <View style={styles.response}>
          <Text>Res: {JSON.stringify(response)}</Text>
        </View>

        {response && (
          <View style={styles.image}>
            <Image
              style={{ width: 100, height: 100, resizeMode: 'contain' }}
              source={{ uri: response.uri }}
            // source={{ uri: "file:///Users/denismacedo/Library/Developer/CoreSimulator/Devices/CDAA087E-B9DC-4F2B-888C-66F104BD0F92/data/Containers/Data/Application/A02D533A-4628-493F-9596-A9A2A0E7B497/tmp/CF04B8FC-9730-4BDB-A4C3-E28EFDDA0D89.jpg" }}
            // source={{ uri: 'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14042.jpg' }}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    marginVertical: 24,
    marginHorizontal: 24,
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  response: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
});
