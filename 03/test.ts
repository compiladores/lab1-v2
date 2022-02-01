import { machineDescription } from "./ex.ts";
import { createFSM } from "../common.ts";
import { assertEquals } from "https://deno.land/std@0.119.0/testing/asserts.ts";
import Alphabet from "./alphabet.ts";
/**
 * Ejercicio: Detectar los números 12, 13, 133 y 1334. Todo lo demás es inválido.
 */
Deno.test("ex04", () => {
  const cases: Array<[string, boolean]> = [
    ["12", true],
    ["13", true],
    ["133", true],
    ["1334", true],

    ["1", false],
    ["121", false],
    ["132", false],
    ["2", false],
    ["21", false],
    ["214", false],
    ["11133", false],
    ["111334444", false],
  ];
  const check = createFSM(machineDescription);
  cases.forEach(([arg, expectedResult]) => {
    assertEquals(
      check(
        arg.split("").map((l) => ({
          "0": Alphabet.N0,
          "1": Alphabet.N1,
          "2": Alphabet.N2,
          "3": Alphabet.N3,
          "4": Alphabet.N4,
          "5": Alphabet.N5,
          "6": Alphabet.N6,
          "7": Alphabet.N7,
          "8": Alphabet.N8,
          "9": Alphabet.N9,
        }[l] ?? Alphabet.N0)),
      ),
      expectedResult,
      `Testing ${arg} should be ${expectedResult ? "valid" : "invalid"}.`,
    );
  });
});
