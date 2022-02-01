import { machineDescription } from "./ex.ts";
import { createFSM } from "../common.ts";
import { assertEquals } from "https://deno.land/std@0.119.0/testing/asserts.ts";
import Alphabet from "./alphabet.ts";
/**
 * Ejercicio: palabras con tres A
 */
Deno.test("ex03", () => {
  const cases: Array<[string, boolean]> = [
    ["a", false],
    ["aaa", true],
    ["aaaa", false],
    ["aa", false],
    ["abab", false],
    ["ababa", true],
    ["bbbbbbbbbabbbbbbabbbbbba", true],
    ["bbbbbbbbbabbbbbbabbbbbbabbbbbbb", true],
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
