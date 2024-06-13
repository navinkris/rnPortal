import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, NativeEventEmitter, NativeModules, PermissionsAndroid, StyleSheet, View } from "react-native"
import BleManager from 'react-native-ble-manager';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import RippleEffect from "../components/RippleEffect";
import { Text } from "../utils/Theme";


const BluetoothScreen = () => {
  const {t} = useTranslation();
  const [isScanning, setScanning]=useState(false);
  const [bleDevices, setDevices]=useState([]);
  const BleManagerModule = NativeModules.BleManager;
  const BleManagerEmitter = new NativeEventEmitter(BleManagerModule);

  useEffect(() => {
    BleManager.start({ showAlert: false}).then(() => {
      // Success code
      console.log("BleManager initialized");
    });
  })

  useEffect(() => {
    BleManager.enableBluetooth()
      .then(() => {
        // success code
        console.log("The bluetooth is already enabled or the user confirm");
        requestPermission();
      })
      .catch((error) => {
        // Failed code
        console.log("The user refuse to enable bluetooth");
      });
  }, [])

  useEffect(() => {
    let stopListener = BleManagerEmitter.addListener('BleManagerStopScan',
      ()=>{
        setScanning(false);
        handleGetConnectedDevices();
        console.log("Stop");
      }
    )

    return ()=>stopListener.remove()
  }, [])

  const requestPermission = async() => {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    ])

    if(granted) {
      startScanning()
    }
  }

  const startScanning = () => {
    if(!isScanning) {
      BleManager.scan([], 10, false).then(() => {
        // Success code
        console.log("Scan started");
        setScanning(true);
      }).catch((error) => {
        console.error(error);
      })
    }
  }

  const handleGetConnectedDevices = () => {
    BleManager.getDiscoveredPeripherals().then((result) => {

      if(result.length===0) {
        console.log("No Device found");
        startScanning()
      } else {
        console.log("RESULTS", JSON.stringify(result));
        const allDevices = result.filter((item)=>item.name !==null)
        setDevices(allDevices);
      }
      console.log("Discovered peripherals: " + result);
    })
  }

  const renderItem=({item, index})=> {
    return (
      <View style={styles.bleCard}>
          <Text style={styles.bleTxt}>{item.name}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnTxt}>Connect</Text>
          </TouchableOpacity>
      </View>
    )

  }
  return (
    <View style={styles.container}>
      {isScanning ? <View>
      <RippleEffect/>
      </View>: <View>
        <FlatList
          data={bleDevices}
          keyExtractor={(item, index)=>index.toString()}
          renderItem={renderItem}
        />
        </View>
      }
    </View>
  );
};

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
  },
  bleCard: {
    width: "90%",
    padding: 10,
    alignSelf: "center",
    marginVertical: 10,
    backgroundColor: '#f2d492',
    elevation:5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rippleView: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bleTxt: {
    fontSize: 18,
    color: 'black'
  },
  btnTxt: {
    color: 'black',
    fontSize: 18
  },
  button: {
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    color: 'yellow'
  }
})
export default BluetoothScreen;