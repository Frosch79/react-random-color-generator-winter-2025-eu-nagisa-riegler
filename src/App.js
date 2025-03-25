import styles from 'ansi-styles';
import convert from 'color-convert';
import { useState } from 'react';
import cssStyle from './App.module.scss';
import Button from './Button';

function colorGenerator() {
  const colorObject = Object.keys(styles.color);

  // Random color
  const randomColor =
    colorObject[Math.floor(Math.random() * (colorObject.length - 4))];

  return randomColor;
}

function colorConverter() {
  const getColor = colorGenerator();
  const getAnsiColor = styles.color[getColor].open;
  const ansiToNum = getAnsiColor.replace('\x1B[', '').replace('m', '');
  const convertColor = '#' + convert.ansi16.hex(Number(ansiToNum));

  return convertColor;
}

export default function App() {
  const [randomColor, setRandomColor] = useState(colorConverter);
  console.log(randomColor);

  return (
    <div
      style={{
        backgroundColor: randomColor,
        color: randomColor === '#000000' ? '#ffffff' : '#000000',
      }}
      className={cssStyle.app}
    >
      Generated Color: {randomColor}
      <Button
        className={cssStyle.button}
        color={() => setRandomColor(colorConverter)}
      />
    </div>
  );
}
