import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import classNames from 'classnames';
import { db } from '~/utils/db.server';

export const loader = async () => {
  const result = await db.menu.findMany();
  console.log(result);
  return json({ menu: result });
};

export default function Menu() {
  const data = useLoaderData<typeof loader>();
  console.log(`AAAAAAAAAAAAA : ${data}`);
  return (
    <div className={classNames('header')}>
      <div>Title </div>
    </div>
  );
}
