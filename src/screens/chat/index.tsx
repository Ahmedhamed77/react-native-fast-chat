import React, {memo, useCallback, useState} from 'react';

import {
  Button,
  FlatList,
  InputAccessoryView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {listStyles, textInputStyles} from './style';

interface ChatScreenProps {}

export const ChatScreen: React.FC<ChatScreenProps> = () => {
  const selfUserId = '1234'; // This would typically be fetched from an auth state or similar.

  const [messages, setMessages] = useState([
    {id: '1', text: 'Hello!', userId: '5678'},
    {id: '2', text: 'Hey there!', userId: '1234'},
    // ... Add more sample messages
  ]);
  const [text, setText] = useState('');

  const onChangeMessage = useCallback((val: string) => setText(val), []);
  const onSendMessage = useCallback(() => {
    setMessages(prev => [
      {id: (prev.length + 1).toString(), text, userId: '1234'},
      ...prev,
    ]);
    setText('');
  }, [text]);

  const isSelf = (userId: string) => userId === selfUserId;

  const renderItem = ({item}: any) => {
    console.log('renderItem was rendered at', new Date().toLocaleTimeString());
    return (
      <View
        style={isSelf(item.userId) ? listStyles.rightMsg : listStyles.leftMsg}>
        <Text>{item.text}</Text>
      </View>
    );
  };

  console.log(text, '--text');
  console.log('ChatPage was rendered at', new Date().toLocaleTimeString());

  return (
    <>
      <KeyboardAvoidingView style={listStyles.container} behavior="padding">
        <FlatList
          contentContainerStyle={listStyles.contentContainer}
          data={messages}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          keyboardShouldPersistTaps={'handled'}
          keyboardDismissMode="interactive"
          automaticallyAdjustContentInsets={false}
          contentInsetAdjustmentBehavior="never"
          maintainVisibleContentPosition={{
            minIndexForVisible: 0,
            autoscrollToTopThreshold: 100,
          }}
          automaticallyAdjustKeyboardInsets={true}
          // This will make the chat messages start from the bottom
          inverted
        />
      </KeyboardAvoidingView>

      <InputAccessoryView backgroundColor={'#ffffff'}>
        <ChatInput
          message={text}
          onChangeMessage={onChangeMessage}
          onSendMessage={onSendMessage}
        />
      </InputAccessoryView>
    </>
  );
};

interface ChatInputProps {
  message: string;
  onChangeMessage(val: string): void;
  onSendMessage(): void;
}

const MessageInputContainer: React.FC<ChatInputProps> = ({
  message,
  onChangeMessage,
  onSendMessage,
}) => {
  console.log('ChatInput was rendered at', new Date().toLocaleTimeString());

  return (
    <View style={textInputStyles.inputTextContainer}>
      <TextInput
        defaultValue={message}
        onChangeText={onChangeMessage}
        value={message}
        style={textInputStyles.inputTextStyle}
        placeholder="Type a message..."
      />

      {!!message && <Button title="Send" onPress={onSendMessage} />}
    </View>
  );
};

export const ChatInput = memo(MessageInputContainer);
