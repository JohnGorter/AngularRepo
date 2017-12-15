import { ReflectiveInjector } from '@angular/core'


abstract class Logger{
    abstract log(line:string):any;
}

class ConsoleLogger extends Logger {
    log(line:string){
        console.log("CONSOLE: " + line);
    }
}

class FileLogger extends Logger {
    log(line:string){
        console.log("FILE: " + line);
    }
}

let options = {
    dev:true
};

let injector = ReflectiveInjector.resolveAndCreate([
    { provide:Logger, useClass:FileLogger},
    { provide:'options', useValue:options}
]);

class Program {
    logger:Logger;
    options:any;

    constructor(logger:Logger, options:any){
        this.logger = logger;
        this.options = options;
    }

    main(){
        this.logger.log("Hello main");
        console.log('options', this.options);
    }
}

new Program(injector.get(Logger), injector.get('options')).main(); 
