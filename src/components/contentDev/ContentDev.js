
import React from 'react';
import { Lookup, DropDownOptions } from 'devextreme-react/lookup';
import axios from 'axios';

import DataGrid, {Scrolling, Paging, Column, HeaderFilter} from 'devextreme-react/data-grid';

import LineChart from '../LineChart/LineChart';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
   
  }

  componentDidMount() {
      this.getComments()
  }


  getComments() {
      axios.get(`https://assignment-6fdaf-default-rtdb.firebaseio.com/orders.json`)
        .then(res=>{
          if(res.data){
            this.setState({
              data: res.data,
            });
            console.log(res.data)
          }
        })
  }

  

  
  render() {    
      const { data } = this.state;

    return (
      <div>

        <DataGrid
            height={440}
            dataSource={data}
            showBorders={true}
            remoteOperations={true}
            wordWrapEnabled={true}
        >
        <Scrolling mode="virtual" rowRenderingMode="virtual" />
        <Paging defaultPageSize={100} />
        <HeaderFilter visible={true} allowSearch={true} />

        <Column dataField="_id" width={275} />
        <Column dataField="product[0].name" caption="Product Name" width={275} />
        <Column dataField="date" caption="Oder Date" width={175}/>
        <Column dataField="amount" caption="Amount" width={175}/>
        {/* <Column dataField="poduct.price" caption="Price" width={150} /> */}
        {/* <Column dataField="DateKey" caption="Date" dataType="date" format="yyyy-MM-dd" width={100} /> */}
        {/* <Column dataField="SalesAmount" caption="Amount" format="currency" width={100}>
          <HeaderFilter groupInterval={1000} />
        </Column> */}
      </DataGrid>

    

      </div>
    );
  }
}

function getDisplayExpr(item) {
  return item ? `${item.title}` : '';
}

export default App;
