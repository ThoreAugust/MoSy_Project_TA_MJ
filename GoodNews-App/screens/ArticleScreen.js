import React from 'react';
import {Modal} from 'react-native';
import {Header, Button} from 'react-native-elements';
import {WebView} from 'react-native-webview';
import {Ionicons} from '@expo/vector-icons';

export default ArticleScreen = props => {
    
    return (
        <Modal visible = {props.visible}>
            <Header 
                leftComponent={<Button type="clear" icon={ <Ionicons name="md-arrow-back" size={32} color="white" />} onPress={props.goBack}/>}
                centerComponent={{ text: props.title, style: { color: '#fff' } }}
            />
            <WebView 
                source={{uri: props.url}}
                style={{flex: 1}}
                />
        </Modal>
    );
};