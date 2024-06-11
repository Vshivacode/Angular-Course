// to make a component we need to import the component 
// from angular package and after that we use the decorator
import { Component } from "@angular/core";

// this is the decorator 
@Component({
    // we are using the selector to call this component 
    selector: 'app-header',     // we use two words because by mistake we dont use any inbuilt funtions
    
    
    // next we add the standalone app
    standalone: true,
    
    // now we use the html content to be added in this component
    // for 4 to 5 lines of html code we use "template" like this 
    // template: `<h1>Hello world</h1>
    //            <p>this is the angular app</p>`,

    // if we have more lines of html then we use external file 
    // to link the html file we use "templateUrl" and we give file path
    templateUrl: "./header.component.html",

    // same apply with css file also if you want to 
    // apply 2 or 3 styles then we use "styles"
    // styles: "h1{background-color: yellow}",

    // for more styles we create external css file and we link that
    // file with "styleUrl"
    styleUrl: "./header.component.css"
})



// we use export because the class can be used in other files also
export class HeaderComponent{

}