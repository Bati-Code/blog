import type { LinksFunction } from '@remix-run/node';
import classNames from 'classnames';

export const links: LinksFunction = () => {
  return [{ rel: '', href: '' }];
};

const Header = () => {
  return (
    <div className={classNames('header')}>
      <div>Title</div>
    </div>
  );
};

export default Header;
