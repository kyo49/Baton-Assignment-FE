interface Colors {
  [key: string]: string;
}

const colorMaps: Colors = {
  yellow: '#FFD850',
  blue: '#2689E1',
  green: '#82DEBD',
  pink: '#FF7D99',
  red: '#E14157',
  orange: '#FFAB43',
  transparent: '0',
};

const useRandomColor = () => {
  const colorKeys = Object.keys(colorMaps);
  const randomIndex = Math.floor(Math.random() * colorKeys.length);
  const color = colorKeys[randomIndex];

  return colorMaps[color];
};

export default useRandomColor;
