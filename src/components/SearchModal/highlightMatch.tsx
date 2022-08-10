import React, { Fragment } from 'react';

export const highlightMatch = ( inputValue: string, text: string ) => {
  if (!inputValue) return text;
  const regexp = new RegExp(inputValue, 'ig');
  const matchValue = text.match(regexp);

  if (matchValue) {
    return text.split(regexp).map((str, index, array) => {
      if (index < array.length - 1) {
        const c = matchValue.shift();
        return (
          <Fragment key={+index}>
            {str}<span>{c}</span>
          </Fragment>
        );
      }
      return str;
    })
  }
  return text;
};
