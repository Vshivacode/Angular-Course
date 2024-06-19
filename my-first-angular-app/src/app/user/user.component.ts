// import { Component, computed, signal } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';


// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })


// export class UserComponent {
//   // using the dummy users from the dummyusers.ts file
//   // we get the random user from the dummyusers.ts file 
//   // but how to use this users in user.component.html
//   // goto user.component.html file to apply string interpolation method
//   // and by default it will be public but we use public before the 
//   // variable for our better understanding and we can use 
//   // in other files also like in users.html 
//   // if we set private we can only use it in this file only 
//   // public selectedUser = DUMMY_USERS[randomIndex]



//   // // using getters
//   // // we use this to create a function starting with "get" keyword 
//   // // that can be used as attribute in html file
//   //  get imagePath(){
//   //   // here we used "this" because we are accessing the 
//   //   // class property inside another function 
//   //   return "assets/users/" + this.selectedUser.avatar
//   //  }


//   //  // adding event listener:
//   // //  onbuttonClicked() {
//   // //   console.log("clicked")
//   // //  }


//   // // Managing State and Changing State:
//   //  // adding event listener, Managing State and Changing State
//   // //  so when button is clicked the users changes 
//   //  onbuttonClicked(){
//   //     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
//   //     this.selectedUser = DUMMY_USERS[randomIndex]
//   //   } 




//   // using signals:
//   // these are used when we want to change only the parts of ui 
//   // or component and without changing the entire component 
//   public selectedUser = signal(DUMMY_USERS[randomIndex])

//   // instead of "get" we use computed here when using signal so that it automatically updates
//   imagePath = computed(()=>"assets/users/" + this.selectedUser().avatar)


//   // Managing State and Changing State:
//    // adding event listener, Managing State and Changing State
//   //  so when button is clicked the users changes 
//    onbuttonClicked(){
//       const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
//       // we use "set" to change the value of a signal 
//       this.selectedUser.set(DUMMY_USERS[randomIndex])
//     } 
// }









// taking the "inputs" using "signals"
// import { Component, Input, computed, input } from '@angular/core';


// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })


// export class UserComponent {

//   // now we need to take the image and name from the dummy.ts file 
//   // we need to use "component inputs" for assigning the different 
//   // image and name for each user so that all have different name and images
//   // for image we used "avatar" and for name we used "name"
//   // before this we need to use a decorator that is "input decorator"
//   // like this "@Input() propertyname"  
//   // next we use this in "app.component.html" file with "property binding"
//   // @Input() avatar

//   // @Input({required: true}) avatar!: string;     // for image from dummy-users.ts file
//   // @Input({required: true}) name!: string;       // for name from dummy-users.ts file
     // we use <string> because we are saying angular which type of data it is 
//   avatar = input.required<string>()
//   name = input.required<string>()
  

//     // get imagePath(){
//     //   return "../assets/users/" + this.avatar;
//     // }

//     imagePath = computed(()=>{
//       return "../assets/users/" + this.avatar();  // we used "this.avatar()" because we are using signals
//     })
    
//    onbuttonClicked(){} 
  
// }





// taking the outputs using signals
// here we import "output" to use in signals for creating a custom event
// import { Component, EventEmitter, Input, Output, output } from '@angular/core';


// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })


// export class UserComponent {

//   // now we need to take the image and name from the dummy.ts file 
//   // we need to use "component inputs" for assigning the different 
//   // image and name for each user so that all have different name and images
//   // for image we used "avatar" and for name we used "name"
//   // before this we need to use a decorator that is "input decorator"
//   // like this "@Input() propertyname"  
//   // next we use this in "app.component.html" file with "property binding"
//   // @Input() avatar

//   // we need to explicitly mention the type of a property 
//   // like avatar store string value so we mention "string" 
//   // @Input() avatar: string;  // gives error because avatar is not initialized in this constructor it is outside the file ex:"dummy-users.ts"

//   // so we use "!" after "avatar" to solve this issue 
//     // @Input() avatar!: string;     // for image from dummy-users.ts file
//     // @Input() name!: string;       // for name from dummy-users.ts file

