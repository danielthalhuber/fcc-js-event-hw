import React from 'react'
import Link from 'gatsby-link'

const Content = ({ link }) => {
  const testBlockChars = (offset = 0) => {
    return Array(13).fill(null).map((v, i) => {
      const value = (i + offset) % 13;
      const classList = `testBlockChar testBlockChar${value}`;
      return (
        <Link
          key={(new Date()).toISOString().replace(/\:|\-|\./g,'')+i+Math.random()*10}
          className="testBlockLink testBlockChar" to={link}>
          <div
            className={classList}
          >
            {value}
          </div>
      </Link>
      );
    });
  };

  return (
    <div
      className="testBlock"
    >
      {
        [
          ...testBlockChars(0),
          ...testBlockChars(1),
          ...testBlockChars(2),
          ...testBlockChars(3),
          ...testBlockChars(4),
          ...testBlockChars(5),
          ...testBlockChars(6),
          ...testBlockChars(7),
          ...testBlockChars(8),
          ...testBlockChars(9),
          ...testBlockChars(10),
          ...testBlockChars(11),
          ...testBlockChars(12),
          ...testBlockChars(11),
          ...testBlockChars(10),
          ...testBlockChars(9),
          ...testBlockChars(8),
          ...testBlockChars(7),
          ...testBlockChars(6),
          ...testBlockChars(5),
          ...testBlockChars(4),
          ...testBlockChars(3),
          ...testBlockChars(2),
          ...testBlockChars(1),
          ...testBlockChars(0),
          ...testBlockChars(1),
          ...testBlockChars(2),
          ...testBlockChars(3),
          ...testBlockChars(4),
          ...testBlockChars(5),
          ...testBlockChars(6),
          ...testBlockChars(7),
          ...testBlockChars(8),
          ...testBlockChars(9),
          ...testBlockChars(10),
          ...testBlockChars(11),
          ...testBlockChars(12),
          ...testBlockChars(11),
          ...testBlockChars(10),
          ...testBlockChars(9),
          ...testBlockChars(8),
          ...testBlockChars(7),
          ...testBlockChars(6),
          ...testBlockChars(5),
          ...testBlockChars(4),
          ...testBlockChars(3),
          ...testBlockChars(2),
          ...testBlockChars(1),
        ]
      }
    </div>
  );
};

export default Content;
