# react-native-image-picker
Aplicação de estudos React Native para testar a biblioteca react-native-image-picker<br/>
https://github.com/react-native-image-picker/react-native-image-picker

# Instruções

01 - npx react-native init RNImagePicker

02 – cd RNImagePicker    

03 - yarn add react-native-image-picker

04 - cd ios && pod install

05 – cd ..

06 – Configuração permissões ios

Acessar o arquivo ios/RNImagePicker/Info.plist e adicionar as seguintes linhas abaixo: 

<key>NSCameraUsageDescription</key><br>
<string>$(PRODUCT_NAME) would like to use your camera</string><br>
<key>NSMicrophoneUsageDescription</key><br>
<string>$(PRODUCT_NAME) would like to your microphone (for videos)</string><br>
<key>NSPhotoLibraryUsageDescription</key><br>
<string>$(PRODUCT_NAME) would like access to your photo gallery</string>


OBS: No emulador do IOS só é possível testar a funcionalidade selecionar a imagem da galeria pois para a acessar a camêra esse teste deverá ser executado apenas no aparelho físico.

07 – Configuração permissões android
Segundo a documentação essa biblioteca não requer permissão da câmera no arquivo AndroidManifest.xml

08 – Analisar o exemplo dessa biblioteca nesse link
https://github.com/react-native-image-picker/react-native-image-picker/blob/main/example/src/App.tsx

09 – react-native run-ios 

10 – react-native run-android

# Projeto rodando no emulador ios e emulador android<br/>
![a1](https://user-images.githubusercontent.com/5804067/120245016-466b4f80-c242-11eb-825e-b6b5439ee07c.gif) ![android](https://user-images.githubusercontent.com/5804067/120245941-2ee19600-c245-11eb-9ae7-84dfb0597534.gif)




