'use strict';

const fs = require('fs');
const bencode = require('bencode');

const torrent = bencode.decode(fs.readFileSync('big-buck-bunny.torrent'));
const trackerUrl = torrent.announce.toString('utf8');
//console.log(torrent)
//console.log(trackerUrl)
