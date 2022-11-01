let user = {
  locate: "fr",
};

import(`./${user.locate}-translation.js`)
  .catch(() => import("./en-translation.js"))
  .then(({ default: translation }) => {
    console.log(translation.Hi);
  });
