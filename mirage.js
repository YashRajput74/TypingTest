import { createServer, Model, Factory } from "miragejs";
import { wordsList } from "./data";

export function makeServer(){
    const server=createServer({
        models:{
            word:Model
        },
        factories:{
            word: Factory.extend({
                text(){
                    const randomIndex=Math.floor(Math.random()*wordsList.length);
                    return wordsList[randomIndex];  
                }
            })
        },
        seeds(server){
            wordsList.forEach(word=>{
                server.create("word",{text:word});
            });
        },
        routes(){
            this.namespace="api";
            this.get("/word", (schema) => {
                const allWords = schema.words.all().models;
                const randomIndex = Math.floor(Math.random() * allWords.length);
                const randomWord = allWords[randomIndex].text;
                return { word: randomWord };
            });            
        }
    });
    return server;
}