import type { ActionArgs, ActionFunction } from '@remix-run/node';
import { json } from 'react-router';
import { db } from '~/utils/db.server';

export const loader = async () => {
  const result = await db.menu.findMany();
  return json({ menu: result });
};

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const body = await request.json();

  try {
    db.menu.create({
      data: {
        menuId: body.id,
        name: body.name,
      },
    });
    return json({ count: 1 }, 400);
  } catch (error) {
    console.log('Error');
    throw error;
  }
};
