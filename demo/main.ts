///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Example Angualar 2 Demo
// This code does dot follow best practises and should not be used for other purposes than 
// educational ones.
//
// John.

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Imports and declares
import 'zone.js'
import 'rxjs'
import { Directive, ElementRef, HostListener, SkipSelf, Injectable, Inject, forwardRef, OnInit, OnChanges, EventEmitter, Output, Input, ViewChild, Pipe, PipeTransform, Component, NgModule} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { Http, HttpModule } from '@angular/http'
import { Router, RouterModule, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/map'
import { TrackByFunction } from '@angular/core/src/change_detection/differs/iterable_differs';

declare var CanvasJS:any;

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Data classes
class Transaction {
    static ids:number = 0;
    id:number = 0;
    constructor (public value:number, public timestamp:Date, public message:string) {
        this.id = Transaction.ids++;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Services
class BitCoinService {
    transactions:Transaction[] = [];
    history:number[] = [];
    currentValue:number = 25;
    currentValueChanged:EventEmitter<number> = new EventEmitter();
    constructor(@Inject(Http) private http:Http){
        setInterval(() =>{

            // this.http.get("/koers")  // stream of data during open subscription
            // .map(res => res.json())
            // .subscribe(cv => {
            //     this.currentValue = cv;
            //     this.currentValueChanged.emit(this.currentValue);
            // });

            // single shot promise to fetch a value from a server...
            this.http.get("/koers")
            .map(res => res.json())
            .toPromise()
            .then(cv => {
                this.currentValue = cv;
                this.history.push(cv);
                this.currentValueChanged.emit(this.currentValue);
            });
        }, 1000);
    }
    saveTransaction (t:Transaction){
        this.transactions.push(t); 
    }

    getTransactionById(id:number): Transaction | undefined {
        return this.transactions.find((t) => t.id == id);
    }
}

class ConsoleLogger {
    static num:number = 0;
    id:number;
    constructor (){
        this.id = ConsoleLogger.num++;
        console.log("Instance:" + this.id +" created");
    }

    log(line:string){
        console.log("CONSOLE " + this.id + " : " + line);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Directives
// <p attract="red">
@Directive({ selector: 'p', exportAs:"ngAttract" })
export class AttractDirective {
    @Input('attract') bgcolor: string;
    value:string = "this is a special value";
    @Input("name") name:string = "";

    constructor(@Inject(ElementRef) private el: ElementRef) { }
    @HostListener('mouseenter') onMouseEnter() {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
    @HostListener('mouseleave') onMouseLeave() {
      this.el.nativeElement.style.backgroundColor = null;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pipes
@Pipe({
    name:'mypipe'
})
export class MyPipe implements PipeTransform {
  transform(value:string){ return "john " + value}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Components
@Component({
    selector:'chart-component',
    template:`
        <div id="chartContainer" #chart style="width:100%; height:200px"></div>  
        <a [routerLink]="['']">Back</a>
    `
})
export class ChartComponent implements OnInit {
    chart:any;
    bcs:BitCoinService;

    constructor(@Inject(BitCoinService) bcs:BitCoinService){
        this.bcs = bcs;
        this.bcs.currentValueChanged.subscribe((v:number) => {
            this.pushValue(v);
        });
    }

    ngOnInit(){
        this.chart = new CanvasJS.Chart("chartContainer", { 
                title: {
                    text: "Adding & Updating dataPoints"
                },
                data: [
                {
                    type: "spline",
                    dataPoints: [
                        { y: 10 },
                        { y:  4 },
                        { y: 18 },
                        { y:  8 }	
                    ]
                }
                ]
            });
        this.chart.render();	
    }
    pushValue(value:number){
       // console.log('newvalue:  ' + value);
       this.chart.options.data[0].dataPoints.push({ y: value});
       this.chart.render();
   
    }
}

@Component({
    selector:'transaction-detail',
    template:`
       <h1 *ngIf="transaction"> Transaction: {{ transaction.id}}</h1>
       <p> Meer details hier.. </p>
    `
})
export class TransactionComponent {
    transaction:Transaction | undefined;
    constructor(@Inject(BitCoinService) bcs:BitCoinService, @Inject(ActivatedRoute) route:ActivatedRoute){
        console.log('transaction: ' + route.snapshot.params.id);
        this.transaction = bcs.getTransactionById(route.snapshot.params.id);
    }
}

@Component({
    selector:'transaction-list',
    template:`
        <a style="display:block" [routerLink]="['/transaction',t.id]" *ngFor="let t of transactions"> {{ t.message }}
        </a>
    `
})
export class TransactionList{
    @Input() transactions:Transaction[]
    constructor(@Inject(BitCoinService) bcs:BitCoinService){
        this.transactions = bcs.transactions;
    }
}

@Component({
    selector:'buy-component',
    template:`
    <p>current value: {{currentValue | currency }}</p>
    <button (click)="buy()">Buy</button>
    <button (click)="sell()">Sell</button>
    <p>{{message | mypipe}}</p>
    <wallet-component [cash]="cash" [amount]="bitcoins" (walletchange)="wallet_changed($event)"></wallet-component>
    
    <transaction-list></transaction-list>

    <a routerLink="/">Go home</a>
    `
})
export class BuyComponent {
    currentValue:number = 25;
    cash:number = 100;
    bitcoins:number = 0;
    message:string = "";
    started:Boolean = false;
    something:Promise<string>;
    @ViewChild('chart')chart:ChartComponent;
    bcs:BitCoinService;

    constructor(@Inject(BitCoinService) bcs:BitCoinService){
        this.bcs = bcs;
        this.bcs.currentValueChanged.subscribe((data:number) => {
            console.log('data', data);
            this.currentValue = data;
        });
    }
    wallet_changed(e:number){
        console.log('e', e);
        this.cash += e;
    }

    buy(){
        this.cash -= this.currentValue;
        this.bitcoins += 1;
        this.message = "Currenty in cash " + this.cash;
        this.bcs.saveTransaction(new Transaction(this.currentValue, new Date(), "bought bitcoin at " + this.currentValue));
    }
    sell(){
        this.cash += this.currentValue;
        this.bitcoins -= 1;
        this.message = "Currenty in cash " + this.cash;
        this.bcs.saveTransaction(new Transaction(this.currentValue, new Date(), "sold bitcoin at " + this.currentValue));
        
    }
}

@Component({
    selector:'form-component',
    template:`
    <form #varForm="ngForm" (submit)="save(varForm.value)">
    <div ngModelGroup="account">
        Name: <input type="number" [(ngModel)]="name" required name="name" />
        Lastname: <input type="text" [(ngModel)]="lastname" required name="lastname" />
    </div>
    <input type="submit" value="save" />
    </form>`
})
export class FormComponent {

    router:Router;
    constructor(@Inject(Router) router:Router){
        this.router = router;
    }

    save(v:any){
        console.log('v', v);
        this.router.navigateByUrl("/");
    }
}

@Component({
    selector:'my-app',
    styles:[`
        input.ng-dirty.ng-invalid { background-color:red}
        .header { background-color:pink;height:30vh;}
        .main { background-color:yellow;height:70vh;}
    `],
    template:`<div class="header">
        <h1>Bitcoin App</h1>
        <a routerLink="/form">Registreer hier</a>
        <a routerLink="/chart">Historisch overzicht</a>
        <a routerLink="/wallet">Portemonee</a>
        <a routerLink="/buy">Handel nu!</a>
        <p #varP="ngAttract" [hidden]="name" (click)="log(varP.name)">Hello world of Bitcoin enthusiasts..</p>
        </div>
        <div class="main">
        <router-outlet></router-outlet>

        <div style="position:absolute;margin:20px;bottom:10px;right:10px;height:20vh;width:40vw;background-color:red;border:2px solid black;padding:5px;">
        <router-outlet name="aux"></router-outlet>
        </div>


        </div>
    `
})
export class AppComponent{
    logger:ConsoleLogger;
    name:String = "john";

    constructor(@Inject(ConsoleLogger) logger:ConsoleLogger){
        this.logger = logger;
    }
    save(form:any){
        this.logger.log("Value saved from form");
        console.log('form', form);
    }

    log(v:String){
        console.log(v);
    }
}

@Component({
    selector:'home-component',
    template:`<H1>Welcome TO THE BITCOIN APP</H1>
    <a routerLink="/buy">Go to buy page</a>
    `
})
export class HomeComponent{}

@Component({
    selector:'wallet-component',
    providers:[ConsoleLogger],
    template:`
       cash: {{ cash}} : amount of bitcoin: {{ amount}}
       <button (click)="getCash()">ideal payment</button>

       <a [routerLink]="[{outlets: {aux: 'chart'}}]">Check chart</a>
    `
})
export class WalletComponent {
    @Input() amount:number = 0; 
    @Input() cash:number = 0;
    @Output() walletchange:EventEmitter<number>;

    constructor(@Inject(ConsoleLogger) public logger:ConsoleLogger){
        this.logger = logger;
        this.walletchange = new EventEmitter();
    }

    getCash(){
        this.logger.log("Getting cash..");
        this.cash += 100;
        this.walletchange.emit(100);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// voorgedefinieerde routes voor de applicatie -> ook AUX routes
var routes = [
    { path:'', component:HomeComponent},
    { path:'wallet', component:WalletComponent},
    { path:'', outlet:'aux', component:WalletComponent},
    { path:'wallet', outlet:'aux', component:WalletComponent},
    { path:'chart', outlet:'aux', component:ChartComponent},
    { path:'chart', component:ChartComponent},
    { path:'form', component:FormComponent},
    { path:'transaction/:id', component:TransactionComponent},
    { path:'buy', component:BuyComponent}
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// De module bevat alle afhankelijkheden (imports/declarations/providers etc)
@NgModule({
    declarations:[ TransactionComponent, TransactionList, FormComponent, HomeComponent, AppComponent, BuyComponent, forwardRef(() => WalletComponent), MyPipe, ChartComponent, AttractDirective], 
    bootstrap:[ AppComponent],
    imports:[ BrowserModule, FormsModule, HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers:[ConsoleLogger, BitCoinService]
})
export class AppModule {}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hier wordt de applicatie gestart
platformBrowserDynamic().bootstrapModule(AppModule);




