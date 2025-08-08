// jest.polyfills.ts
import 'whatwg-fetch';
import { TextEncoder, TextDecoder } from 'util';

if (typeof global.TextEncoder === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).TextDecoder = TextDecoder;
}
