import { StyleSheet, Text, View,Image } from "react-native";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function App() {
  const [saat, setSaat] = useState(0);
  const [dakika, setDakika] = useState(0);
  const [saniye, setSaniye] = useState(0);
  const [buyuk,setBuyuk]=useState(true);
  useEffect(() => {
    setInterval(() => {
      setDakika(dayjs().format("mm"));
      setSaat(parseInt( dayjs().format("HH"),10)+3);
      setSaniye(dayjs().format("ss"));
      setBuyuk(5<saat&& saat>17);

    });
  });
  

  return (
    <View style={styles.container}>
      <Image
  source={buyuk ? require('./assets/images/sun.png' ): require('./assets/images/moon.png')}
  style={styles.foto}
/>

<View style={styles.container}>
      <Text style={styles.sehir}>Ankara</Text>
      <Text style={styles.time}>
        {saat}:{dakika}:{saniye}
      </Text>
      <Text style={styles.ulke}>
        Türkiye
      </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4DEF6",
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    fontSize: 50,
  },
  sehir:{
    color:'#EB144C',
    fontSize:40,

  },
  ulke:{
    color:'white',
    fontSize:30,
  },
  foto:{
    flex:1,
    resizeMode:'contain',
    marginTop:40,
  }
});