//   // we are using required because sometimes we forgot to input the values to be included
//   // for example we are taking avatar and name as inputs from dummy-users.ts file
//   // if we input only the avatar we forgot to input name
//   // in that case it will miss that value so to not get such issues we use
//   // to set this as "required" means the value to be added without putting them as empty
//   // now we cant miss the values because it indicates something is missing or shows error 
//   // it will show in html file because currently we are taking the values from other file
//   // that is html file: use.component.html file
//   // we can use like this "@Input({required: true})" 
//     @Input({required: true}) avatar!: string;     // for image from dummy-users.ts file
//     @Input({required: true}) name!: string;       // for name from dummy-users.ts file
//     @Input({required: true}) id!: string;         // for id from dummy-users.ts file


//     // creating custom events using output() with <string>
//     // we use <string> because we are saying angular which type of data it is 
//     selectUser = output<string>()

//     get imagePath(){
//       return "../assets/users/" + this.avatar;
//     }

//    onbuttonClicked(){
//     // console.log("button " + this.id + " is clicked")
//     this.selectUser.emit(this.id)   // we are getting the id of the avatar when this onbuttonClicked() function is called
//    } 
  
// }












// Working with Inputs
// adding multiple users,  using getters
import { Component, EventEmitter, Input, Output } from '@angular/core';



// type aliases:
// here we create type aliases using the keyword "type" and the name we are denoting it
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

// alternative way of aliases
// interface:
// interface keyword and the name of the interface 
interface User {
  id: string;
  avatar: string;
  name: string;
}





@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {

  // now we need to take the image and name from the dummy.ts file 
  // we need to use "component inputs" for assigning the different 
  // image and name for each user so that all have different name and images
  // for image we used "avatar" and for name we used "name"
  // before this we need to use a decorator that is "input decorator"
  // like this "@Input() propertyname"  
  // next we use this in "app.component.html" file with "property binding"
  // @Input() avatar

  // we need to explicitly mention the type of a property 
  // like avatar store string value so we mention "string" 
  // @Input() avatar: string;  // gives error because avatar is not initialized in this constructor it is outside the file ex:"dummy-users.ts"

  // so we use "!" after "avatar" to solve this issue 
    // @Input() avatar!: string;     // for image from dummy-users.ts file
    // @Input() name!: string;       // for name from dummy-users.ts file

  // we are using required because sometimes we forgot to input the values to be included
  // for example we are taking avatar and name as inputs from dummy-users.ts file
  // if we input only the avatar we forgot to input name
  // in that case it will miss that value so to not get such issues we use
  // to set this as "required" means the value to be added without putting them as empty
  // now we cant miss the values because it indicates something is missing or shows error 
  // it will show in html file because currently we are taking the values from other file
  // that is html file: use.component.html file
  // we can use like this "@Input({required: true})" 
    // @Input({required: true}) avatar!: string;     // for image from dummy-users.ts file
    // @Input({required: true}) name!: string;       // for name from dummy-users.ts file
    // @Input({required: true}) id!: string;         // for id from dummy-users.ts file


    // we can simplify the above code by creating an object 
    // @Input({required: true}) user!:{
    //   id: string;
    //   avatar: string;
    //   name: string;
    // }

    // we are using
    // @Input({required: true}) user!:{
    //   id: string;
    //   avatar: string;
    //   name: string;
    // }

    // creating custom events using @Output and EventEmitter
    @Output() selectUser = new EventEmitter()

    
    // Optional: we can add <string> to know what data type we are giving 
    // @Output() selectUser = new EventEmitter<string>()
    

    get imagePath(){
      // return "../assets/users/" + this.avatar;
      // now we can use the user object that we created above in this 
      return "../assets/users/" + this.user.avatar;
    }

   onbuttonClicked(){
    // console.log("button " + this.id + " is clicked")
    // this.selectUser.emit(this.id)   // we are getting the id of the avatar when this onbuttonClicked() function is called
    // now we can use the user object that we created above in this 
    this.selectUser.emit(this.user.id)   // we are getting the id of the avatar when this onbuttonClicked() function is called
   } 
  
}
