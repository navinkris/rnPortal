import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, View } from "react-native"
import { RNCamera } from "react-native-camera";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "../utils/Theme";

const CameraScreen = () => {
  const {t} = useTranslation();
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      setCapturedImage(data.uri);
    }
  };

  return (
    <View style={styles.container}>
      {capturedImage ? (
        <Image source={{ uri: capturedImage}} style={styles.capturedImage} />
      ): (
        <RNCamera
          ref={cameraRef}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') return <View />;
            return (
              <View style={styles.captureContainer}>
                <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
                  <Text style={styles.captureText}>{t('capture')}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      )}
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  captureContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  captureButton: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  captureText: {
    fontSize: 14
  },
  capturedImage: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
})