import React,{Component, Componet} from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

class BankApplication extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            data:'',
        }
    }

    componentDidMount()
    {
        this.fetchBankDetails();
    }

     fetchBankDetails=()=>
     {
        const url="https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI";
        axios.get(url)
        .then(res=>{
            this.setState({
                data:{
                    columns:[
                        {
                            label:'IFSC Number',
                            field:'ifsc',
                            sort:'asc'
                        },

                        {
                            label:'Bank Id',
                            field:'bank_id',
                            sort:'asc'
                        },
                        {
                            label:'Branch',
                            field:'branch',
                            sort:'asc'
                        },
                        {
                            label:'Address',
                            field:'address',
                            sort:'asc'
                        },
                        {
                            label:'City',
                            field:'city',
                            sort:'asc'
                        },
                        {
                            label:'District',
                            field:'district',
                            sort:'asc'
                        },
                        {
                            label:'State',
                            field:'state',
                            sort:'asc'
                        },
                        {
                            label:'Bank Name',
                            field:'bank_name',
                            sort:'asc'
                        },
                    ],
                    
                    rows:res.data
                }
            })
        })
        .catch(err=> console.log(err));
     }

     render()
     {
         return(
             <div className="container mt-2">
                 <div className="row">
                     <div className="col-lg-6">
                         <h3 className="text-primary">Bank Branches</h3>
                     </div>
                     <div className="col-lg-4 form-group">
                         <select className="form-control">
                            <option>Mumbai</option>
                            <option>Pune</option>
                            <option>Banglore</option>
                            <option>Kolkata</option>
                            <option>Delhi</option>
                         </select>
                     </div>
                 </div>
                 <div className="row mt-5">
                     <div className="col-lg-12">
                        <MDBDataTable
                            striped
                            bordered
                            small
                            data={this.state.data}
                            paging={true}
                            searching={true}
                        />
                     </div>
                 </div>
             </div>
            
         )
     }
}

export default BankApplication;