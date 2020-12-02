import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Button } from '@ui-kitten/components';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const AdminScreen = ({ navigation }) => {
    return (
        <Layout style={styles.container}>
            <Button>
               Admin Screen...
            </Button>
        </Layout>
    );
};

export default AdminScreen;
