////////////////////////////////////////////////////////// Module
import Router, { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { observer } from "mobx-react-lite";
////////////////////////////////////////////////////////// Module

const Home = observer((props) => {
    const router = useRouter();
    const { common } = props.store;

    //------------------------------------------------- Init Load
    const initLoad = ({ initCheck, callback }) => {};
    //------------------------------------------------- Init Load

    //------------------------------------------------- Router isReady
    useEffect(() => {
        if (router.isReady && router.pathname == "/") {
            initLoad({
                callback: (e) => {},
            });
            console.log(router.isReady, router.asPath);
        }
    }, [router.isReady]);
    //------------------------------------------------- Router isReady

    return <>{common.test}</>;
});

export default Home;
