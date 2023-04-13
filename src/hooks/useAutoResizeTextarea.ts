import { useEffect } from 'react';

/**
 * Updates the height of a <textarea> when the value changes.
 * @param {HTMLTextAreaElement | null} textAreaRef
 * @param {string} value
 */
const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string,
  baseHeight?: number,
  maxRow?: number,
) => {
  useEffect(() => {
    if (textAreaRef) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.style.height = '0px';
      let scrollHeight = textAreaRef.scrollHeight;

      if (baseHeight) {
        const rows = Math.floor(scrollHeight / baseHeight);
        scrollHeight = (maxRow ? Math.min(rows, maxRow) : rows) * baseHeight;
      }

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will produce an incorrect value.
      textAreaRef.style.height = scrollHeight + 'px';
    }
  }, [textAreaRef, value, baseHeight, maxRow]);
};

export default useAutosizeTextArea;
