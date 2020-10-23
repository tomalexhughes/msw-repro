import { rest } from 'msw';

export const handlers = [
  rest.post('/example', (req, res, ctx) => {
    //typeof returns 'string' in browser and 'object' in tests
    console.log({ req }, typeof req.body);
    return res(ctx.json(true));
  })
];
