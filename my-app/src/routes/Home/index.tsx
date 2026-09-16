import { useState } from "react";
import { useEffect } from "react";

export default function Home() {


    type TipoUserGit = {
        login:String;
        id:Number;
        avatar_url:String;
    }
    
    const[usuarios, setUsuarios] = useState<TipoUserGit[]>([]);

    useEffect( () => {

        async function loadingData(){

            try{

            const response = await fetch("https://api.github.com/users");

            if(!response.ok){
                throw new Error("O carregamento da lista de usuários falhou");
            }

            const data: TipoUserGit[] = await response.json();
            setUsuarios(data);

            if(data.login === e){
                setpPesquisa(data.login);
            }

            }catch(error){
                console.error(error);
            }

        }

        loadingData();

    }, []);


    const buscador = async(e:string) => {

        const response = await fetch("https://api.github.com/users");

            if(!response.ok){
                throw new Error("O carregamento da lista de usuários falhou");
            }

            const data: TipoUserGit[] = await response.json();
            setUsuarios(data);

            if(data.login === e){
                setpPesquisa(data.login);
            }

    }

    return (
        <main>
            <h2>Home</h2>

            <div>

                <div>
                    <label htmlFor="">Nome User</label>
                    <input/>
                </div>
                <div>
                    <button>Pesquisar</button>
                </div>

            </div>

            <ul>
                {usuarios.map((u) => (
                    <li key={u.id}>
                        {u.id} - {u.login} - <img src={u.avatar_url} alt={u.login} width={30} />
                    </li>
                ))}
            </ul>

        </main>
    );
    
}