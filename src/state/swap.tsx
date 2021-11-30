import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Pool } from '../services/pool';
import { TokenMetadata } from '../services/ft-contract';
import { percentLess } from '../utils/numbers';
import { checkTransaction, estimateSwap, swap } from '../services/swap';
import { useHistory, useLocation } from 'react-router';
import getConfig from '~services/config';
import { FormattedMessage, useIntl } from 'react-intl';
import { CloseIcon } from '~components/icon/Actions';

const ONLY_ZEROS = /^0*\.?0*$/;

interface SwapOptions {
  tokenIn: TokenMetadata;
  tokenInAmount: string;
  tokenOut: TokenMetadata;
  slippageTolerance: number;
}

export const useSwap = ({
  tokenIn,
  tokenInAmount,
  tokenOut,
  slippageTolerance,
}: SwapOptions) => {
	// console.log('Real tokenInAmount', tokenInAmount);
  const [pool, setPool] = useState<Pool>();
  const [canSwap, setCanSwap] = useState<boolean>();
  const [tokenOutAmount, setTokenOutAmount] = useState<string>('');
  const [swapError, setSwapError] = useState<Error>();
  const [swapsToDo, setSwapsToDo] = useState();

  const { search } = useLocation();
  const history = useHistory();
  const txHashes = new URLSearchParams(search)
    .get('transactionHashes')
    ?.split(',');

  const txHash = txHashes
    ? txHashes.length > 1
      ? txHashes[1]
      : txHashes[0]
    : '';

  const minAmountOut = tokenOutAmount
    ? percentLess(slippageTolerance, tokenOutAmount)
    : null;

  const intl = useIntl();

  useEffect(() => {
    if (txHash) {
      checkTransaction(txHash)
        .then(({ transaction }) => {
          return (
            transaction?.actions[1]?.['FunctionCall']?.method_name ===
              'ft_transfer_call' ||
            transaction?.actions[0]?.['FunctionCall']?.method_name ===
              'ft_transfer_call' ||
            transaction?.actions[0]?.['FunctionCall']?.method_name === 'swap' ||
            transaction?.actions[0]?.['FunctionCall']?.method_name ===
              'near_withdraw'
          );
        })
        .then((isSwap) => {
          if (isSwap) {
            toast(
              <a
                className="text-white"
                href={`${getConfig().explorerUrl}/transactions/${txHash}`}
                target="_blank"
              >
                <FormattedMessage
                  id="swap_successful_click_to_view"
                  defaultMessage="Swap successful. Click to view"
                />
              </a>,
              {
                autoClose: 8000,
                closeOnClick: true,
                hideProgressBar: false,
                closeButton: <CloseIcon />,
                progressStyle: {
                  background: '#00FFD1',
                  borderRadius: '8px',
                },
                style: {
                  background: '#1D2932',
                  boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.15)',
                  borderRadius: '8px',
                },
              }
            );
          }
          history.replace('');
        });
    }
  }, [txHash]);

  useEffect(() => {
    setCanSwap(false);
    if (
      tokenIn &&
      tokenOut &&
      tokenInAmount &&
      !ONLY_ZEROS.test(tokenInAmount) &&
      tokenIn.id !== tokenOut.id
    ) {
      setSwapError(null);
      estimateSwap({
        tokenIn,
        tokenOut,
        amountIn: tokenInAmount,
        intl,
      })
        .then((estimates) => {
          if (!estimates) throw '';
          setCanSwap(true);
		  setSwapsToDo(estimates.estimates);
		  // console.log(estimates.estimates);
		  const estimate = (estimates.estimates.reduce((total, value) => total + Number(value.estimate), Number(0));
          setTokenOutAmount(estimate.toString());
          setPool(estimates.estimates[0].pool);
        })
        .catch((err) => {
          setCanSwap(false);
          setTokenOutAmount('');
          setSwapError(err);
        });
    } else if (
      tokenIn &&
      tokenOut &&
      !tokenInAmount &&
      ONLY_ZEROS.test(tokenInAmount) &&
      tokenIn.id !== tokenOut.id
    ) {
      setTokenOutAmount('0');
    }
  }, [tokenIn, tokenOut, tokenInAmount]);
 
// console.log('amountIn -> tokenInAmount', tokenInAmount);
  const makeSwap = (useNearBalance: boolean) => {
  // console.log('swapsToDo2', swapsToDo);
  // for(let swapToDo of swapsToDo) {
    // console.log('swap to do amount in', tokenInAmount);
    // let partialAmountIn = swapToDo.pool.partialAmountIn;
    swap({
      swapsToDo,
      tokenIn,
      tokenOut,
      tokenInAmount,
	  slippageTolerance,
      useNearBalance,
    }).catch(setSwapError);
  };
  // }

  return {
    canSwap,
    tokenOutAmount,
    minAmountOut,
    pool,
    swapError,
    makeSwap,
  };
};
