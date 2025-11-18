import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('ko-KR', {
  dateStyle: 'full',
  timeStyle: 'medium',
});

export const useSystemTime = (): string => {
  const [timestamp, setTimestamp] = useState<string>(() => formatter.format(new Date()));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimestamp(formatter.format(new Date()));
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return timestamp;
};
