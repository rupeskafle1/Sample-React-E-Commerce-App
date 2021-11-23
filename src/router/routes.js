import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Products from "../components/Products/Products";
import Wishlist from "../components/Wishlist";
import Cart from "../components/Cart";

const NoMatch = (props) => {
    const { location } = props;
    const { pathname } = location;
    return <h1 className="text-center">{`404: Url '${pathname}' not found`}</h1>;
};

NoMatch.propTypes = {
    location: PropTypes.objectOf(PropTypes.any).isRequired,
};

const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Products} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/wishlist" component={Wishlist} />
                <Route exact path="/cart" component={Cart} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
    );
};
export default Routes;
