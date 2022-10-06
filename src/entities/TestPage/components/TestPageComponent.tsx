import React, { useEffect, useMemo, useState } from 'react';

const TestPageComponent = () => {
  const [counter, setCount] = useState(0);
  const [someArray, setSomeArray] = useState([1, 2, 3]);

  const updataArray = useMemo(() => {
    return someArray.map((num) => {
      return num + 10;
    });
  }, [someArray]);

  // componentDidMount
  useEffect(() => {}, []);
  // componentDidUpdate useEffect  ниже без завыисимости не используется
  // useEffect(() => {
  //   console.log('Компонент обновлен');
  // });
  //
  // useEffect(() => {
  //   console.log('COUNTER_new');
  // }, [counter]);
  // //
  // useEffect(() => {
  //   console.log('COUNTER_Array');
  // }, [someArray]);

  // // componentWillUnmount

  // useEffect(() => {
  //   return () => {
  //     console.log('Компонент был удален');
  //   };
  // }, []);

  return (
    <div>
      <p>{counter}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Увеличить counter
      </button>
      <hr />
      <button type="button" onClick={() => setSomeArray((prev) => [...prev, prev.length + 1])}>
        Добавить число в массив
      </button>
      {updataArray.map((num, index) => {
        return <div key={`${num + index}`}>{num}</div>;
      })}
    </div>
  );
};

export default TestPageComponent;
