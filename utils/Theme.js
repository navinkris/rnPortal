import { View, Text as DefaultText } from 'react-native';

export function Text(props) {
  const { isDarkMode, style, ...rest } = props;
  return (
    <DefaultText 
      style={[
        style, 
        {
          color: isDarkMode ? 'gray' : 'black',
          opacity: isDarkMode ? 0.6 : 1
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