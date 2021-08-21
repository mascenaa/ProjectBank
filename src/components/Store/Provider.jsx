import React from 'react'
import Context from './Context'


const StoreProvider = () => {




    
    return (
        <Context.Provider value={{
            token,
            setToken,
        }}>
            {children}
        </Context.Provider>
    )

}