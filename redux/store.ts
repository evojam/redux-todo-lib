import { applyMiddleware, compose, createStore, Middleware, StoreEnhancer, Store } from 'redux';

import { IAppState } from './app-state';
import { TodoActions } from './todo-actions';
import { rootReducer } from './root-reducer';
import { getInitialState } from './storage-binder'

import { logger } from './middleware/logger';
import { Maybe, Identity } from 'monet';

// Add support for Redux Dev Tools:
// See: https://github.com/zalmoxisus/redux-devtools-extension

function applyDevTools(devTools: () => Middleware) {
    return (appliedMiddleware: StoreEnhancer): StoreEnhancer => Maybe.fromNull(devTools)
        .map(devToolsExtension => compose(appliedMiddleware, devToolsExtension()))
        .orJust(appliedMiddleware);
}

export const store: Store<IAppState> = Identity(applyMiddleware(logger))
    .map(applyDevTools(window.devToolsExtension))
    .get()(createStore)(rootReducer, getInitialState());