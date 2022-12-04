import React,{ createContext,useState } from "react";
import { isNull } from "util";

type barContextProviderProps = {
    children:React.ReactNode;
}

export type BarValue={
    open:boolean
}

type BarContextType = {
    openDrawer:boolean,
    setOpenDrawer:React.Dispatch<React.SetStateAction<BarValue | null>>
}

export const BarContext = createContext({} as BarValue)

export default function BarContextProvider({children}:barContextProviderProps){
     const [openDrawer, setOpenDrawer] = useState<BarValue | null>(null);

     return (
        
     )
}