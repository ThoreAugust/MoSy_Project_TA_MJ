import React from 'react';
import {Modal, Platform} from 'react-native';
import {Header, Button, ThemeConsumer} from 'react-native-elements';
import {WebView} from 'react-native-webview';
import {Ionicons} from '@expo/vector-icons';
import { getHeaderTheme } from '../constants/Themes';

export default ArticleScreen = props => {
    const theme = getHeaderTheme(props.theme);
    
    return (
        <Modal visible = {props.visible}>
            <Header 
                leftComponent={<Button type="clear" icon={ <Ionicons name={Platform.OS === 'ios' ? "ios-arrow-back":"md-arrow-back"} size={32} color={theme.headerButtons.color} />} onPress={props.goBack}/>}
                centerComponent={{ text: props.title, style: theme.headerText }}
                containerStyle={theme.header}
            />
            <WebView 
                source={{uri: props.url}}
                style={{flex: 1}}
                />
        </Modal>
    );
};