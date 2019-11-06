var notes = (function() {
  var list = [];
  var notes = [];
  var stringList = [];


  return {
    add: function(note) {

      var item = {timestamp: Date.now(), text: note};
      if(typeof note === "string") {
         note = note.trim();
        if (note.localeCompare("") !== 0) {
          list.push(item);
          return true;
        }
      }
      return false;
    },

    remove: function(index) {
      if(list.length > index) {
        list.slice(index);
        return true;
      }
      return false;
    },

    count: function() {
      return list.length;
    },

    list: function() {
      for(let i = 0; i < list.length; i++) {
        notes.push(list[i].text);
      }
      return notes;
    },

    find: function(str) {
      stringList.length = 0;
      str = str.toLowerCase();
      if(str.localeCompare("") === 0) return false;
      for(let i = 0; i < list.length; i++) {
        if (list[i].text.includes(str)) {
         stringList.push(list[i].text);

        }
      }
      if (stringList.length > 0) {
        return stringList;
      }
      return false;
    },

    clear: function() {
      list.length = 0;
      return list.length;
    }
  }
}());

