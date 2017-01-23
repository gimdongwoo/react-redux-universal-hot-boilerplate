export default function survey(req) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const errors = {};
      let valid = true;
      if (['bobby@gmail.com', 'timmy@microsoft.com'].indexOf(req.body.email) >= -1) {
        errors.email = 'Email address already used';
        valid = false;
      }
      if (valid) {
        resolve();
      } else {
        reject(errors);
      }
    }, 1000);
  });
}
