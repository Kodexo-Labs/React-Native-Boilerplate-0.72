import {Platform} from 'react-native';

export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// make first latter capital
export const capitalizeFirstLetter = string => {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
};

export const isIOS = Platform.OS === 'ios';

//Debounce Function
export const debounce = func => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 500);
  };
};
