import React, { useEffect, useState } from 'react';
import MicroModal from 'react-micro-modal';
import { TokenMetadata } from '../../services/ft-contract';
import { ArrowDownGreen } from '../icon';
import { isMobile } from '~utils/device';
import { FormattedMessage, useIntl } from 'react-intl';
import { TokenBalancesView } from '~services/token';
import { IoCloseOutline } from 'react-icons/io5';
import CommenBasses from '~components/tokens/CommenBasses';
import Table from '~components/table/Table';
import { useTokensData } from '~state/token';
import { toRealSymbol } from '~utils/token';

function sort(a: any, b: any) {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else {
    return a;
  }
}

export default function SelectToken({
  tokens,
  selected,
  render,
  onSelect,
  addToken,
  standalone,
  placeholder,
  balances,
}: {
  tokens: TokenMetadata[];
  selected: string | React.ReactElement;
  standalone?: boolean;
  placeholder?: string;
  render?: (token: TokenMetadata) => string;
  onSelect?: (token: TokenMetadata) => void;
  onSearch?: (value: string) => void;
  addToken?: () => JSX.Element;
  balances?: TokenBalancesView;
}) {
  const [listData, setListData] = useState<TokenMetadata[]>([]);
  const [currentSort, setSort] = useState<string>('down');
  const [sortBy, setSortBy] = useState<string>('near');

  console.log(listData);

  if (!onSelect) {
    return (
      <button className="focus:outline-none p-1" type="button">
        {selected}
      </button>
    );
  }
  const dialogWidth = isMobile() ? '75%' : '35%';
  const dialogMinwidth = isMobile() ? 340 : 490;
  const dialogHidth = isMobile() ? '95%' : '57%';
  const intl = useIntl();
  const {
    tokensData,
    loading: loadingTokensData,
    trigger,
  } = useTokensData(tokens, balances);
  useEffect(() => {
    trigger();
  }, [trigger]);

  useEffect(() => {
    if (!loadingTokensData) {
      const sortedData = [...tokensData].sort(sortTypes[currentSort].fn);
      setListData(sortedData);
    }
  }, [loadingTokensData, tokensData]);

  useEffect(() => {
    if (!!tokensData) {
      const sortedData = [...tokensData].sort(sortTypes[currentSort].fn);
      setListData(sortedData);
    }
  }, [currentSort, sortBy]);

  const sortTypes: { [key: string]: any } = {
    up: {
      class: 'sort-up',
      fn: (a: any, b: any) => sort(a[sortBy], b[sortBy]),
    },
    down: {
      class: 'sort-down',
      fn: (a: any, b: any) => sort(b[sortBy], a[sortBy]),
    },
    default: {
      class: 'sort',
      fn: (a: any, b: any) => a,
    },
  };

  const onSortChange = (params: string) => {
    if (params === sortBy) {
      let nextSort;
      if (currentSort === 'down') nextSort = 'up';
      else if (currentSort === 'up') nextSort = 'down';
      setSort(nextSort);
    } else {
      setSort('up');
    }
    setSortBy(params);
  };

  const onSearch = (value: string) => {
    const result = tokensData.filter(({ symbol }) =>
      toRealSymbol(symbol)
        .toLocaleUpperCase()
        .includes(value.toLocaleUpperCase())
    );
    setListData(result);
  };

  const handleClose = (close: () => void) => {
    const sortedData = [...tokensData].sort(sortTypes[currentSort].fn);
    setListData(sortedData);
    close();
  };

  return (
    <MicroModal
      trigger={(open) => (
        <div
          className={`focus:outline-none  ${standalone ? 'w-full' : 'w-2/5'}`}
          onClick={open}
        >
          {selected || (
            <section
              className={`flex justify-between items-center px-3 py-3 ${
                standalone
                  ? 'bg-inputDarkBg text-white relative flex overflow-hidden rounded-lg align-center my-2 border border-greenLight'
                  : ''
              }`}
            >
              <p
                className="text-lg font-semibold leading-none"
                style={{ lineHeight: 'unset' }}
              >
                {placeholder ?? 'Select'}
              </p>
              <div className="pl-2">
                <ArrowDownGreen />
              </div>
            </section>
          )}
        </div>
      )}
      overrides={{
        Overlay: {
          style: {
            zIndex: 110,
            backgroundColor: 'rgba(0, 19, 32, 0.65)',
          },
        },
        Dialog: {
          style: {
            width: dialogWidth,
            minWidth: dialogMinwidth,
            borderRadius: '0.75rem',
            border: '1px solid rgba(0, 198, 162, 0.5)',
            padding: '1.5rem 0',
            background: '#1D2932',
            height: dialogHidth,
            zIndex: 100,
          },
        },
      }}
    >
      {(close) => (
        <section className="text-white">
          <div className="flex items-center justify-between pb-5 pr-8 px-6 relative">
            <h2 className="text-sm font-bold text-center">
              <FormattedMessage
                id="select_token"
                defaultMessage="Select Token"
              />
            </h2>
            {addToken && addToken()}
            <IoCloseOutline
              onClick={() => handleClose(close)}
              className="absolute text-gray-400 text-2xl right-6"
            />
          </div>
          <div className="rounded-lg w-full my-2 px-6">
            <input
              className={`text-sm min bg-black bg-opacity-25 focus:outline-none rounded-lg w-full py-2 px-3 text-greenLight`}
              placeholder={intl.formatMessage({ id: 'search_token' })}
              onChange={(evt) => onSearch(evt.target.value)}
            />
          </div>
          <CommenBasses
            tokens={tokensData}
            onClick={(token) => {
              onSelect && onSelect(token);
              close();
            }}
          />
          <Table
            sortBy={sortBy}
            currentSort={currentSort}
            onSortChange={onSortChange}
            tokens={listData}
            onClick={(token) => {
              onSelect && onSelect(token);
              close();
            }}
            balances={balances}
          />
        </section>
      )}
    </MicroModal>
  );
}
