import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styleText.container}>00000
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styleText = StyleSheet.create({

  container: {
    color:'#fff',
  }

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
