import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../utils/auth.service";
import {NbToastrService} from "@nebular/theme";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userData = [];
  password: string = '';
  name: string ='';
  email: string = '';
  signupResponse: any;

  constructor(public auth: AuthService,
              private toastrService: NbToastrService,
              private router: Router) { }

  ngOnInit() {
    // this.user.currentUserData.subscribe(userData => this.userData = userData)
  }
  // // signUp(data){
  // //
  // //   this.user.changeData(data);
  // // }
  //
  // ngAfterViewInit() {
  //   // this.keyboard = new '' ({
  //   //   // onChange: input => this.onChange(input),
  //   //   // onKeyPress: button => this.onKeyPress(button),
  //   //   mergeDisplay: true,
  //   //   layoutName: "default",
  //   //   layout: {
  //   //     default: [
  //   //       "q w e r t y u i o p",
  //   //       "a s d f g h j k l",
  //   //       "{shift} z x c v b n m {backspace}",
  //   //       "{numbers} {space} {ent}"
  //   //     ],
  //   //     shift: [
  //   //       "Q W E R T Y U I O P",
  //   //       "A S D F G H J K L",
  //   //       "{shift} Z X C V B N M {backspace}",
  //   //       "{numbers} {space} {ent}"
  //   //     ],
  //   //     numbers: ["1 2 3", "4 5 6", "7 8 9", "{abc} 0 {backspace}"]
  //   //   },
  //   //   display: {
  //   //     "{numbers}": "123",
  //   //     "{ent}": "return",
  //   //     "{escape}": "esc ⎋",
  //   //     "{tab}": "tab ⇥",
  //   //     "{backspace}": "⌫",
  //   //     "{capslock}": "caps lock ⇪",
  //   //     "{shift}": "⇧",
  //   //     "{controlleft}": "ctrl ⌃",
  //   //     "{controlright}": "ctrl ⌃",
  //   //     "{altleft}": "alt ⌥",
  //   //     "{altright}": "alt ⌥",
  //   //     "{metaleft}": "cmd ⌘",
  //   //     "{metaright}": "cmd ⌘",
  //   //     "{abc}": "ABC"
  //   //   }
  //   //
  //   // });
  // }
  //
  // onChange = (input: string) => {
  //   this.value = input;
  //   console.log("Input changed", input);
  // };
  //
  // onKeyPress = (button: string) => {
  //   console.log("Button pressed", button);
  //
  //   /**
  //    * If you want to handle the shift and caps lock buttons
  //    */
  //   if (button === "{shift}" || button === "{lock}") this.handleShift();
  // };
  //
  // onInputChange = (event: any) => {
  //   this.keyboard.setInput(event.target.value);
  // };
  //
  // handleShift = () => {
  //   let currentLayout = this.keyboard.options.layoutName;
  //   let shiftToggle = currentLayout === "default" ? "shift" : "default";
  //
  //   this.keyboard.setOptions({
  //     layoutName: shiftToggle
  //   });
  // };
  //
  // handleNumbers() {
  //   let currentLayout = this.keyboard.options.layoutName;
  //   let numbersToggle = currentLayout !== "numbers" ? "numbers" : "default";
  //
  //   this.keyboard.setOptions({
  //     layoutName: numbersToggle
  //   });
  // }


  async signUp(name:string, email: string, password: string) {
    try {
      this.signupResponse = await this.auth.signUp(name ,email, password);
      localStorage.setItem('token', this.signupResponse.access_token);
      if(this.signupResponse.is_admin) {
        this.router.navigate(['app/pages/analytics']);
      } else {
        this.router.navigate(['app/pages/mail']);
      }
    } catch (e: any) {
      this.toastrService.show(e.error.message, 'Signup Failed', { status: 'warning' });
    }
  }
  }
