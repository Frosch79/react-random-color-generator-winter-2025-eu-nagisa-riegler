import { useState } from 'react';
import cssStyle from './App.module.scss';
import Button from './Button';

function generateColor() {
  // Random color
  const hexRandomColor = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + hexRandomColor.slice(0, 6);
}

const checkColor = (hexcolor) => {
  const r = parseInt(hexcolor[1] + hexcolor[2], 16);
  const g = parseInt(hexcolor[3] + hexcolor[4], 16);
  const b = parseInt(hexcolor[5] + hexcolor[6], 16);

  /* source => http://www.w3.org/TR/AERT#color-contrast */
  const checkedColor =
    (r * 299 + g * 587 + b * 114) / 1000 < 125 ? '#ffffff' : '#000000';
  return checkedColor;
};

export default function App() {
  const [randomColor, setRandomColor] = useState(generateColor());

  return (
    <>
      <div
        style={{
          backgroundColor: randomColor,
          color: checkColor(generateColor()),
        }}
        className={cssStyle.app}
      >
        {`Generated Color: ${randomColor.toLowerCase()}`}
      </div>
      <div className={cssStyle.app} style={{ padding: 0 }}>
        <Button
          className={cssStyle.button}
          color={() => setRandomColor(generateColor())}
        />
      </div>
    </>
  );
}
