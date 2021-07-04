import { winSize } from '@lzshow/utils';
import * as React from 'react';
import './index.scss';

export default function CubePanel() {
  const { width, height } = winSize;
  const col = width / 40;
  const row = height / 40;
  const arr = new Array(col * row).fill(1);
  return (
    <ul className="cube-panel">
      {
      arr.map((it, i) => <li key={i} />)
    }
    </ul>
  );
}
