
import *  as fs from 'fs';
const data = JSON.parse(fs.readFileSync('E:\\Projetos\\animelist\\src\\data.json', 'utf8'));
const newDatabase = data.reduce(
    (acc, anime) => ({ ...acc, [anime.id]: anime }),
    {}
);
const stringfiedDatabase = JSON.stringify(newDatabase);
fs.writeFileSync("./animes.json", stringfiedDatabase)
