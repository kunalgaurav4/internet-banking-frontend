import { Component, OnInit } from "@angular/core";
import { FormBuilder} from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../service/user.service";
import { User } from "./User";
/**
 * @author Dileep
 * @version 1.0
 */
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  //loginForm:FormGroup
  message: string;

  constructor(
    private fb: FormBuilder,
    private uService: UserService,
    private router: Router
  ) { }
  user = new User();
  ngOnInit(): void { }
  login() {
    this.uService.loginUserFromRemote(this.user).subscribe(
      (data) => {
        console.log("response received"), this.uService.setLoginStatus(true);
        this.user = data;
        this.uService.setRole(this.user.role = data.role);
        console.log(this.uService.getRole());
        this.router.navigate(["/account"]);
      },
      (error) => {
        console.log("exception occured");
        this.message = "Invalid Credentials, Please Try Again";
      }
    );
  }

}
