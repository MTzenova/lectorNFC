import { Pressable, Text, StyleSheet, type TextProps } from "react-native";
import { GlobalStyles } from "@/theme/GlobalStyles";
import { RelativePathString , Link} from "expo-router";


interface Props {
    label: string,
    width?:  number,
    onPress?: () => void;
    link: RelativePathString; 
}


export const Boton = ({label ,width, onPress, link}:Props) => {
    const accion = (() => {
        if (onPress) onPress();
    })
    
    return (
        
        <Pressable>
            <Link 
                style={GlobalStyles.boton}
                onPress={accion}
                href={link}>{label}
            </Link>
        </Pressable>
    )
};
export default Boton