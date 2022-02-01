import { machineDescription } from "./ex.ts";
import { createFSM } from "../common.ts";
import { assertEquals } from "https://deno.land/std@0.119.0/testing/asserts.ts";
import Alphabet from "./alphabet.ts";
/**
 * Ejercicio:
 * Filas válidas del veterinario.
 * No puede haber un perro al lado de un gato.
 * Los gatos tienen que estar separados.
 * Debe haber al menos un animal y al menos una persona en la fila.
 */
Deno.test("ex05", () => {
  const cases: Array<[string, boolean]> = [
    ["ph", true],
    ["p", false],
    ["g", false],
    ["pg", false],
    ["gp", false],
    ["pgh", false],
    ["phg", true],
    ["ppppphg", true],
    ["phpphghgh", true],
    ["hhhhhhhh", false],
    ["pppppppp", false],
    ["hhhhhhghhhhhhhphhhhhghhhh", true],
    ["hhhhhhgphh", false],
    ["hhhhhhpghh", false],
  ];
  const check = createFSM(machineDescription);
  cases.forEach(([arg, expectedResult]) => {
    assertEquals(
      check(
        arg.split("").map((l) => ({
          "p": Alphabet.PERRO,
          "h": Alphabet.HUMANO,
          "g": Alphabet.GATO,
        }[l] ?? Alphabet.HUMANO)),
      ),
      expectedResult,
      `Testing ${arg} should be ${expectedResult ? "valid" : "invalid"}.`,
    );
  });
});
