import React,{useState} from 'react'
import styles from './css/transaction.module.css'
import DataGridTransaction  from './components/DataGridTransaction';
import GroupButtonVertical from './components/GroupButtonVertical';
import GroupButtonPayments from './components/GroupButtonPayments';
import GroupButtonOptions from './components/GroupButtonOptions';
import GroupButtonPanel from './components/GroupButtonPanel';
import CardCustomer from './components/CardCustomer';
import CardCustomerDetails from './components/ComplexGrid';
const Transaction = () => {

  const [active,setActive] = useState('main');


  return (
    <div className={styles['container']}>
    <div className={styles['container-datagrid']}>
     <DataGridTransaction/>
    </div>
    <div className={styles['container-botones-group']}>
      <div  className={styles['container-botones-group-one']}>
      {active === "main" && <GroupButtonOptions changeValue={ active => setActive(active)}></GroupButtonOptions> }
      {active === "setquantity" && <GroupButtonPanel changeValue={ active => setActive(active)}></GroupButtonPanel>}
      </div>
      <div  className={styles['container-botones-group-two']}><GroupButtonPayments /></div>
 

    </div>
    <div className={styles['container-botones-lateral-right']}>
      <GroupButtonVertical />
    </div>
    <div className={styles['container-detalle-cliente']}>
    <CardCustomer />
    <CardCustomerDetails />
    </div>
    
</div>
  )
}

export default Transaction