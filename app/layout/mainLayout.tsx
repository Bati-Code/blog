import classNames from 'classnames';
import Header from './header';

export default function MainLayout() {
  return (
    <div className={classNames('layout')}>
      <Header />
      <div className={classNames('content')}></div>
      <div className={classNames('footer')}></div>
    </div>
  );
}
