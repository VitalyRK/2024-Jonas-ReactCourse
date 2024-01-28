import { useEffect } from "react";

export function useKey(key: string, action: () => void) {
  useEffect(() => {
    function callback(event: KeyboardEvent) {
      if (event.code.toLocaleLowerCase() === key.toLocaleLowerCase()) {
        action();
      }
    }

    document.addEventListener('keydown', callback);

    return function () {
      document.removeEventListener('keydown', callback);
    };
  }, [action, key]);
}