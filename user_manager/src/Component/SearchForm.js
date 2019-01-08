import React, { Component } from 'react';
import EditUsers from './EditUsers';

class SearchForm extends Component {
    // Kết nối App.js và SearchForm
    // this.props.checkConnectFunction
    constructor(props) {
        super(props);
        this.state = {
            temValue: '',
            userObject: {},
        }
    }
    // nhận thông tin sửa thông tin từ EditUser.js
    getUserEditInfo = (info) => {
        this.setState({
            userObject: info
        });
        // console.log(info);
        this.props.getUserEditInfoApp(info);
    }
    
    // bắt các text trong thẻ input
    isChange = (event) =>{
        // kiểm tra kết nối
        // console.log(event.target.value);
        this.setState({
            temValue: event.target.value
        });
        // console.log(event.target.value);
        this.props.checkConnectFunction(this.state.temValue);
    }
    
    // Hiển thị bảng editForm
    isShowEditForm = () => {
        if (this.props.editUserStatus === true) {
            return <EditUsers
            getUserEditInfo = {(info) => this.getUserEditInfo(info)}
            changeEditUserStatus={() => this.props.changeEditUserStatus()} 
            userEditObject = {this.props.userEditObject}
            />
        }
    }


    hienthiNut = () =>{
        if (this.props.hienThi === true) {
            return (
                <div className="btn btn-primary" onClick = {() => this.props.ketnoi()}>Đóng thêm mới</div>
            )
        } else {
            return(
                <div className="btn btn-danger" onClick = {() => this.props.ketnoi()} >Thêm Mới</div>
            )
        }
    }
    render() {
        return (
           
                <div className="col-12">
                    <div className= "row">
                      {this.isShowEditForm()}

                    </div>
                    <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập tên cần tìm"  onChange={(event) => this.isChange(event)}/>
                        <button type="button" className="btn btn-outline-danger"
                         onClick ={(dl) => this.props.checkConnectFunction(this.state.temValue)}>Tìm Kiếm</button>
                    </div> 

                    {/* Xử lý CPN cha-con, trường hợp nút sẽ điều khiển form của CPN AddUsers.js */}
                    <div className="btn-group ml-4">
                        {this.hienthiNut()}
                    </div>  
                </div>
                </div>
               
        );
    }
}

export default SearchForm;