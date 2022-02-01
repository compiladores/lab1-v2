import { machineDescription } from "./ex.ts";
import { createFSM } from "../common.ts";
import { assertEquals } from "https://deno.land/std@0.119.0/testing/asserts.ts";
import Alphabet from "./alphabet.ts";
/**
 * Ejercicio: Palabras que incluyan en alguna parte la secuencia "abab"
 */
Deno.test("ex02", () => {
  const cases: Array<[string, boolean]> = [
    ["a", false],
    ["acaa", false],
    ["aaaac", false],
    ["aca", false],
    ["abcccccabab", true],
    ["abaccccccba", false],
    ["ababccccccc", true],
    ["ababcccccabab", true],
    ["aaabab", true],
    ["abbbbbbbbbbab", false],
  ];
  const check = createFSM(machineDescription);
  cases.forEach(([arg, expectedResult]) => {
    assertEquals(
      check(
        arg.split("").map((l) => ({
          "a": Alphabet.A,
          "b": Alphabet.B,
          "c": Alphabet.C,
        }[l] ?? Alphabet.C)),
      ),
      expectedResult,
      `Testing ${arg} should be ${expectedResult ? "valid" : "invalid"}.`,
    );
  });
});
