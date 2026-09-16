import { useEffect, useState } from "react";

export default function Home() {
  type TipoUserGitHub = {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
  };

  const [usuarios, setUsuarios] = useState<TipoUserGitHub[]>([]);

  useEffect(() => {
    async function loadingData() {
      try {
        const response = await fetch("https://api.github.com/users");
        if (!response.ok) {
          throw new Error("Erro ao buscar os usuários");
        }

        const data: TipoUserGitHub[] = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Erro ao acessar o estado do usuário:", error);
      }
    }
    loadingData();
  }, []);

  return (
    <main>
      <h2>Home</h2>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            <img src={u.avatar_url} alt={u.login} width="200" height="200" />
            <p>{u.login}</p>
            <a href={u.html_url} target="_blank" rel="noopener noreferrer">
              Ver Perfil
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
