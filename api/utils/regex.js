function checkEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const test = regex.test(email);
    return test;
}

module.exports = {
  checkEmail
}
