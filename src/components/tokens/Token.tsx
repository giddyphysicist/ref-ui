import React from 'react';
import { toRealSymbol } from '~utils/token';
import { TokenMetadata } from '../../services/ft-contract';
import { toInternationalCurrencySystem } from '~utils/numbers';

interface TokenProps {
  token: TokenMetadata;
  onClick: (token: TokenMetadata) => void;
  render?: (token: TokenMetadata) => string;
  totalAmount?: string;
  sortBy?: string;
}

export default function Token({ token, onClick, sortBy }: TokenProps) {
  const { icon, symbol, id, near, ref, total } = token;
  return (
    <tr
      key={id}
      className="hover:bg-black hover:bg-opacity-10"
      onClick={() => onClick && onClick(token)}
    >
      <td className="text-sm pl-6 py-5">
        {icon ? (
          <img
            className="h-6 w-6 mr-3 inline-block"
            src={icon}
            alt={toRealSymbol(symbol)}
          />
        ) : (
          <span className="h-6 w-6 mr-3"></span>
        )}
        <span className="inline-block text-white">{toRealSymbol(symbol)}</span>
      </td>
      <td className={`py-4 ${sortBy === 'near' ? 'text-white' : ''}`}>
        {toInternationalCurrencySystem(String(near)).replace(/[\,]+/g, '')}
      </td>
      <td className={`py-4 ${sortBy === 'ref' ? 'text-white' : ''}`}>
        {toInternationalCurrencySystem(String(ref))}
      </td>
      <td className={`pr-6 py-4 ${sortBy === 'total' ? 'text-white' : ''}`}>
        {toInternationalCurrencySystem(String(total))}
      </td>
    </tr>
  );
}
