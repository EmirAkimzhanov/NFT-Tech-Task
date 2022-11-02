import React from 'react';
import {Routes , Route} from 'react-router-dom'
import Nftdetail from './components/nft-detail';
import TestPage from './components/testPage';
const Mainroutes = () => {

    const routes=[
        {
            link: "/",
            element: <TestPage />,
            id: 1,
          },
          {
            link: "details/:id/:token_id",
            element: <Nftdetail/>,
            id: 2,
          },
    ];
    return (
        <Routes>
        {routes.map((route) => (
          <Route path={route.link} element={route.element} key={route.id} />
        ))}
      </Routes>
    );
};

export default Mainroutes;