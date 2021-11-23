import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';

const composeMiddleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = () => {
    if (process.env.NODE_ENV === 'development') {
        return composeMiddleware(applyMiddleware(thunk));
    }
    return applyMiddleware(thunk);
};

export default middleware;
