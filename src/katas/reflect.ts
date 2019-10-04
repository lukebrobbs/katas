import { IReflectReturnVals } from "../types";

/**
 *
 * @param promise a promise
 * @description Given a promise, should return an object with a `'fulfilled'` status, as well as the value,
 *              and an object with a `'rejected'` status and a reason:
 *              - resolved promise - `{status: "fulfilled", value: [1,2,3]}`
 *              - rejected promise - `{status: "rejected", reason: "Server Error"}`
 *
 */
export const reflect = <T = any>(
  promise: Promise<T>
): Promise<IReflectReturnVals<T>> => {
  return promise.then(
    val => {
      return {
        status: "fulfilled",
        value: val
      };
    },
    error => {
      return { status: "rejected", reason: error };
    }
  );
};
