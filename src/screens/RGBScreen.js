import React from 'react';
import { StyleSheet, View } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

/**
 *
 * @param {*} state === {red: number, green: number, blue: number}
 * @param {*} action === {type: 'change_red' | 'change_green' | 'change_blue', payload: number}
 */
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'change_red':
      return state.red + payload > 255 || state.red + payload < 0
        ? state
        : { ...state, red: state.red + payload };
    case 'change_green':
      return state.green + payload > 255 || state.green + payload < 0
        ? state
        : { ...state, green: state.green + payload };
    case 'change_blue':
      return state.blue + payload > 255 || state.blue + payload < 0
        ? state
        : { ...state, blue: state.blue + payload };
    default:
      return state;
  }
};

const RGBScreen = () => {
  const COLOR_INCREMENT = 15;
  const initialState = { red: 0, green: 0, blue: 0 };

  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <View>
      <ColorAdjuster
        color="Red"
        onIncrease={() =>
          dispatch({ type: 'change_red', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorAdjuster
        color="Green"
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorAdjuster
        color="Blue"
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 100,
          width: '100%',
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};

export default RGBScreen;

const styles = StyleSheet.create({});
