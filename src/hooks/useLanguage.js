import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {selectCurrentLanguage} from '../store/slices/auth';

export const useLanguage = () => {
  const language = useSelector(selectCurrentLanguage);

  return useMemo(() => language, [language]);
};
