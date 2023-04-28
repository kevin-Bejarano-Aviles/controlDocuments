interface DocumentInterface{
    title:string;
    content:string;    
    getTitle():string;
    getContent():string;
    updateTitleOrContent():void;
    deleteContentOrTitle():void;
}

class TextDocument implements DocumentInterface {
    constructor(
        public title:string,
        public content:string,
    ){}
    getTitle(): string {
        throw new Error("Method not implemented.");
    }
    getContent(): string {
        throw new Error("Method not implemented.");
    }
    updateTitleOrContent(): void {
        throw new Error("Method not implemented.");
    }
    deleteContentOrTitle(): void {
        throw new Error("Method not implemented.");
    }
    
}
class ImagenDocument implements DocumentInterface {
    constructor(
        public title:string,
        public content:string,
    ){}
    getTitle(): string {
        throw new Error("Method not implemented.");
    }
    getContent(): string {
        throw new Error("Method not implemented.");
    }
    updateTitleOrContent(): void {
        throw new Error("Method not implemented.");
    }
    deleteContentOrTitle(): void {
        throw new Error("Method not implemented.");
    }
    
}
class PdfDocument implements DocumentInterface {
    constructor(
        public title:string,
        public content:string,
    ){}
    getTitle(): string {
        throw new Error("Method not implemented.");
    }
    getContent(): string {
        throw new Error("Method not implemented.");
    }
    updateTitleOrContent(): void {
        throw new Error("Method not implemented.");
    }
    deleteContentOrTitle(): void {
        throw new Error("Method not implemented.");
    }
    
}