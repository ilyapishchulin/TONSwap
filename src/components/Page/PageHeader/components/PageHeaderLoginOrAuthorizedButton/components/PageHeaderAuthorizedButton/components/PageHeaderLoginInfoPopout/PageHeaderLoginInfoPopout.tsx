import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TPageHeaderLoginInfoPopout } from './TPageHeaderLoginInfoPopout';
import './PageHeaderLoginInfoPopout.css';

import { selectBalance } from 'store/user/selectors/selectBalance';
import { selectName } from 'store/user/selectors/selectName';

import { ReactComponent as Icon24LogoutOutline } from 'icons/24/logout.svg';

import { Portal } from 'components/Portal/Portal';
import { Subhead } from 'components/Typography/Subhead/Subhead';
import { PageHeaderLoginInfoPopoutCell } from './components/PageHeaderLoginInfoPopoutCell/PageHeaderLoginInfoPopoutCell';

export const PageHeaderLoginInfoPopout: FC<TPageHeaderLoginInfoPopout> = ({ headerRef, onClose }) => {
  const balance = useSelector(selectBalance);
  const name = useSelector(selectName);

  useEffect(() => {
    window.addEventListener('click', onClose);
    return () => window.removeEventListener('click', onClose);
  }, [onClose]);

  if (!headerRef.current) {
    return null;
  }

  const blockInfo = headerRef.current.getBoundingClientRect();

  return (
    <Portal className="PageHeaderLoginInfoPopout" style={{ top: `${blockInfo.top + blockInfo.height + 12}px`, left: `${blockInfo.left + blockInfo.width - 214}px` }}>
      <div className="PageHeaderLoginInfoPopoutProfile">
        <Subhead className="PageHeaderLoginInfoPopoutProfile__name" weight="bold">{name}</Subhead>
        <div className="PageHeaderLoginInfoPopoutProfileFields">
          <Subhead className="PageHeaderLoginInfoPopoutProfileFields__walletId" weight="semibold">jsdkllkgsdljksgkgsld2345346</Subhead>
          <Subhead className="PageHeaderLoginInfoPopoutProfileFields__balance" weight="medium">{balance['TON']} TON</Subhead>
        </div>
      </div>
      <hr className="PageHeaderLoginInfoPopoutSeparator" />
      <PageHeaderLoginInfoPopoutCell onClick={() => document.location.reload()} Icon={Icon24LogoutOutline} text="Log out" />
    </Portal>
  );
}
