/* Changed all functions to methods of the Object library. Practiced usign the this keyword */

var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  // prints a list of all playlists
  printPlaylists: function () {
    var list = {};
    for (var i in this.playlists) {
      list[i] = this.playlists[i].name+ " - " + this.playlists[i].tracks.length + " tracks";
    }
      console.log(list);
    },
  // prints a list of all tracks
  printTracks: function () {
    var tracks = {};
    for (var item in this.tracks) {
      tracks[item] = this.tracks[item].name + " by " + this.tracks[item].artist + " (" + this.tracks[item].album + ")"
    }
    console.log(tracks);
  },
// prints a list of tracks for a given playlist
  printPlaylist: function (playlistId) {
    var id = playlistId;
    var print = {};
    print[id] = this.playlists[id].name + " - " + this.playlists[id].tracks.length + "tracks";

    var targetPlaylist = this.playlists[id];
    //console.log('targetPlaylist: ', targetPlaylist)

    var targetTracks = targetPlaylist.tracks;
    //console.log('targetTracks: ', targetTracks)

    for (var i in targetTracks) {
      var trackId = targetTracks[i];
      //console.log('trackId: ', trackId);

      var track = this.tracks[trackId];
      //console.log('track: ', track);

      print[trackId] = track.name + " by " + track.artist + " (" + track.album + ")";
    }

    console.log(print);
  },
// adds an existing track to an existing playlist
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks += ", " + trackId;
    console.log (this.playlists[playlistId].tracks);
  },
// generates a unique id
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
// adds a track to the this
  addTrack: function (name, artist, album) {
    var id = this.uid();
    //Create a new object and assign key value pairs to it
    var newTrack = {};
    newTrack.id = id;
    newTrack.name = name;
    newTrack.artist = artist;
    newTrack.album = album;
    //points to the id to add it to this.tracks
    this.tracks[id] = newTrack;
  },
  // adds a playlist to the this

  addPlaylist: function (name) {
    var id = this.uid();
    var newPlaylist = {};
    newPlaylist.id = id;
    newPlaylist.name = name;
    newPlaylist.tracks = [];
    this.playlists[id] = newPlaylist;

  }
}

//outside of the Object, functions need to be invoked like this
library.printPlaylist("p01");
library.addTrackToPlaylist("t01", "p02");
library.addTrack("Wonderwall" , "Oasis", "What\'s the history, morning glory?");
library.addPlaylist("Summer time");
library.printPlaylists();
library.printTracks();
