// import {default as User, fullname} from './user.js'

setTimeout(() => {
  import("./user.js").then(({ default: User, fullname }) => {
    let user1 = new User("Sajid", "Rajput");

    fullname(user1);
  });
}, 5000);
