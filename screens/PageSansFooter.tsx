import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any, 'PageSansFooter'>;

export default function PageSansFooter({ navigation }: Props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Page sans footer</Text>
            <Button
                title="Retour aux onglets"
                onPress={() => navigation.navigate('Tabs')}
            />
        </View>
    );
}
