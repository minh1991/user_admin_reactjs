import React, { Component } from 'react';
import App from '../App';

class AddUsers extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         trangThaiChinhSua: true
    //     }
    // }
    
    // hienThi = () =>{
    //     if (this.state.trangThaiChinhSua === true) {
    //         return <div className="btn btn-block btn-primary" onClick = {() =>this.thayDoiTrangThai()}>Đóng thêm mới</div>
    //     } else {
    //         return <div className="btn btn-block btn-danger" onClick = {() =>this.thayDoiTrangThai()}>Thêm Mới</div>
    //     }
    // }
    // thayDoiTrangThai = () =>{
    //     this.setState({
    //         // trái ngược với trạng thái chỉnh sửa
    //         trangThaiChinhSua: !this.state.trangThaiChinhSua
    //     });
    // }

    // hienthiForm = () =>{
    //     if (this.state.trangThaiChinhSua === true) {
    //         return (
    //             <div className="card border-primary mb-3 mt-2">
    //             <div className="card-header">Thêm mới</div>
    //             <div className="card-body text-primary">
    //                 <label>Tên Users</label>
    //                 <div className="form-group">
    //                 <input type="text" className="form-control" aria-describedby="helpId" placeholder="Họ và tên" />
    //                 </div>
    //                 <label>Điện thoại</label>
    //                 <div className="form-group">
    //                 <input type="text" className="form-control" aria-describedby="helpId" placeholder="Phone Number" />
    //                 </div>
    //                 <label>Tư cách </label>
    //                 <div className="form-group">
    //                 <select className="custom-select">
    //                     <option>Lựa chọn</option>
    //                     <option value={1}>Admin</option>
    //                     <option value={2}>Modrator</option>
    //                     <option value={3}>Nomal</option>
    //                 </select>
    //                 </div>
    //                 <div className="form-group">
    //                 <div className="btn btn-primary btn-block">Thêm mới</div>
    //                 </div>
    //             </div>
    //             </div>
    //         )
    //     } 
    // }

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            Permission: ""
        }
    }
    

    isChange = (event) => {
        // lấy dữ liệu từ onChange nhập vào
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name + value);
        // đẩy dữ liệu vào state
        this.setState({
            [name]: value
        });

        //Kiểm tra đóng gói dữ liệu vào biến item
        // const item = {}
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.Permission = this.state.Permission;
        // console.log(item);
    }


    kiemtraTrangThai = () =>{
        if (this.props.hienThi === true){
            return (
                <div className="card text-left">
                <form method= "post">
                <div className="card border-primary mb-3 mt-2">
            <div className="card-header">Thêm mới</div>
            <div className="card-body text-primary">
                <label>Tên Users</label>
                <div className="form-group">
                <input type="text" onChange= {(event) => this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="Họ và tên" name = "name"/>
                </div>
                <label>Điện thoại</label>
                <div className="form-group">
                <input type="text"  onChange= {(event) => this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="Phone Number" name = "tel"/>
                </div>
                <label>Tư cách </label>
                <div className="form-group">
                <select className="custom-select" name ="Permission" onChange= {(event) => this.isChange(event)}>
                    <option>Lựa chọn</option>
                    <option value="1">Admin</option>
                    <option value="2">Modrator</option>
                    <option value="3">Nomal</option>
                </select>
                </div>
                <div className="form-group">
                <input type="reset" className="btn btn-primary btn-block" onClick= {(name, tel, Permission) => this.props.add(this.state.name, this.state.tel, this.state.Permission)} value="Submit"  />
                </div>
            </div>
            </div>
            </form>
            </div>
            )
        }
    }
    
    render() {
        // kiểm tra kết nối với App.js
        // console.log(this.props.hienThi);

        // console.log(this.state);
        return (
         
                <div>
               
                    {/* gọi hàm ở vị trí này */}
                    {/* {this.hienThi()} */}
                    {/* {this.hienthiForm()} */}
                  
                  {/* Kết nối CPN ngang cấp, gọi hàm đã kiểm tra ở trên */}
                  {this.kiemtraTrangThai()}
                </div>
           
        );
    }
}

export default AddUsers;