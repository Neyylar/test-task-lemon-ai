import type { NextApiResponse } from 'next';

import type { NextApiRequestBodyTyped } from '~/types/api';
import type { AddUserRequest, AddUserResponse } from '~/types/user';

export default function createUser(
  req: NextApiRequestBodyTyped<AddUserRequest>,
  res: NextApiResponse<AddUserResponse>
) {
  const user = req.body;
  if (user.name === 'forbidden') {
    res.status(400).json({ message: 'forbidden name of user' });
  } else {
    res.status(201).json({
      message: 'successfully added user',
      user,
    });
  }
}
