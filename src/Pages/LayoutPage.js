import React,{useEffect,useState} from 'react'
import Dashboard from '../components/DashBoard/Dashboard'
import { useLocation } from 'react-router-dom';
import { concatStyleSetsWithProps } from '@fluentui/react';

const LayoutPage = () => {

  const [pageTitle, setPageTitle] = useState('Home');

  const titleMap = [
    {path: '/', title:'DashBoard'},
    {path: '/transaction', title:'Transaction'},
    {path: '/restaurant/pedidos', title:'Pedidos'},
    {path: '/restaurant/ordenes', title:'Ordenes'}
  ]

  let curLoc = useLocation();
  useEffect(() => {
    const curTitle = titleMap.find(item => item.path === curLoc.pathname)
    if(curTitle && curTitle.title){
      setPageTitle(curTitle.title)
      document.title = curTitle.title
     
    }
  }, [curLoc])

  console.log(pageTitle)
  return (<Dashboard pageTitle={pageTitle}/>)
}

export default LayoutPage