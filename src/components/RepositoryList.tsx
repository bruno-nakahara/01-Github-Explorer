import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useState, useEffect } from "react";

//Quando vai tipar o estado não precisa de Props no final
interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    
    useEffect(() => {
        fetch('https://api.github.com/users/bruno-nakahara/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    console.log(repositories)

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    );
}