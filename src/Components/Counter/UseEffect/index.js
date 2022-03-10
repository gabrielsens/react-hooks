import { useEffect, useState } from "react"

export default function UseEffect() {

    const [name, setName] = useState('Gabriel');

    // Use effect tem que ser chamado no escopo principal, nunca dentro de uma função ou algo do gênero

    useEffect(() => {
        console.log('Use Effect em toda renderização ')
    })

    useEffect(() => {
        console.log('Use effect somente quanod o componente for montado a primeira vez')
    }, [])

    // Toda variavel ou função que usamos dentro do useEffect precisa estar listada no array de dependências
    // Recomendação do React!
    useEffect(() => {
        console.log('Use Efffect Rodou Somente em alteração de Name', name)
    }, [name])
    // Use effect vai renderizar somente quando mudar o state do name, 
    // se fosse um array de dependências vazio ele iria renderizar somente na primeira vez
    // Se não passar array de dependência ela vai renderizar a cada alteração.



    // Não pode ser transformada em async mas tem metodos para fazer promisses
    // useEffect(() => {
    //     // Usando Then
    //     fetch()
    //         .then()

    //     // usando uma função async e chamando ela em baixo
    //     async function load() {
    //         const metodo = await api.get();
    //     }
    //     load()
    // }, [])

    // Melhor forma
    // useEffect(() => {
    //     // IIFE => Imediately Invoked Function Expression

    //     (async () => {
    //         await api.get();
    //     })();
    // },[])

    // Função UnMount -> retornar função
    useEffect(() => {
        console.log('vai montar')

        return () => {
            console.log('vai desmontar')
        }
    }, [])

    return (
        <div>
            <hr />
            <span>{name}</span>
            <hr />
            <input type="text" onChange={e => setName(e.target.value)} defaultValue={name} />
        </div>
    )
}