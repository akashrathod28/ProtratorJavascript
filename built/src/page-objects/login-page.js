"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const protractor_1 = require("protractor");
const base_page_1 = require("./base-page");
class LoginPage extends base_page_1.BasePage {
    constructor() {
        super();
        this.txtCSP = protractor_1.element(protractor_1.by.xpath("//a[contains(.,'Carrier Self Provisioning')]"));
        this.txtUsername = protractor_1.element(protractor_1.by.xpath("//input[@name='loginfmt']"));
        this.nextButton = protractor_1.element(protractor_1.by.xpath("//input[@class='win-button button_primary button ext-button primary ext-primary']"));
        this.txtPassword = protractor_1.element(protractor_1.by.xpath("//input[@name='passwd']"));
        this.btnLogin = protractor_1.element(protractor_1.by.xpath("//input[@class='win-button button_primary button ext-button primary ext-primary']"));
        this.invalidUserText = protractor_1.element(protractor_1.by.xpath("//div[@id='passwordError']"));
        this.canNotAccessText = protractor_1.element(protractor_1.by.xpath("//a[@id='cantAccessAccount']"));
        this.userNameError = protractor_1.element(protractor_1.by.xpath("//div[@id='usernameError']"));
        this.passwordError = protractor_1.element(protractor_1.by.xpath("//div[@id='passwordError']"));
        //this.userSelection=element(by.xpath("//div[@class='table-cell text-left content']"));
        this.useAnotherUser = protractor_1.element(protractor_1.by.xpath("//div[@id='otherTile']//div[@class='table-cell text-left content']"));
    }
    checkIfLoginWindowPresent() {
        return __awaiter(this, void 0, void 0, function* () {
            let flag = false;
            try {
                return yield protractor_1.element(protractor_1.by.xpath("//div[@id='otherTile']//div[@class='table-cell text-left content']")).isPresent().then(function (result) {
                    if (result) {
                        flag = true;
                    }
                    else {
                        flag = false;
                    }
                    return flag;
                });
            }
            catch (e) {
                console.log("Login exception block>>>>");
                return yield flag;
            }
        });
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlLW9iamVjdHMvbG9naW4tcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEQ7QUFFNUQsMkNBQXVDO0FBRXZDLE1BQWMsU0FBVSxTQUFRLG9CQUFRO0lBaUJ4QztRQUVDLEtBQUssRUFBRSxDQUFBO1FBQ0osSUFBSSxDQUFDLE1BQU0sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDLENBQUM7UUFDdkgsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1GQUFtRixDQUFDLENBQUMsQ0FBQztRQUNySCxJQUFJLENBQUMsZUFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGdCQUFnQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGFBQWEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUNuRSx1RkFBdUY7UUFDdkYsSUFBSSxDQUFDLGNBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0VBQW9FLENBQUMsQ0FBQyxDQUFDO0lBSWhILENBQUM7SUFFSyx5QkFBeUI7O1lBQzNCLElBQUksSUFBSSxHQUFDLEtBQUssQ0FBQztZQUNmLElBQ0E7Z0JBQ0ksT0FBTyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsTUFBTTtvQkFFakksSUFBRyxNQUFNLEVBQ1Q7d0JBQ0ksSUFBSSxHQUFDLElBQUksQ0FBQztxQkFDYjt5QkFFRDt3QkFDSSxJQUFJLEdBQUMsS0FBSyxDQUFDO3FCQUNkO29CQUNOLE9BQU8sSUFBSSxDQUFDO2dCQUNYLENBQUMsQ0FBQyxDQUFDO2FBQ047WUFDRCxPQUFNLENBQUMsRUFDUDtnQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUE7Z0JBQ3hDLE9BQU8sTUFBTSxJQUFJLENBQUM7YUFDckI7UUFDSixDQUFDO0tBQUE7Q0FFRDtBQTVERCw4QkE0REMifQ==