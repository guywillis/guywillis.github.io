
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function useFocusOnLocationChange () {
  const location = useLocation();

  useEffect(() => {
    const h1 = document.querySelector('h1');
    const tabIndex = h1?.getAttribute('tabindex');
    h1?.setAttribute('tabindex', tabIndex ?? '-1');
    h1?.focus();
  }, [location]);
}


// USAGE

// import { useFocusOnLocationChange } from '../utils'

  // useFocusOnLocationChange();
