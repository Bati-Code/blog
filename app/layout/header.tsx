import { json, LinksFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import classNames from 'classnames';
import { useEffect, useMemo, useState } from 'react';
import { db } from '~/utils/db.server';

export const loader = async () => {
  const result = await db.menu.findMany();
  console.log(result);
  return json({ menu: result });
};
export default function Header() {
  const data = useLoaderData<typeof loader>();
  let prevScroll = 0;
  let nowScroll = 0;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setprevScrollPosition] = useState(0);
  const [nowScrollPosition, setNowScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    console.log(scrollPosition);
    setprevScrollPosition(nowScrollPosition);
    setNowScrollPosition(scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuList = () => {
    console.log(data);
    const menuMap = data.menu.map(value => {
      return (
        <div key={value.menuId} className={classNames('menuItem')}>
          {value.name}
        </div>
      );
    });
    return <div className="menuWrap flex">{menuMap}</div>;
  };

  const memoMenu = useMemo(() => {
    return menuList();
  }, []);

  console.log('Now : ' + nowScrollPosition + ' Prev : ' + prevScrollPosition + ' AA : ' + prevScroll);

  return (
    <div
      className={classNames(
        'header',
        { fixed: scrollPosition < prevScrollPosition },
        { hide: scrollPosition > prevScrollPosition }
      )}
    >
      <div>Title {data.menu[0].menuId} </div>
      <div>{memoMenu}</div>
    </div>
  );
}
