import { rest } from 'msw';

export const handlers = [
  rest.post('/example', (req, res, ctx) => {
    const isJson = req.headers.get('content-type')?.endsWith('json')
    const isValidJson = isJson && req.body?.constructor.name === 'Object'
    const type = typeof req.body // typeof returns 'string' in browser and 'object' in tests
    console.log({ req, isJson, isValidJson, type });
    return res(ctx.json(true));
  })
];
