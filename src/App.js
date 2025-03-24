import './App.css';
import styles from 'ansi-styles';
import convert from 'color-convert';
import { useState } from 'react';

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
  const textColor =
    randomColor === '#000000' ? { color: 'white' } : { color: '#000000' };
  return (
    <div
      style={{
        background: randomColor,
      }}
      className="app"
    >
      <p className="text" style={textColor}>
        Generated Color: {randomColor}
      </p>
      <button onClick={() => setRandomColor(colorConverter)}>Generate</button>
    </div>
  );
}
