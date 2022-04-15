import 'devextreme/dist/css/dx.common.css';
import './themes/generated/theme.base.css';
import './themes/generated/theme.additional.css';
import './styles.css'
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './dx-styles.scss';
import LoadPanel from 'devextreme-react/load-panel';
import { NavigationProvider } from './contexts/navigation';
import { AuthProvider, useAuth } from './contexts/auth';
import { useScreenSizeClass } from './utils/media-query';
import Content from './Content';
import UnauthenticatedContent from './UnauthenticatedContent';
import { Lookup } from 'devextreme-react/data-grid';
import ContentDev from './components/contentDev/ContentDev'

  
function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadPanel visible={true} />;
  }

  if (user) {
    return <Content />;
  }

  return <UnauthenticatedContent />;
}

export default function Root() {
  const screenSizeClass = useScreenSizeClass();

  return (
    <Router>
      <AuthProvider>
        <NavigationProvider>
          <div className={`app ${screenSizeClass}`}>
            <App />
            <ContentDev/>
          </div>
        </NavigationProvider>
      </AuthProvider>
    </Router>
  );
  
}
/////////////////////////////////

// import React from 'react';
// import { Lookup, DropDownOptions } from 'devextreme-react/lookup';
// // import { employees } from './data.js';
// import axios from 'axios';

// import DataGrid, {Scrolling, Paging, Column, HeaderFilter} from 'devextreme-react/data-grid';
// //   import * as AspNetData from 'devextreme-aspnet-data-nojquery';

// //   const dataSource = AspNetData.createStore({
// //     key: 'Id',
// //     loadUrl: 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales',
// //   });

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedValue: null,
//       selectedValueId: null,
//       customer: null,
//       data: []
//     };
//     this.onValueChanged = this.onValueChanged.bind(this);
//   }

//   componentDidMount() {
//       this.getPosts()
//   }

//   getPosts() {
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(res=>{
//       if(res.data){
//         this.setState({
//           customer: res.data,
//         });
//       }
//     })
//   }

//   getComments() {
//       axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.selectedValueId}/comments`)
//         .then(res=>{
//           if(res.data){
//             this.setState({
//               data: res.data,
//             });
//           }
//         })
//   }

//   onValueChanged(e) {
//     if(e.value){
//       this.setState({
//         selectedValue: e.value,
//         selectedValueId: e.value.id
//       }, () => {
//           this.getComments()
//       });
//     }
//   }

  
//   render() {    
//       const { selectedValue, customer, data } = this.state;

//     return (
//       <div>
//            {/* <Router>
//             <AuthProvider>
//                 <NavigationProvider>
//                 <div className={`app ${screenSizeClass}`}>
//                     <App />
//                 </div>
//                 </NavigationProvider>
//             </AuthProvider>
//             </Router> */}
//         <div className="dx-fieldset">
//           <div className="dx-field">
//             <Lookup
//               value={selectedValue}
//               // items={employees}
//               searchEnabled
//               items={customer}
//               displayExpr={getDisplayExpr}
//               placeholder="Select customer"
//               onValueChanged={this.onValueChanged}
//             >
//               <DropDownOptions showTitle={false} />
//             </Lookup>
//           </div>
//         </div>
//         {selectedValue
//           && <div className="selected">
//             <span>{selectedValue.body}</span>
//           </div>
//         }
//         <DataGrid
//             height={440}
//             dataSource={data}
//             showBorders={true}
//             remoteOperations={true}
//             wordWrapEnabled={true}
//         >
//         <Scrolling mode="virtual" rowRenderingMode="virtual" />
//         <Paging defaultPageSize={100} />
//         <HeaderFilter visible={true} allowSearch={true} />

//         <Column dataField="id" width={100} />
//         <Column dataField="name" caption="Name" width={300}/>
//         <Column dataField="email" caption="Email" width={250} />
//         <Column dataField="body" caption="About" width={450} />
//         {/* <Column dataField="DateKey" caption="Date" dataType="date" format="yyyy-MM-dd" width={100} /> */}
//         {/* <Column dataField="SalesAmount" caption="Amount" format="currency" width={100}>
//           <HeaderFilter groupInterval={1000} />
//         </Column> */}
//       </DataGrid>
//       </div>
//     );
//   }
// }

// function getDisplayExpr(item) {
//   return item ? `${item.title}` : '';
// }

// export default App;
