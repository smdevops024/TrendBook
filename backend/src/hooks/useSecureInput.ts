import { useState, ChangeEvent } from 'react';
import { sanitizeInput } from '../utils/sanitize';

export const useSecureInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const sanitized = sanitizeInput(e.target.value);
    setValue(sanitized);
  };

  return { value, onChange, setValue };
};
