import React, { useState, useEffect } from 'react';
import { PoolDb } from '~store/RefDatabase';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Card } from '~components/card/Card';
import { BackArrow, DownArrowLight, UpArrowDeep } from '~components/icon';
import { FarmMiningIcon } from '~components/icon/FarmMining';
import Loading from '~components/layout/Loading';

import { useHistory } from 'react-router';
import { FormattedMessage, useIntl } from 'react-intl';
// import { PolygonGray, PolygonGreen } from '~components/icon/Polygon';
import { useTokens } from '../../state/token';
import { TokenMetadata } from '~services/ft-contract';
import { canFarm, Pool } from '../../services/pool';

import {
  calculateFeePercent,
  toPrecision,
  toReadableNumber,
  toInternationalCurrencySystem,
} from '../../utils/numbers';
import { useAllWatchList, useMorePools } from '~state/pool';
import { PoolRPCView } from '~services/api';
import { FarmStamp } from '~components/icon/FarmStamp';
import { MULTI_MINING_POOLS } from '~services/near';
import { divide, find } from 'lodash';
import { WatchListStartFull } from '~components/icon/WatchListStar';

interface LocationTypes {
  morePoolIds: string[];
  tokens: TokenMetadata[];
}
function PoolRow({
  pool,
  index,
  tokens,
  watched,
}: {
  pool: PoolRPCView;
  index: number;
  tokens: TokenMetadata[];
  watched: Boolean;
}) {
  const [supportFarm, setSupportFarm] = useState<Boolean>(false);

  useEffect(() => {
    canFarm(pool.id).then((canFarm) => {
      setSupportFarm(canFarm);
    });
  }, [pool]);

  tokens.sort((a, b) => {
    if (a.symbol === 'wNEAR') return 1;
    if (b.symbol === 'wNEAR') return -1;
    return a.symbol > b.symbol ? 1 : -1;
  });

  const FarmButton = () => {
    return (
      <div className="flex items-center">
        <div className="mx-2">
          <FarmStamp />
        </div>
        <div className="">
          {MULTI_MINING_POOLS.includes(pool.id) && <FarmMiningIcon />}
        </div>
      </div>
    );
  };

  return (
    <Link
      className="grid grid-cols-12 py-3.5 text-white content-center text-sm text-left mx-8  border-b border-gray-600"
      to={{
        pathname: `/pool/${pool.id}`,
        state: { tvl: pool?.tvl, backToFarms: supportFarm },
      }}
    >
      <div className="col-span-8 flex items-center">
        <div className="mr-12 w-2">{pool?.id}</div>

        <div className="flex items-center">
          <div className="flex items-center">
            <div className="h-9 w-9 border border-gradientFromHover rounded-full mr-2">
              <img
                key={tokens[0].id.substring(0, 12).substring(0, 12)}
                className="rounded-full w-full"
                src={tokens[0].icon}
              />
            </div>

            <div className="h-9 w-9 border border-gradientFromHover rounded-full">
              <img
                key={tokens[1].id}
                className="w-full rounded-full"
                src={tokens[1].icon}
              />
            </div>
          </div>
          <div className="text-sm ml-7">
            {tokens[0].symbol + '-' + tokens[1].symbol}
          </div>
        </div>
        {supportFarm && <FarmButton />}
        {/* {watched && (
          <div className="mx-2">
            <WatchListStartFull />
          </div>
        )} */}
      </div>

      <div className="col-span-1 py-1  ">
        {calculateFeePercent(pool?.total_fee)}%
      </div>
      <div className="col-span-2  py-1">
        <FormattedMessage id="coming_soon" defaultMessage="Coming soon" />
      </div>

      <div className="col-span-1 py-1">
        ${toInternationalCurrencySystem(pool?.tvl.toString())}
      </div>
    </Link>
  );
}
const MobileRow = ({
  pool,
  tokens,
  watched,
}: {
  pool: PoolRPCView;
  tokens: TokenMetadata[];
  watched: Boolean;
}) => {
  const [supportFarm, setSupportFarm] = useState<Boolean>(false);
  const FarmButton = () => {
    return (
      <div className="flex items-center">
        <div className="mx-2">
          <FarmStamp />
        </div>
        <div className="">
          {MULTI_MINING_POOLS.includes(pool.id) && <FarmMiningIcon />}
        </div>
      </div>
    );
  };

  useEffect(() => {
    canFarm(pool.id).then((canFarm) => {
      setSupportFarm(canFarm);
    });
  }, [pool]);

  return (
    <Card
      width="w-full"
      bgcolor="bg-cardBg"
      className="rounded mb-2"
      padding="p-4"
    >
      <Link
        to={{
          pathname: `/pool/${pool.id}`,
          state: { tvl: pool?.tvl, backToFarms: supportFarm },
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <div className="flex items-center">
              <div className="h-6 w-6 border border-gradientFromHover rounded-full">
                <img
                  key={tokens[0].id.substring(0, 12).substring(0, 12)}
                  className="rounded-full w-full"
                  src={tokens[0].icon}
                />
              </div>

              <div className="h-6 w-6 border border-gradientFromHover rounded-full">
                <img
                  key={tokens[1].id}
                  className="w-full rounded-full"
                  src={tokens[1].icon}
                />
              </div>
            </div>
            <div className="text-lg ml-2 font-semibold">
              {tokens[0].symbol + '-' + tokens[1].symbol}
            </div>
            {/* {watched && (
              <div className="ml-2">
                <WatchListStartFull />
              </div>
            )} */}
          </div>
          {supportFarm && <FarmButton />}
        </div>

        <div className="flex flex-col text-base">
          <div className="flex items-center justify-between my-3">
            <div className="text-gray-400">
              <FormattedMessage id="fee" defaultMessage="Fee" />
            </div>
            <div>{calculateFeePercent(pool?.total_fee)}%</div>
          </div>
          <div className="flex items-center justify-between my-3">
            <div className="text-gray-400">
              <FormattedMessage id="h24_volume" defaultMessage="24h Volume" />
            </div>

            <div>
              <FormattedMessage id="coming_soon" defaultMessage="Coming soon" />
            </div>
          </div>
          <div className="flex items-center justify-between my-3">
            <div className="text-gray-400">
              <FormattedMessage id="tvl" defaultMessage="TVL" />
            </div>
            <div>${toInternationalCurrencySystem(pool?.tvl.toString())}</div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export const FarmMining = () => {
  return (
    <div className="flex items-center">
      {/*<div className="mr-2">*/}
      <div>
        <FarmStamp />
      </div>
      <div className="hidden">
        <FarmMiningIcon />
      </div>
    </div>
  );
};

export const MorePoolsPage = () => {
  const { state } = useLocation<LocationTypes>();
  const [sortBy, setSortBy] = useState('tvl');
  const [order, setOrder] = useState<boolean | 'desc' | 'asc'>('desc');
  const morePoolIds = state?.morePoolIds;
  const tokens = state?.tokens;
  const morePools = useMorePools({ morePoolIds, order, sortBy });

  const watchList = useAllWatchList();

  return (
    <>
      <div className="xs:hidden md:hidden lg:w-5/6 xl:w-3/4 m-auto text-white">
        <Card width="w-full" bgcolor="bg-cardBg" padding="py-7 px-0">
          <div className="mx-8">
            <Link
              to={{
                pathname: '/pools',
              }}
              className="flex items-center inline-block"
            >
              <BackArrow />
              <p className="ml-3">
                <FormattedMessage id="pools" defaultMessage="Pools" />
              </p>
            </Link>
            <div className="flex items-center mb-14 justify-center">
              <div className="flex items-center">
                <div className="h-9 w-9 border border-gradientFromHover rounded-full mr-2">
                  <img
                    key={tokens[0].id.substring(0, 12).substring(0, 12)}
                    className="rounded-full w-full mr-2"
                    src={tokens[0].icon}
                  />
                </div>

                <div className="h-9 w-9 border border-gradientFromHover rounded-full">
                  <img
                    key={tokens[1].id}
                    className="rounded-full w-full"
                    src={tokens[1].icon}
                  />
                </div>
              </div>
              <div className="text-2xl ml-7">
                {tokens[0].symbol + '-' + tokens[1].symbol}
              </div>
            </div>
          </div>

          <section className="px-2">
            <header className="grid grid-cols-12 py-2 pb-4 text-left text-sm text-gray-400 mx-8 border-b border-gray-600">
              <div className="col-span-8 flex items-center">
                <div className="mr-3 ">
                  <FormattedMessage id="pool_id" defaultMessage="Pool ID" />
                </div>
                <FormattedMessage id="pair" defaultMessage="Pair" />
              </div>
              <div
                className="col-span-1 md:hidden cursor-pointer flex items-center"
                onClick={() => {
                  setSortBy('total_fee');
                  setOrder(order === 'desc' ? 'asc' : 'desc');
                }}
              >
                <div className="mr-1">
                  <FormattedMessage id="fee" defaultMessage="Fee" />
                </div>
                {sortBy === 'total_fee' && order === 'desc' ? (
                  <DownArrowLight />
                ) : (
                  <UpArrowDeep />
                )}
              </div>
              <div
                className="col-span-2 flex items-center cursor-pointer "
                onClick={() => {
                  setSortBy('h24_volume');
                  setOrder(order === 'desc' ? 'asc' : 'desc');
                }}
              >
                <div className="mr-1">
                  <FormattedMessage
                    id="h24_volume"
                    defaultMessage="24h Volume"
                  />
                </div>
                {sortBy === '24h_volume' && order === 'desc' ? (
                  <DownArrowLight />
                ) : (
                  <UpArrowDeep />
                )}
              </div>

              <div
                className="col-span-1 flex items-center cursor-pointer"
                onClick={() => {
                  setSortBy('tvl');
                  setOrder(order === 'desc' ? 'asc' : 'desc');
                }}
              >
                <span className="mr-1 ">
                  <FormattedMessage id="tvl" defaultMessage="TVL" />
                </span>
                {sortBy === 'tvl' && order === 'desc' ? (
                  <DownArrowLight />
                ) : (
                  <UpArrowDeep />
                )}
              </div>
            </header>
            <div className="max-h-96 overflow-y-auto">
              {morePools?.map((pool, i) => (
                <div className="w-full hover:bg-poolRowHover" key={i}>
                  <PoolRow
                    key={i}
                    pool={pool}
                    index={i + 1}
                    tokens={tokens}
                    watched={!!find(watchList, { pool_id: pool.id.toString() })}
                  />
                </div>
              ))}
            </div>
          </section>
        </Card>
      </div>
      <div className="w-11/12 lg:hidden m-auto text-white">
        <Link
          to={{
            pathname: '/pools',
          }}
          className="flex items-center inline-block"
        >
          <BackArrow />
          <p className="ml-3">
            <FormattedMessage id="pools" defaultMessage="Pools" />
          </p>
        </Link>
        <div className="flex flex-col items-center mb-12 justify-center">
          <div className="flex items-center">
            <div className="h-9 w-9 border border-gradientFromHover rounded-full mr-2">
              <img
                key={tokens[0].id.substring(0, 12).substring(0, 12)}
                className="rounded-full w-full mr-2"
                src={tokens[0].icon}
              />
            </div>

            <div className="h-9 w-9 border border-gradientFromHover rounded-full">
              <img
                key={tokens[1].id}
                className="w-full rounded-full"
                src={tokens[1].icon}
              />
            </div>
          </div>
          <div className="text-2xl">
            {tokens[0].symbol + '-' + tokens[1].symbol}
          </div>
        </div>
        {morePools?.map((pool, i) => {
          return (
            <MobileRow
              tokens={tokens}
              key={i}
              pool={pool}
              watched={!!find(watchList, { pool_id: pool.id.toString() })}
            />
          );
        })}
      </div>
    </>
  );
};
