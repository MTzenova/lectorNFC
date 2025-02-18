import { View, Text, TextInput, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/FireBaseconfig'; 
import { GlobalStyles } from '@/theme/GlobalStyles';
import { Colors } from '@/theme/Colors';

interface Alumno {
    id: string;
    nombre: string;
    apellidos: string;
    grado: string;
    nre: string;
}

const BBDD = () => {
    const [alumnos, setAlumnos] = useState<Alumno[]>([]);
    const [filteredAlumnos, setFilteredAlumnos] = useState<Alumno[]>([]);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        const fetchAlumnos = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "usuarios"));
                const alumnosData: Alumno[] = querySnapshot.docs.map(doc => {
                    const data = doc.data() as Omit<Alumno, 'id'>;
                    return {
                        ...data,  
                        id: doc.id,  
                    };
                });
                setAlumnos(alumnosData);
                setFilteredAlumnos(alumnosData);
            } catch (error) {
                console.error("Error obteniendo alumnos:", error);
            }
        };

        fetchAlumnos();
    }, []);

    // 📌 Función para filtrar por NRE
    const handleSearch = (text: string) => {
        setSearch(text);
        if (text === '') {
            setFilteredAlumnos(alumnos);
        } else {
            const filteredData = alumnos.filter(alumno =>
                alumno.nre.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredAlumnos(filteredData);
        }
    };

    return (
        <View style={GlobalStyles.contenedor}>
            {/* Buscador */}
            <View style={GlobalStyles.contenedorBuscarBBDD}>
                <Text style={[GlobalStyles.textoTituloBBDD]}>Base de datos de alumnos</Text>
                <TextInput 
                    style={GlobalStyles.inputBBDD} 
                    placeholder='Buscar por NRE...' 
                    placeholderTextColor={Colors.lightGrey}
                    value={search}
                    onChangeText={handleSearch}
                />
            </View>

            {/* Lista de alumnos */}
            <View style={GlobalStyles.contenedorDatos}>
                <FlatList
                    data={filteredAlumnos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Text style={GlobalStyles.textoEscrbir}>
                            {item.nombre} {item.apellidos} - {item.grado} (NRE: {item.nre})
                        </Text>
                    )}
                />
            </View>
        </View>
    );
};

export default BBDD;
