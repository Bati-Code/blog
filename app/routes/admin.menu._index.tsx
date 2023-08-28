import { db } from '~/utils/db.server';
import { json } from 'react-router';

export const loader = async () => {
  const count = await db.menu.count();
  return json({ count: count });
};
