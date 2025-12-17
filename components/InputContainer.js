import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';
import { useState } from 'react';

function InputContainer(props) {
  const [goalText, setGoalText] = useState('');

  const handleChnageText = (value) => {
    setGoalText(value);
  };

  const childHandleAdd = () => {
    props.onAddGoalProp(goalText);
    // setGoalText("");
  };

  return (
    <Modal>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="type goal"
          placeholdrTextColor={'#bbb'}
          value={goalText}
          onChangeText={handleChnageText}
        />
        <View style={styles.buttonContainer}>
          <Button title="add goal" onPress={childHandleAdd} />
        </View>
        {/* <View>
        <Button title="clear" onPress={handleClear} />
        </View> */}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  inputField: {
    width: '70%',
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
  },
  buttonContainer: {
    minWidth: 80,
  },
});

export default InputContainer;
