import React, { FunctionComponent, useState, useEffect } from 'react';
import styles from './AutoWrittingText.module.scss';

interface IMessage {
  title?: string;
  message: string[];
}

const AutoWrittingText: FunctionComponent<IMessage> = ({ title, message }) => {
  const [text, setText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number | undefined>(150);
  const [loop, setLoop] = useState<number>(0);

  const value: number = loop % message.length;
  const fullText: string = message[value];

  const handleTyping = () => {
    setText(
      isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
    );

    setSpeed(isDeleting ? 90 : 110);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoop(loop + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, speed);
    return () => clearTimeout(timer);
  });

  return (
    <h2>
      {title} &ndash; {text}
      <span className={styles.AutoWrittingText__cursor} />
    </h2>
  );
};

export default AutoWrittingText;