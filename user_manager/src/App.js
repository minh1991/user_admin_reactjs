import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import SearchForm from './Component/SearchForm';
import Table from './Component/Table';
import AddUsers from './Component/AddUsers';
import DataUsers from './Component/Data.json';
const uuidv1 = require('uuid/v1');


class App extends Component {
  // thongbao = () =>{alert('thông báo thành công');}
  constructor(props) {
    super(props);
    this.state = {
      hienthiForm : false,
      data : DataUsers,
      searchText:'',
      editUserStatus: false,
      userEditObject: {},
    }
  }
  // thực hiện Load dữ liệu trước khi render, sử dụng lifeCycle
  componentWillMount() {
    // kiểm tra xem có dữ liệu chưa (Một số trường hợp chưa có dữ liệu cũ)
    // console.log(localStorage.getItem('userData')); 
    // ra null tức là chưa có dữ liệu

    // nếu null thì phải khởi tạo localStorage
    if (localStorage.getItem('userData') === null) {
      localStorage.setItem ('userData', []);
    } 
    // nếu có rồi thì sẽ in ra mảng ấy
    else{
      let dataStorage = JSON.parse (localStorage.getItem('userData'));
      // sau đó setstate lại tương ứng với data mới
      this.setState({
        data : dataStorage
      });
    }
  }
  


  //thay đổi trạng thái Form edit
  changeEditUserStatus =() => {
  this.setState({
    editUserStatus : !this.state.editUserStatus
  });
  // console.log(!this.state.editUserStatus);
}
  

  doiGiaTriHienthiForm =() => {
    this.setState({
      hienthiForm : !this.state.hienthiForm
    });
  }


  //kiểm tra truyền hàm từ CPN cha sang CPN con 
  // checkConnect = () =>{
  //   alert('đã kết nối');
  // }

  //kiểm tra kết nối với AddUsers.js
  getNewUserData = (name, tel, Permission) =>{
    // alert ('ket noi voi AddUsers ok')
    // console.log(name);
    // console.log(tel);
    // console.log(Permission);
    const item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    // console.log(item);

    // đẩy dữ liệu mới vào data
   const dataPushItems = this.state.data;
   dataPushItems.push(item);
  //  console.log(dataPushItems);

    // cập nhật lại data
    this.setState({
      data: dataPushItems
    });
    // cập nhật dữ liệu trong localStorege
    localStorage.setItem('userData', JSON.stringify(dataPushItems));
  }

  // truyền thông tin từ CPN con sang CPN cha 
  getTextSearch = (dl) =>{
    // console.log(dl);
    this.setState({
      searchText:dl
    });
    // console.log(this.state.searchText);
  }

  //Chức năng sửa, kết nói CPN App.js với Table.js, kết nối Table.js với TableDataRow.js
  AppConnectTableDataRowEdit = (user) => {
    // kiểm tra kết nối với TableDataRow
    // console.log('ket noi thanh cong');
    // kiểm tra truyền dữ liệu với Table
    // console.log(user);
    this.setState({
      userEditObject:user 
    });
  }

  // nhận thông tin từ EditUsers.js thông qua SearchForm.js
  getUserEditInfoApp = (info) => {
    
    this.state.data.forEach((value,key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    });
    // cập nhật dữ liệu trong localStorege
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }

  // tạo hàm xóa dữ liệu
  deleteUserApp = (idUser) => {
    // console.log(idUser);
    const tempData = this.state.data;
    const tempDataChange = tempData.filter ( item => item.id !== idUser);
    // console.log(tempDataChange);
    this.setState({
      data: tempDataChange
    });
    
    // this.state.data.forEach((value, key) => {
    //   if (value.id === idUser) {
    //     // console.log(value.name);
    //     // console.log(key);
    //   }
    // });

    // cập nhật dữ liệu trong localStorege
    localStorage.setItem('userData', JSON.stringify(tempDataChange));
  }
 
  render() {
    // lưu trữ Local Storege
      // tạo trường lưu trữ
    // localStorage.setItem ('userData', JSON.stringify(this.state.data));
    // console.log(this.state.data);
    const ketquaSearch = []

    // lọc các phần tử trong data
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketquaSearch.push(item);
      }
    })
    // console.log(ketquaSearch);
    return (
      <div className="App">
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
            
              {/* searchForm */}
              <SearchForm 
                getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
                userEditObject = {this.state.userEditObject}
                ketnoi = {() => this.doiGiaTriHienthiForm()} 
                hienThi = {this.state.hienthiForm}
                //check kết nối từ bố (App.js) sang con (SearchForm.js)
                // checkConnectFunction = {() => this.checkConnect()}        
                // truyền từ con (SearchForm.js) sang bố (App.js)   
                checkConnectFunction = {(dl) => this.getTextSearch(dl)}
                editUserStatus = {this.state.editUserStatus}  
                changeEditUserStatus = {() => this.changeEditUserStatus()} 
              />
              {/* End searchForm */}

              <div className="col-12"><hr /></div>

              {/* listTable */} 
                <Table
                  deleteUserApp = {(idUser) => this.deleteUserApp(idUser)}
                  changeEditUserStatus = {() => this.changeEditUserStatus()} 
                  dataUsersProps = {ketquaSearch}
                  AppConnectTableEdit = {(user) => this.AppConnectTableDataRowEdit(user)}
                  />
              {/* End listTable */}

              {/* input NewsUser */}
              <AddUsers 
                hienThi = {this.state.hienthiForm}
                add = {(name, tel, Permission) => this.getNewUserData(name, tel, Permission)}
                />
              {/* End input NewsUser */}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
