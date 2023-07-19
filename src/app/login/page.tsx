import React from 'react'

const Login = (props:any) => {
    console.log(props.allProducts);
    
  return (
    <div>Login</div>
  )
}

export async function getServerSideProps() {
    console.log(`test`);
    const data = await fetch('https://fakestoreapi.com/products')
    const allProducts = await data.json()
    console.log(`allProducts`, allProducts);
    
    return { props: { allProducts } }
  }

export default Login