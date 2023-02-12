import React from "react";
import { View, Text} from "react-native";

export default function Contacts(){
    return(
        <View style={{marginTop:60}}>
            <View>
                <Text>Nome: João Silva</Text>
                <Text>Telefone: (94) 992334566</Text>
                <Text onPress={() => navigation.navigate('Information',
                    {
                        nome: 'João Silva',
                        telefone: 'Telefone: (94) 992334566',
                        endereco: 'rua das flores',
                        numero: '765',
                        profissao: 'Carpinteiro',
                        email: 'joaosilva@carpintaria.com.br'
                    }
                    )}
                    >Information...</Text>
            </View>

            <View style={{marginTop:20}}>
                <Text>Nome: Amanda Silva</Text>
                <Text>Telefone: (94) 994848563</Text>
                <Text onPress={() => navigation.navigate('Information',
                    {
                    nome: 'Amanda Silva',
                    telefone: '(94) 981456532',
                    endereco: 'rua lauro sodre',
                    numero: '54',
                    profissao: 'zeladora',
                    email: 'amandasilva@gmail.com'
                    }
            )}
            >Information...</Text>
            </View>
        </View>
    )
}