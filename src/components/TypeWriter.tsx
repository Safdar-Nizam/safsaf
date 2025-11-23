import { useState, useEffect } from "react";

interface TypeWriterProps {
  phrases: string[];
  className?: string;
}

export const TypeWriter = ({ phrases, className = "" }: TypeWriterProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < phrase.length) {
            setCurrentText(phrase.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(phrase.slice(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};
