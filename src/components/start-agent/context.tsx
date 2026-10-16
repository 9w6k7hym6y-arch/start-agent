import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
type State = { idea:string; setIdea:(value:string)=>void; interviews:number; setInterviews:(value:number)=>void; account:boolean; setAccount:(value:boolean)=>void; chat:string|null; setChat:(value:string|null)=>void; notice:string; notify:(text:string)=>void; prepared:boolean; setPrepared:(value:boolean)=>void };
const Context = createContext<State | null>(null);
export function PrototypeProvider({children}:{children:ReactNode}) {
 const [idea,setIdea]=useState(''); const [interviews,setInterviews]=useState(1); const [account,setAccount]=useState(false); const [chat,setChat]=useState<string|null>(null); const [notice,setNotice]=useState(''); const [prepared,setPrepared]=useState(false);
 useEffect(()=>{ if(!notice)return; const timer=setTimeout(()=>setNotice(''),3200); return ()=>clearTimeout(timer); },[notice]);
 return <Context.Provider value={{idea,setIdea,interviews,setInterviews,account,setAccount,chat,setChat,notice,notify:setNotice,prepared,setPrepared}}>{children}</Context.Provider>
}
export function usePrototype(){ const value=useContext(Context); if(!value)throw new Error('PrototypeProvider is required'); return value; }
