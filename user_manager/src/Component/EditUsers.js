import React, { Component } from 'react';

class EditUsers extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            Permission: this.props.userEditObject.Permission,
        });
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    saveButton = () => {
        // save lại nội dung
        const info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;
       
        this.props.getUserEditInfo(info);
        
        // đóng form sửa
        this.props.changeEditUserStatus();
    }
    render() {
        // console.log(this.state);
        return (
            <div className="card text-left col-12">
            <form method= "post">
            <div className="card text-white bg-secondary mb-3 mt-2">
        <div className="card-header text-center">Sửa thông tin</div>
        <div className="card-body text-white">
            <label>Tên Users</label>
            <div className="form-group">
            <input type="text" className="form-control" aria-describedby="helpId" placeholder="Họ và tên" name = "name" defaultValue = {this.props.userEditObject.name} onChange = {(event) => this.isChange(event)}/>
            </div>
            <label>Điện thoại</label>
            <div className="form-group">
            <input type="text" className="form-control" aria-describedby="helpId" placeholder="Phone Number" name = "tel" defaultValue = {this.props.userEditObject.tel} onChange = {(event) => this.isChange(event)}/>
            </div>
            <label>Tư cách </label>
            <div className="form-group">
            <select className="custom-select" name ="Permission" defaultValue = {this.props.userEditObject.Permission} onChange = {(event) => this.isChange(event)}>
                <option>Lựa chọn</option>
                <option value="1">Admin</option>
                <option value="2">Modrator</option>
                <option value="3">Nomal</option>
            </select>
            </div>
            <div className="form-group">
            <input type="button" className="btn btn-danger btn-block" value="Save" onClick = {() => this.saveButton ()}/>
            </div>
        </div>
        </div>
        </form>
        </div>
        );
    }
}

export default EditUsers;