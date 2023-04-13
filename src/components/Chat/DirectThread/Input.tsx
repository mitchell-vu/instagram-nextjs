import * as React from 'react';
import { EmojiSvg, PhotoSvg, HeartSvg } from '@/assets/svg';
import useAutosizeTextArea from '@/hooks/useAutoResizeTextarea';

interface IInputProps {
  // eslint-disable-next-line no-unused-vars
  onSendMessage: (message: string) => Promise<void>;
}

const Input: React.FC<IInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = React.useState<string>('');
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, message, 18, 5);

  const sendMessageOnEnter: React.KeyboardEventHandler<HTMLTextAreaElement> = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (!message) return;

      await onSendMessage(message);
      setMessage('');
    }
  };

  const sendMessageOnClick: React.MouseEventHandler<HTMLButtonElement> = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (!message) return;

    await onSendMessage(message);
    setMessage('');
  };

  return (
    <div className="p-5">
      <div className="flex flex-row items-center rounded-3xl border border-neutral-200 pl-3 pr-2">
        <button className="flex p-2">
          <EmojiSvg className="h-6 w-6" />
        </button>
        <div className="flex flex-1 flex-col items-stretch justify-start">
          <textarea
            ref={textAreaRef}
            placeholder="Message..."
            className="mr-1 box-content block max-w-full resize-none border-none bg-transparent p-2 text-sm leading-4 outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={sendMessageOnEnter}
          />
        </div>
        {message?.length > 0 ? (
          <button
            onClick={sendMessageOnClick}
            className="mr-2 flex p-2 text-sm font-semibold text-sky-500 hover:text-sky-900"
          >
            Send
          </button>
        ) : (
          <>
            <button className="flex p-2">
              <PhotoSvg className="h-6 w-6" />
            </button>
            <button className="flex p-2">
              <HeartSvg className="h-6 w-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
