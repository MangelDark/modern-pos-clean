import React from 'react';
import { Routes, Route, Navigate, Router } from  'react-router-dom'

import PublicRoute from  './PublicRoute';
import ProtectRoute from './ProtectRoute';
import InnerContent from './InnerContent';
import PermissionDenied from './PermissionDenied';
import NotFound from './Error/NotFound';
import Login from '../../components/Autenticaciones/login/Login';
import LayoutPage from '../../Pages/LayoutPage';
import Restaurante from '../../components/Area/restaurante';
import Order from '../../components/Area/restaurante/ordenes/Ordernes';
import Pedido from '../../components/Area/restaurante/pedidos/Pedidos';
import Transaction from '../../components/Area/punto de venta/transaction';


const MainRoutes = () => {
  return (
    <Routes>

        {/* Protecto Routes */}
        {/* Wrap all Route under ProtectRoutes element */}
        <Route path='/' element={<ProtectRoute/>} >
            <Route path='/' element={<InnerContent/>}>
              <Route path="/" element={<LayoutPage />} >
              <Route path="transaction" element={<Transaction/>}/>
              <Route path="restaurant" element={<Restaurante/>}>
                <Route path="ordenes" element={<Order/>}></Route>         
                <Route path="pedidos" element={<Pedido/>}></Route>
              </Route>

             
              </Route>
             
              
              <Route path="*" element={<NotFound />} /> 
              {/* Si la pagina no existe mostrar este error 404 */}
             
        </Route>
        </Route>

        {/* Public Routes */}
        {/* Wrap all Route under PublicRoutes element */}
       <Route path="login" element={<PublicRoute />}>
            <Route path='/login' element={<Login/>} />
       </Route>

        {/* Permission denied route */}
        <Route path="/denied" element={<PermissionDenied/>}></Route>

    </Routes>
  )
}

export default MainRoutes