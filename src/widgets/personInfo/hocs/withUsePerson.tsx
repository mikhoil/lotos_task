import { usePerson } from '../queries';

export function withUsePersonHOC(
  Child: React.ComponentType<ReturnType<typeof usePerson>>,
) {
  return function UsePersonHOC({ id }: { id: string }) {
    return <Child {...usePerson(id)} />;
  };
}
