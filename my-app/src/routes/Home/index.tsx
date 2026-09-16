import { useEffect, useState } from "react";

export default function Home() {

    type TipoUserGit = {
        login: string;
        id: number;
        avatar_url: string;
    }
    
    const[usuarios,setUsuarios] = useState<TipoUserGit[]>([]); 

    useEffect( ()=>{

        async function loadingData(){
            try{
            const response = await fetch('https://api.github.com/users');

            if(!response.ok){
                throw new Error('Erro ao buscar usuários');
            }

            const data:TipoUserGit[] = await response.json();
            setUsuarios(data);

            }catch(error){
                console.error(error);
            }
        }
        loadingData();
    }, []);

    
    return (
        <main>
            <h2>Home</h2>
            <ul>
                {usuarios.map( (u)=>(
                    <li> {u.id} - {u.login} - <img src={u.avatar_url} alt={u.login} width={30}/></li>
                ) )}
            </ul>
        </main>
    );
}