import React from 'react';
import { Link } from 'react-router-dom';
import { IPerson } from '../types';

export class PersonCard extends React.Component<IPerson> {
  render(): React.ReactNode {
    const { name, url, gender } = this.props;
    const segments = url.split('/');

    return (
      <Link to={segments[segments.length - 2]}>
        <div
          className={`p-3 ${
            gender === 'male'
              ? 'bg-[#9C27B0] text-white'
              : gender === 'female'
              ? 'bg-[#c41e56] text-white'
              : 'bg-[#09151322]'
          } text-center hover:scale-105 rounded-3xl font-medium active:scale-100`}
        >
          {name}
        </div>
      </Link>
    );
  }
}
