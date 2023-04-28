interface DocumentRepository {
    getAllDocuments():DocumentInterface[];
    getOneDocument(title:string):DocumentInterface| undefined;
    createDocument(title:string,content:string,extencion:string):DocumentInterface;
    deleteDocument(title:string):string;
    // updateDocument():DocumentInterface;   
}
class DocumentManager implements DocumentRepository{
    constructor(
        public documents:DocumentInterface[],
    ){}
    getAllDocuments(): DocumentInterface[] {
        return this.documents;
        // throw new Error("Method not implemented.");
    }
    getOneDocument(title:string): DocumentInterface | undefined{
       return this.documents.find(document=>document.title === title);
    //    return document;
    }
    createDocument(title:string,content:string,extencion:string): DocumentInterface {
        throw new Error("Method not implemented.");
    }
    deleteDocument(title:string): string {
        this.documents.filter(document => document.title === title);
        return `Document with the title ${title} has removed`;
    }
    // updateDocument(): DocumentInterface {
    //     throw new Error("Method not implemented.");
    // }

    

}


const crearObjeto = (extencion:any)=>{
    objetos.forEach(element => {

        element.crearInstancia()
    });
    // if( extencion === 'jgp'){
    //     new ImagenDocument('tasdasd','asdasdad');
    // }
    // if( extencion === 'pdf'){
    //     new PdfDocument('adasda','asdasd');
    // }
    // if( extencion === 'word' ){
    //     new TextDocument('sadasdasd','asdasdasd');
    // }
    
}

const pdf = {
    crearInstancia(){
        new PdfDocument('asdasd','asdasd')
    }
}
const img = {
    crearInstancia(){
        new ImagenDocument('asdasd','asdasd')
    }
}
const text = {
    crearInstancia(){
        new TextDocument('asdasd','asdasd')
    }
}
const objetos = [pdf,text,img]