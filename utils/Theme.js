import { View, Text as DefaultText } from 'react-native';

export function Text(props) {
  const { isDarkMode, style, ...rest } = props;
  return (
    <DefaultText 
      style={[
        style, 
        {
          color: isDarkMode ? 'white' : 'black',
          opacity: isDarkMode ? 1 : 1
        },
      ]}
      {...rest}
    />
  );
}

export function Card (props) {
  const { isDarkMode, style, ...rest } = props;
  return (
    <View
      style={[
        style,
        {
          backgroundColor: isDarkMode ? '#121212' : 'white'
        },
      ]}
      {...rest}
    />
  )
}