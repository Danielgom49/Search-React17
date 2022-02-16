import { results } from '../data/data'

export const getCharacter = (name) => {
    name = name.toLocaleLowerCase()
    return results.filter(c => c.name.toLocaleLowerCase().includes(name))
}