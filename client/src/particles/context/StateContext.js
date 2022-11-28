import React, {useState, useEffect, useContext, createContext} from 'react';
import { client } from '../client';
import { headerQuery } from '../utils/data';

const Context = createContext();


export const StateContext = ({children}) => {
    const [header, setHeader] = useState([]);

    const {logo, link, pageName} = header;

    useEffect(() => {
      const query = headerQuery();

      client.fetch(query)
        .then((data) => {
            setHeader(data[0]);
        })
    }, []);

    return (
        <Context.Provider
            value={{
                header,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
