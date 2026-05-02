import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

const users=[
  {img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',intro:'',tag:'Satisfied'},
  {img:'https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',intro:'',tag:'Underserved'},
  {img:'https://plus.unsplash.com/premium_photo-1663047305318-c6debe9f633c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',intro:'',tag:'Underbanked'},
  {img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',intro:'',tag:'Unaware'},
  {img:'https://plus.unsplash.com/premium_photo-1661281292577-27c65307ac42?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',intro:'',tag:'Unserved'}
]



  return (
    <div >
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App