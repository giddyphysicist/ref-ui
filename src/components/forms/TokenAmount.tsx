import React from 'react';
import { wallet } from '../../services/near';
import { toRoundedReadableNumber } from '../../utils/numbers';
import { TokenMetadata } from '../../services/ft-contract';
import { TokenBalancesView } from '../../services/token';
import Icon from '../tokens/Icon';
import InputAmount from './InputAmount';
import SelectToken from './SelectToken';
import AddToken from './AddToken';
import { ArrowDownGreen } from '../icon';
import { toPrecision } from '../../utils/numbers';
import { FormattedMessage } from 'react-intl';

interface TokenAmountProps {
  amount?: string;
  max?: string;
  total?: string;
  tokens: TokenMetadata[];
  selectedToken: TokenMetadata;
  balances?: TokenBalancesView;
  onMax?: (input: HTMLInputElement) => void;
  onSelectToken?: (token: TokenMetadata) => void;
  onSearchToken?: (value: string) => void;
  onChangeAmount?: (amount: string) => void;
  text?: string;
  disabled?: boolean;
}

export default function TokenAmount({
  amount,
  max,
  total,
  tokens,
  selectedToken,
  balances,
  onSelectToken,
  onSearchToken,
  onChangeAmount,
  text,
  disabled = false,
}: TokenAmountProps) {
  const render = (token: TokenMetadata) =>
    toRoundedReadableNumber({
      decimals: token.decimals,
      number: balances ? balances[token.id] : '0',
    });

  const addToken = () => <AddToken />;

  const isSignedIn = wallet.isSignedIn();

  return (
    <>
      <div className="flex justify-between text-xs font-semibold pb-0.5 w-3/5">
        <span className="text-primaryText">{text}</span>
        <span className="text-primaryText" title={total}>
          <FormattedMessage id="balance" defaultMessage="Balance" />
          :&nbsp;
          {toPrecision(total, 3, true)}
        </span>
      </div>
      <fieldset className="relative flex overflow-hidden align-center my-2">
        <InputAmount
          className="w-3/5"
          id="inputAmount"
          name={selectedToken?.id}
          max={max}
          value={amount}
          onChangeAmount={onChangeAmount}
          disabled={!isSignedIn || disabled}
        />
        <SelectToken
          tokens={tokens}
          render={render}
          addToken={addToken}
          selected={
            selectedToken && (
              <div className="flex items-center justify-end font-semibold">
                <Icon token={selectedToken} />
              </div>
            )
          }
          onSelect={onSelectToken}
          balances={balances}
        />
      </fieldset>
    </>
  );
}
