import React from 'react';
import { Search } from '../../../features/search/ui/Search';

export class SearchPage extends React.Component {
  constructor(props: undefined) {
    super(props!);
  }
  render(): React.ReactNode {
    return <Search />;
  }
}
