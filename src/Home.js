import React from 'react'
import {Employee} from './data'

export default function Home() {
  return (
    <>
    <div>{Employee.filter((t,index)=>{

        return t.name.includes('t');

    }).map((v)=>{

        return (<><div>{v.name} {v.Id}</div><div>{index}</div></>)

    })}</div>
    <div>

    </div>
    </>
  )
}
