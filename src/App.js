import './App.css';
import styles from 'ansi-styles';
import convert from 'color-convert';
import { useState } from 'react';
import Button from './Button';
import ColorText from './ColorText';

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
      }}
      className="app"
    >
      <ColorText
        className="text"
        styleColor={
          randomColor === '#000000' ? { color: 'white' } : { color: '#000000' }
        }
        color={randomColor}
      />
      <Button className="button" color={() => setRandomColor(colorConverter)} />
    </div>
  );
}
