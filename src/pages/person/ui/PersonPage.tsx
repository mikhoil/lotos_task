import React from 'react';
import { useParams } from 'react-router-dom';
import { UsePersonHOC } from '../../../widgets/personInfo';
import { withParamsPersonPageHOC } from '../hocs';

export class PersonPage extends React.Component<ReturnType<typeof useParams>> {
  constructor(props: ReturnType<typeof useParams>) {
    super(props);
  }
  render() {
    const { person } = this.props as { person: string };
    return <UsePersonHOC id={person} />;
  }
}

export const UseParamsPersonPageHOC = withParamsPersonPageHOC(PersonPage);
