import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import UtilList from './containers/Util/UtilList';
import UtilView from './containers/Util/UtilView';
import UtilCreation from './containers/Admin/Creation/UtilCreation';
import UtilEdit from './containers/Admin/Creation/UtilEdit';
import UtilAddSupplier from './containers/Admin/Creation/UtilAddSupplier';
import SupplierList from "./containers/Supplier/SupplierList";
import SupplierCreation from "./containers/Admin/Creation/SupplierCreation";
import NotFound from "./components/UI/NotFound/NotFound";
import Aux from "./hoc/Aux";

class Routes extends Component {

    render() {
        let routes = (
            <Switch>
                <Route path="/" exact component={UtilList} />
                <Route exact path="/util/:utilId" render={(props)=>{
    <UtilView utilId={props.match.params.id} />}} />
                <Route path="/util/add/new" exact component={UtilCreation} />
    <Route exact path="/util/:utilId/edit" render={(props)=>{
    <UtilEdit utilId={props.match.params.id} />}}/>
                <Route path="/suppliers" exact component={SupplierList} />
                <Route path="/suppliers/create" exact component={SupplierCreation} />
                <Route exact path="/util/:utilId/add/supplier" render={(props)=>{
    <UtilAddSupplier institutionId={props.match.params.id} />}} />
                <Route path="*" component={NotFound}/>
            </Switch>
        )
        return (
            <div>
                {routes}
            </div>
        )
    }
}

export default withRouter(Routes);
