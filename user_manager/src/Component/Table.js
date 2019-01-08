import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class Table extends Component {
    // mappingDataUser = () => this.props.dataUsersProps.map((value, key) =>(
    //     <TableDataRow
    //     key = {key}
    //     stt = {key}
    //     userName = {value.name}
    //     userPhone = {value.tel}
    //     permission = {value.Permission}
    //     />
    // ))
    
    deleteButtonClick = (idUser) => {
        this.props.deleteUserApp(idUser)
    }

     mappingDataUser = () =>{
         return(
            this.props.dataUsersProps.map((value, key) =>{       
                return (<TableDataRow
                    // delete user
                    deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
                    // End delete user
                    id = {value.id}
                    key = {key}
                    stt = {key}
                    userName = {value.name}
                    userPhone = {value.tel}
                    permission = {value.Permission}
                    TableConnectTableDataRow = {(user) => this.props.AppConnectTableEdit(value)}
                  // edit users
                  changeEditUserStatus = {() => this.props.changeEditUserStatus()} 
                // END edit users
               />)
           })
         )
     }


    render() {
        // console.log(this.props.dataUsersProps);
        return (
            
                <div className="col">
                <table className="table table-hover table-striped table-inverse ">
                    <thead className="thead-inverse|thead-default">
                    <tr>
                        <th>STT</th>
                        <th>Họ và tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
                </div>
            
        );
    }
}

export default Table;