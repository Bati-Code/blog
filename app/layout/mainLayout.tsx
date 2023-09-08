import { Outlet, useOutlet } from '@remix-run/react';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { db } from '~/utils/db.server';
import Header from './header';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className={classNames('layout')}>
      <Header />
      {children}
      <div className={classNames('content')}></div>
      <div className={classNames('footer')}></div>
    </div>
  );
}
