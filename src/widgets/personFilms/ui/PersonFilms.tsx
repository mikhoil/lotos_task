import React from 'react';
import { withUsePersonFilmsHOC } from '../hocs';
import { usePersonFilms } from '../queries';

export class PersonFilms extends React.Component<
  ReturnType<typeof usePersonFilms>
> {
  constructor(props: ReturnType<typeof usePersonFilms>) {
    super(props);
  }
  render(): React.ReactNode {
    const { data: films } = this.props;
    return (
      <ul>
        {films &&
          films.map(
            film => film && <li key={film?.episode_id}>{film?.title}</li>,
          )}
      </ul>
    );
  }
}

export const UsePersonFilmsHOC = withUsePersonFilmsHOC(PersonFilms);
