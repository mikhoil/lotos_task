import { useParams } from 'react-router-dom';

export function withParamsPersonPageHOC(
  Child: React.ComponentType<ReturnType<typeof useParams>>,
) {
  return function UseParamsPersonPageHOC() {
    return <Child {...useParams()} />;
  };
}
