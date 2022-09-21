"use strict";
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// [starting allAdd]
// [starting addFunctionTrigger]
// adding two numbers to each other.
exports.addNumbers = functions.https.onCall((data) => {
// [ending addFunctionTrigger]
// [starting readAddData]
// Numbers are passed from the client.
  const firstNumber = data.firstNumber;
  const secondNumber = data.secondNumber;
  // [ending readAddData]
  // [starting addHttpsError]
  // check that attributes are present and are numbers.
  if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    // Throw an HttpsError. So that the client gets the error details.
    throw new functions.https.HttpsError("invalid-argument",
        "The function must be called with " +
        "two arguments "+firstNumber+" and "+
        secondNumber+" which must both be numbers.");
  }
  // [ending addHttpsError]
  // [starting returnAddData]
  // returning result.
  return {
    firstNumber: firstNumber,
    secondNumber: secondNumber,
    operator: "+",
    operationResult: firstNumber + secondNumber,
  };
// [ending returnAddData]
});
// [ending allAdd]
