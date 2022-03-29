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
import Caja from '../../components/Area/restaurante/caja/Caja';
import Transaction from '../../components/Area/punto de venta/transaccion';


const MainRoutes = () => {
  return (
    <Routes>

        {/* Protecto Routes */}
        {/* Wrap all Route under ProtectRoutes element */}
        <Route path='/' element={<ProtectRoute/>} >
            <Route path='/' element={<InnerContent/>}>
              <Route path="/" element={ <Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<LayoutPage />} />
              <Route path="transaction" element={<Transaction/>}/>
              <Route path="restaurante" element={<Restaurante/>}>
                <Route path="ordenes" element={<Order/>}></Route>         
                <Route path="caja" element={<Caja/>}></Route>
              </Route>

              {/* Si la pagina no existe mostrar este error 404 */}
              <Route path="*" element={<NotFound />}>     
            </Route>
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