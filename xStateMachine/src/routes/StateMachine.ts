import { createMachine } from 'xstate';
import {Machine} from 'xstate'
import { useMachine } from '@xstate/svelte/lib/useMachine';

const lightMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QBsCWUAWAXAdATzGWQHsB3AYgFEA3MAOywAIBGRUAB2NlS1WLrYgAHogAcAThyjmAVmnMAbAtEBmAEwAGFTIA0IPImbiALDhXjxMmWtXMJAdgXGAvq711iEOILSZcBIjJBTm5efkERBGZzHDUFcWY1OXtRY2jjBT0DBBsFHHsLZllxe2MVFRS3EF9sHAAnSGCuHj4BJGFEYzV86SSsxHENHA0RkaMNexVjUQUVKpqsJtDWiMNRHsTdfUN7HAsLCQnZhQ1xBVdXIA */
createMachine({
  states: {
    "switched_off": {},
    "switched_on": {}
  },
  "initial": "switched_off"
});

const App = () => {
  
}

