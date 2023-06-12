import {useEffect, useState} from 'react';

const phrases = [
  'os melhores artigos sobre tecnologia',
  'as melhores vagas',
  'as melhores discussões',
  'futuras amizades',
  'futuros empregos',
];

export function useLoadingScreen() {
  const [phrase, setPhrase] = useState<string>(phrases[0]);

  function showPhrase(number: number) {
    setPhrase(phrases[number]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const number = Math.floor(Math.random() * phrases.length);
      showPhrase(number);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return {phrase};
}
