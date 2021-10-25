import React, { useState } from 'react';
import { TiArrowSortedUp } from 'react-icons/ti';
import { TokenMetadata } from '../../services/ft-contract';
import { TokenBalancesView } from '~services/token';
import { toReadableNumber } from '~utils/numbers';
import Token from '~components/tokens/Token';
import { FormattedMessage } from 'react-intl';

interface TokenListProps {
  tokens: TokenMetadata[];
  sortBy: string;
  currentSort: string;
  onSortChange?: (sortBy: string) => void;
  onClick?: (token: TokenMetadata) => void;
  render?: (token: TokenMetadata) => string;
  balances?: TokenBalancesView;
}

export default function Table({
  tokens,
  sortBy,
  currentSort,
  onSortChange,
  onClick,
  render,
  balances,
}: TokenListProps) {
  return (
    tokens.length > 0 && (
      <table className="text-left w-full text-sm text-gray-400 mt-10 table-auto">
        <thead>
          <tr className="font-normal border-b border-gray-500 border-opacity-30">
            <th
              className={`font-normal pb-2 pl-6  ${
                sortBy === 'asset' ? 'text-greenLight' : ''
              }`}
            >
              <FormattedMessage id="asset_label" defaultMessage="Asset" />
              <TiArrowSortedUp
                onClick={() => onSortChange('asset')}
                className={`inline-block cursor-pointer ${
                  sortBy === 'asset' && currentSort === 'down'
                    ? 'transform rotate-180'
                    : ''
                }`}
              />
            </th>
            <th
              className={`font-normal pb-2  ${
                sortBy === 'near' ? 'text-greenLight' : ''
              }`}
            >
              Near{' '}
              <span className="xs:text-xs">
                <br className="hidden xs:inline-block" />
                <FormattedMessage id="account_label" defaultMessage="Account" />
              </span>
              <TiArrowSortedUp
                onClick={() => onSortChange('near')}
                className={`inline-block cursor-pointer ${
                  sortBy === 'near' && currentSort === 'down'
                    ? 'transform rotate-180'
                    : ''
                }`}
              />
            </th>
            <th
              className={`font-normal pb-2  ${
                sortBy === 'ref' ? 'text-greenLight' : ''
              }`}
            >
              Ref{' '}
              <span className="xs:text-xs">
                <br className="hidden xs:inline-block" />
                <FormattedMessage id="account_label" defaultMessage="Account" />
              </span>
              <TiArrowSortedUp
                onClick={() => onSortChange('ref')}
                className={`inline-block cursor-pointer ${
                  sortBy === 'ref' && currentSort === 'down'
                    ? 'transform rotate-180'
                    : ''
                }`}
              />
            </th>
            <th
              className={`font-normal pb-2 pr-6 ${
                sortBy === 'total' ? 'text-greenLight' : ''
              }`}
            >
              <FormattedMessage id="total_label" defaultMessage="Total" />
              <TiArrowSortedUp
                onClick={() => onSortChange('total')}
                className={`inline-block cursor-pointer ${
                  sortBy === 'total' && currentSort === 'down'
                    ? 'transform rotate-180'
                    : ''
                }`}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <Token
              key={token.id}
              token={token}
              onClick={onClick}
              render={render}
              sortBy={sortBy}
              totalAmount={
                balances
                  ? toReadableNumber(token.decimals, balances[token.id])
                  : ''
              }
            />
          ))}
        </tbody>
      </table>
    )
  );
}
