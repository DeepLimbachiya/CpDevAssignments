import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LogoHeadline} from '../components/LogoHeadline';
import {GroupMembersList} from '../components/GroupMembersList';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <LogoHeadline/>
            <GroupMembersList/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 30,
        backgroundColor: '#f4f4f4',
    },
});
