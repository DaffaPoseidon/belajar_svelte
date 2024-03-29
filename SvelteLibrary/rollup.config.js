// rollup.config.js

import {config} from 'dotenv';
import replace from '@rollup/plugin-replace';

const production = !process.env.ROLLUP_WATCH;

export default {
  plugins: [
    replace({
      // stringify the object       
      process: JSON.stringify({
        env: {
          isProd: production,
          ...config().parsed // attached the .env config
        }
      }),
    }),
  ],
};