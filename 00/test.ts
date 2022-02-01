import { machineDescription } from "./ex.ts";
import { createFSM } from "../common.ts";
import { assertEquals } from "https://deno.land/std@0.119.0/testing/asserts.ts";
import Alphabet from "./alphabet.ts";
/**
 * Ejercicio: palabras con un número de ocurrencias par de la letra a.
 */
Deno.test("ex01", () => {
  const cases: Array<[string, boolean]> = [
    ["a", false],
    ["aaa", false],
    ["aaaa", true],
    ["aa", true],
    ["abab", true],
    ["ababa", false],
    ["bbbbbbbbbabbbbbbabbbbbba", false],
    ["bbbbbbbbbabbbbbbabbbbbbabbbbbbbabbbbbbbb", true],
  ];
  const check = createFSM(machineDescription);
  cases.forEach(([arg, expectedResult]) => {
    assertEquals(
      check(
        arg.split("").map((l) => ({
          "a": Alphabet.A,
          "b": Alphabet.B,
        }[l] ?? Alphabet.B)),
      ),
      expectedResult,
      `Testing ${arg} should be ${expectedResult ? "valid" : "invalid"}.`,
    );
  });
});
