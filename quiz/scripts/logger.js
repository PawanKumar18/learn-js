// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg.

function logMsg() {
  if (this && this.errMsg) {
    console.error(this.errMsg);
  }
}

const test = {
  activity: "Activity (Jan 30)",
  errMsg: "Error message test",
};

logMsg.apply(test);
