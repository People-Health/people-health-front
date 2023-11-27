// Exemplo: MeuComponente.tsx

import { useMyContext } from './myContext';

const MeuComponente: React.FC = () => {
  const { myValue } = useMyContext();

  return <div>{myValue}</div>;
};

export default MeuComponente;
