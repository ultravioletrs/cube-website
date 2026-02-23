import { source } from './lib/source';
async function test() {
  const params = await source.generateParams();
  console.log(JSON.stringify(params, null, 2));
}
test();
