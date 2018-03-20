import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import Navbar from "./components/Navigation/Navbar/Navbar";
import Routes from "./Routes"
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <Navbar/>
      <Routes />
    </div>
    )
  }
}

export default withRouter(App);


// var RouteComponent = () =>{
//   return (
//     <Router history={hashHistory}  >
//         <Route path="/" component={InitialApp} >
//           <IndexRoute component={InstitutionListContainer} />
//           <Route path="/institution/:institutionId" component={InstitutionViewContainer } />
//           <Route path="/institution/add/new" component={InstitutionCreateContainer }  />
//           <Route path="/institution/:institutionId/edit" component={InstitutionEditContainer }  />
//           <Route path="/books" component={BookListContainer }  />
//           <Route path="/books/create" component={BookCreationContainer }  />

//           {/* <Route path="/product/:id" component={ProductDetails }  />
//           <Route path="/:userName/cart" component={ProductCartContainer } />
//           <Route path="/admin" component={AdminViewProductContainer } />
//           <Route path="/admin/product/edit/:id" component={AdminProductEditContainer} />
//           <Route path="/create" component={AdminCreateContainer}/> */}
//           <Route path="*" component={NoMatch}/>
//         </Route>
//     </Router>)
// }


// class App extends Component {
  
  
//   render() {
//     return (
//       <div className="container">
//        <RouteComponent />
//       </div>
//     );
//   }
// }

// export default App;
