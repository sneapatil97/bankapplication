import React, {Component} from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

class BankApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
         this.cityname=''
    }

    componentDidMount() {
        this.fetchBankDetails();
    }

    Bankcity = (obj) => {
        
        this.cityname= obj.target.value
        this.fetchBankDetails();
    }

    fetchBankDetails = () => {
        let url="";
        switch (this.cityname) {
            case "Pune": url = "https://vast-shore-74260.herokuapp.com/banks?city=PUNE";
                break;
            case "Banglore":url = "https://vast-shore-74260.herokuapp.com/banks?city=BANGALORE";
                break;
            case "Kolkata":url = "https://vast-shore-74260.herokuapp.com/banks?city=KOLKATA";
                break; 
            case "Delhi":url = "https://vast-shore-74260.herokuapp.com/banks?city=DELHI";
                break;
            default: url = "https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI";
        }
        axios.get(url)
            .then(res => {
                this.setState({
                    data: {
                        columns: [
                            {
                                label: 'IFSC Number',
                                field: 'ifsc',
                                sort: 'asc'
                            },

                            {
                                label: 'Bank Id',
                                field: 'bank_id',
                                sort: 'asc'
                            },
                            {
                                label: 'Branch',
                                field: 'branch',
                                sort: 'asc'
                            },
                            {
                                label: 'Address',
                                field: 'address',
                                sort: 'asc'
                            },
                            {
                                label: 'City',
                                field: 'city',
                                sort: 'asc'
                            },
                            {
                                label: 'District',
                                field: 'district',
                                sort: 'asc'
                            },
                            {
                                label: 'State',
                                field: 'state',
                                sort: 'asc'
                            },
                            {
                                label: 'Bank Name',
                                field: 'bank_name',
                                sort: 'asc'
                            },
                        ],

                        rows: res.data
                    }
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container mt-2">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="text-primary">Bank Branches</h3>
                    </div>
                    <div className="col-lg-4 form-group">
                    <form onSubmit={this.handleSubmit}>
                        <select className="form-control" value={this.state.value} onChange={this.Bankcity.bind(this)}>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                            <option value="Banglore">Banglore</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                        </form>
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