import React from 'react'
import { Header } from '../components/organisms'

const Layout = ({children}) => {
    return (
        <div>
            {/** Header */}
            <Header />
            {/** Main */}
            <main>
                {children}
            </main>
            {/** Footer */}
            Footer
        </div>
    )
}

export default Layout
