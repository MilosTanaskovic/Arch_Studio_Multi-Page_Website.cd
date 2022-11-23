import React, {useState, useEffect} from 'react'
import { client } from '../../particles/client';
import { headerQuery } from '../../particles/utils/data';
import { Logo } from '../atoms'
import { NavBar } from '../moleculs'

const Header = () => {
    const [header, setHeader] = useState([]);

    const {logo, link, pageName} = header;

    useEffect(() => {
      const query = headerQuery();

      client.fetch(query)
        .then((data) => {
            setHeader(data[0]);
        })
    }, []);

    console.log('Header data', header);
    console.log('Logo data', logo);
    return (
        <header>
            <Logo logo={logo && logo} />
            <NavBar 
                links={link && link}
                pages={pageName && pageName}
            />
        </header>
    )
}

export default Header
