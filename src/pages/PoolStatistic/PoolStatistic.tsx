import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { requestCurrentPoolSend } from 'store/sags/requestCurrentPool/requestCurrentPoolSend';

import { ReactComponent as MasksEffects } from 'icons/masks.svg';
import { FullCentredLayout } from 'pages/components/Layouts/FullCentredLayout/FullCentredLayout';

import { PoolStatisticColumn } from './components/PoolStatisticColumn/PoolStatisticColumn';
import { PoolStatisticSidebar } from './components/PoolStatisticSidebar/PoolStatisticSidebar';

export const PoolStatistic: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const poolId = window.location.pathname.replace( /^\D+/g, '');
    dispatch(requestCurrentPoolSend(poolId));
  }, [dispatch])

  return (
    <FullCentredLayout>
      <MasksEffects />
      <PoolStatisticColumn />
      <PoolStatisticSidebar />
    </FullCentredLayout>
  );
}
