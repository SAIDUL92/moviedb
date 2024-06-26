import 'server-only'

const dictionaries = {
    bn: () => import('./dictionaries/bn.json').then((module) => module.default),
    en: () => import('./dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()