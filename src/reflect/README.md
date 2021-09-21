# Reflect

Given a promise, should return an object with a `'fulfilled'` status, as well as the value,
or an object with a `'rejected'` status and a reason:
 - resolved promise - `{status: "fulfilled", value: [1,2,3]}`
- rejected promise - `{status: "rejected", reason: "Server Error"}`