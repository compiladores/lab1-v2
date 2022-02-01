type Transition<Alphabet, State> = (state: State, letter: Alphabet) => State;
type Machine<Alphabet> = (word: Alphabet[]) => boolean;
export interface MachineDescription<Alphabet, State> {
  transition: Transition<Alphabet, State>;
  initial: State;
  acceptance: State[];
}
export function createFSM<Alphabet, State>(
  { acceptance, initial, transition }: MachineDescription<Alphabet, State>,
): Machine<Alphabet> {
  return (word) => acceptance.includes(word.reduce(transition, initial));
}
