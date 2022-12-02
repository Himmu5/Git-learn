import React,{FC} from 'react'
import { useDispatch } from 'react-redux';
import Button from './Button';
import  { Increse } from './Action'

type P ={}
const PuchoComponent:FC<P>=()=>{

  const dispatch = useDispatch();

  function ButtonClick(){
    dispatch(Increse);
  }

  return <div>
    <p className='text-xl '>Do you want to increse count?</p>
    <Button onClick={ButtonClick} > Plus Count </Button>
  </div>
}
export default PuchoComponent;