import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import GenerateCode from "./components/GenerateCode/GenerateCode";
import AdminList from "./components/Admin/AdminList"

import AdminLogin from "./components/Admin/AdminLogin"
import Code from "./components/GenerateCode/Code";
import "./index.css";
import QueryCode from "./components/QueryCode/QueryCode"

import { UserProvider } from "./components/UserContext";
import ApplicationNo from "./components/ApplicationNo";
import AdminListApplication from "./components/Admin/AdminListApplication";
import Loading from "./components/Loading/Loading";




export default function Routers() {
    return (
        
    <Router>
    <Switch>
    <UserProvider>
      <Route path="/basvuru-olustur">
         <LoginPage></LoginPage>
      
       
       
      </Route> 
      <Route path="/basvuru-basarili">
      <GenerateCode ></GenerateCode>
      <Code/>
      </Route>
    
      <Route path="/adminLi/:basvuruNo">
        <AdminListApplication />
      </Route>
      <Route path="/basvuru-sorgula">
        <QueryCode />
      </Route>
      
      <Route path="/basvuru/:basvuruNo">
        <ApplicationNo></ApplicationNo>
      </Route> 
      
      
      <Route path="/adminListesi">
        <AdminList />
      </Route>
      <Route path="/admin">
     
        <AdminLogin />
        
      </Route>
      <Route path="/giris">
        <Loading></Loading>
      </Route>
      
      
      <Route exact path="/">
        <Redirect to="/giris" />
      </Route>
      </UserProvider>
      
    </Switch>
  </Router>
    )
}
