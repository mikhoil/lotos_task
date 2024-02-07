import React from 'react';

export class Table extends React.Component<{
  fields: { [key: string]: string };
}> {
  render(): React.ReactNode {
    const { fields } = this.props;
    return (
      <table className="border-2 border-black table-auto border-collapse text-center">
        <thead>
          <tr>
            {Object.keys(fields).map(field => (
              <th key={field} className="p-1 border-2 border-black">
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.entries(fields).map(([field, value]) => (
              <td key={field} className="p-1 border-2 border-black">
                {value}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
}
