var notes = (function() {
  return {
    add: function(note) {
      if(!note.equals("")) {
        notes.add(note);
        return true;
      }
      return false;
    },
    remove: function(index) {},
    count: function() {},
    list: function() {},
    find: function(str) {},

    clear: function() {
      notes.length = 0;
        return notes.length;
    }
  }
}());


var notes = (function() {
  var list = [];

  return {
    add: function(note) {
      var item = {timestamp: Date.now(), text: note};
      list.push(item);
      return true;
    },
    remove: function(index) {},
    count: function() {
      return list.length;
    },
    list: function() {},
    find: function(str) {},
    clear: function() {}

  }
}());

