import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native"

const BluetoothScreen = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('bluetooth')}</Text>
    </View>
  );
};

export default BluetoothScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  }
})