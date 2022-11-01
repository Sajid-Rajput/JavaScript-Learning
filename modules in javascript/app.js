import * as user from "./modules/user.js";
import { BankAccount as bk , default as title} from "./modules/bankFunctions.js";

title();
let obj1 = new bk(user.user1.name, user.user1.accountNo, user.user1.accountBalance);

obj1.depositMoney(100000);
obj1.withdrawMoney(10000);
obj1.showDetails();

let obj2 = new bk(user.user2.name, user.user2.accountNo, user.user2.accountBalance);

obj2.depositMoney(20000);
obj2.withdrawMoney(100);
obj2.showDetails();
