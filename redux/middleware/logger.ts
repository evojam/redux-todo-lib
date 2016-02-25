import { IAppState } from '../app-state';
import { Middleware } from 'redux';

export const logger: Middleware =
    store => next => action => {
        console.groupCollapsed('Redux middleware logger:');
        console.debug('Prev state: %O', store.getState());
        console.debug('Action: %O', action);
        const result = next(action);
        console.debug('Next state: %O', store.getState());
        console.groupEnd();
        return result;
    };
