/* eslint-env webextensions */
import * as React from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { create } from '@material-ui/core/styles/transitions';
import { Hidden } from '@material-ui/core';

// Generate Order Data
function createData(id, date, name, shipTo) {
  return { id, date, name, shipTo };
}


chrome.bookmarks.getTree(e => console.log(e));
function getBookmarkArray(id, bookmarkArray) {
  chrome.bookmarks.getChildren(id, function (children) {
    children.forEach(function (bookmark) {
      bookmarkArray.push(bookmark);
      getBookmarkArray(bookmark.id, bookmarkArray);
    });
  });
  return bookmarkArray;
}

let bookmarkArray = getBookmarkArray('0', []);
console.log(bookmarkArray);
let rows = [];
bookmarkArray.forEach((item) => {
  rows.push(createData(
    item.id,
    item.title,
    item.url,
    item.dateAdded
  ));
});

rows = bookmarkArray;

function preventDefault(event) {
  event.preventDefault();
}

export default function Bookmarks() {
  return (
    <React.Fragment>
      <Title>Recent Bookmarks</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Url</TableCell>
            <TableCell>Date Added</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.url}</TableCell>
              <TableCell>{row.dateAdded}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
