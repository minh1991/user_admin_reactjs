import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () =>{
        if (this.props.permission == 1) {
            return "Admin"
        }
        else if (this.props.permission == 2) {
            return "Modrator"
        }
        else {
            return "Nomal"
        }
        
    }

    isEditClick = () =>{
        this.props.changeEditUserStatus();
        this.props.TableConnectTableDataRow();
    }

    deleteButtonClick = (idUser) =>{
        alert('bạn có muốn xóa '+ this.props.userName + ' Không ?');
        this.props.deleteButtonClick(idUser);
    }


    render() {
        return (
            
                <tr className="text-left">
                        <td scope="row">{this.props.stt +1}</td>
                        <td>{this.props.userName}</td>
                        <td>{this.props.userPhone}</td>
                        <td>{this.permissionShow()}</td>
                        <td>
                        <div className="btn-group">
                            <div className="btn btn-danger" onClick={() => this.isEditClick()}><i className="fas fa-user-edit" >Sửa</i></div>
                            <div className="btn btn-warning" onClick = {(idUser) => this.deleteButtonClick(this.props.id)}><i className="fas fa-user-times">Xóa</i></div>
                        </div>
                        </td>
                    </tr>
            
        );
    }
}

export default TableDataRow;