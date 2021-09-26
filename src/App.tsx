import React from 'react'

import Header from './components/Header'
import AllCars from './components/AllCars'

const App: React.FunctionComponent = () => (
    <>
        <Header name="cars appka" height={500} />
        <AllCars />
        <h1>Hello from React</h1>
    </>
)

export default App
