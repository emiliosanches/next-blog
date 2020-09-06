import React from "react";

export const BodyContext = React.createContext({
    bodyValue: "",
    setBody (...props: any) {}
});

export const OtherInfoContext = React.createContext({
    title: {
        value: "",
        changeValue: (...props: any) => { }
    },
    image: {
        value: "",
        changeValue: (...props: any) => { }
    },
    author: {
        value: undefined as string|undefined,
        changeValue: (...props: any) => { }
    }
});