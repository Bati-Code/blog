import { json, LinksFunction } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';
import MainLayout from '~/layout/mainLayout';
import { db } from '~/utils/db.server';
import indexStyle from '~/styles/layout/index.css';
import headerStyle from '~/styles/layout/header.css';
import { useEffect } from 'react';

export const meta = () => {
  return [{ title: 'My Blog' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const loader = async () => {
  const result = await db.menu.findMany();
  console.log(result);
  return json({ menu: result });
};

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: indexStyle },
    { rel: 'stylesheet', href: headerStyle },
  ];
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  useEffect(() => {
    console.log(window.scrollY);
  }, []);

  console.log(data);
  return (
    <>
      <MainLayout>
        <div className="mainBody">
          <div>asdfdf</div>
          <div>asdfdf</div>
          <div>asdfdf</div>
          <div>asdfdf</div>
        </div>
      </MainLayout>
      <Outlet />
    </>
  );
}
