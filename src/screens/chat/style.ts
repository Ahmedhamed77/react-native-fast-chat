import {StyleSheet} from 'react-native';

export const textInputStyles = StyleSheet.create({
  container: {},
  inputTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  inputTextStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 20,
  },
});

export const listStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  rightMsg: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6', // light green
    padding: 10,
    borderRadius: 10,
    margin: 5,
    maxWidth: '80%',
  },
  leftMsg: {
    alignSelf: 'flex-start',
    backgroundColor: '#eaf0ff', // white
    padding: 10,
    borderRadius: 10,
    margin: 5,
    maxWidth: '80%',
  },
});
