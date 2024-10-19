import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
    imgSource: string;
}

export default function ImageViewer({ imgSource }: Props) {
    console.log(imgSource)
    return (
    <Image source={imgSource} style={styles.image} />
  
)    ;
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height:440,
        borderRadius: 18,
    },
});