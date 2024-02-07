import React from 'react';
import { usePersonFilms } from '../queries';

export function withUsePersonFilmsHOC(
  Child: React.ComponentType<ReturnType<typeof usePersonFilms>>,
) {
  return function UsePersonFilmsHOC({ urls }: { urls: string[] }) {
    return <Child {...usePersonFilms(urls)} />;
  };
}
