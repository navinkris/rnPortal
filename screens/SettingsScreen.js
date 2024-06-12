import { LayoutAnimation, StyleSheet, Switch, TouchableNativeFeedback, View, useColorScheme } from "react-native"
import { Card, Text } from "../utils/Theme";
import { useCallback, useContext, useState } from "react";
import DarkMode from "../utils/darkmode.context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTranslation } from "react-i18next";

const SettingsScreen = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [showLanguagesList, setOpenLanguagesList] = useState(false)
  const {t, i18n} = useTranslation();
  const scheme = useColorScheme();
  const languages = [
    { name: 'english', code: 'en' },
    { name: 'arabic', code: 'ar' },
    { name: 'spanish', code: 'es' },
    { name: 'polish', code: 'pl' },
  ]

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode, scheme]);
  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <View>
      <Card style={[styles.card]} isDarkMode={isDarkMode}>
        <View style={styles.option}>
          <Text style={[[styles.text]]} isDarkMode={isDarkMode}>
            {t('darkMode')}
          </Text>
          <Switch
            trackColor={{
              true: '#02b875',
              false: 'gray'
            }}
            value={isDarkMode}
            onChange={toggleDarkMode}
            thumbColor={'white'}
          />
        </View>
        <Card style={[styles.card]} isDarkMode={isDarkMode}>
          <TouchableNativeFeedback onPress={() => {
            setOpenLanguagesList(!showLanguagesList)
            LayoutAnimation.configureNext(LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'))
          }}>
            <View style={styles.button}>
              <Text style={styles.text}>{t('changeLanguage')}</Text>
            </View>
          </TouchableNativeFeedback>
          {showLanguagesList && <>
            {languages.map((item, index) => (
              <TouchableOpacity key={index} style={[styles.button, { paddingHorizontal: 24 }]}
                onPress={() => changeLanguage(item.code)}>
                <Text style={styles.text}>{t(item.name)}</Text>
              </TouchableOpacity>
            ))}
          </>
          }
        </Card>
      </Card>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    textTransform: 'capitalize',
    opacity: 0.6
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12
  },
  card: {
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 8
  }
})