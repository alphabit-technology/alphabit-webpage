
'use strict';
import { div } from '/components/elements.js';
import WebContext from '/gui/document/web-context.js';

export default class Blog1View extends WebContext {
    constructor(props){
        super(props);
    }
    
    donate(){
        console.log("donate")


        var stripe = Stripe('pk_test_51NK8ILAxg5LsnkU6R3Q7gsH2lEFxQpNr4TkIjebYgbnAOVwHphL7mtT7aUWYA8v40EMVE3ihTE5XK0nLVx90fKvg00LN8ONS2m');
    }
}