export class AppConfiguration {
    PORT: number;

    constructor(){
        this.PORT = process.env['PORT'] ? parseInt(process.env['PORT'], 10) : 3000;
    }
}