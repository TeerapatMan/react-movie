import { combineReducers } from 'redux'
import cktype from './cktype'
import reduxid from './reduxid'

export default combineReducers({//ทำให้ใช้ ruducer ได้หลาย ๆ ตัว
    cktype,//ข้อมูลจาก reducer ชื่อ cktype
    reduxid 
})
