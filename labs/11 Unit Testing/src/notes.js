var notes = (function() {
  var list = [];
  var notes = [];
  var stringList = [];

  return {
    add: function(note) {

      note.trim();
      note = String(note);
      note = note.replace(" ","");
      var item = {timestamp: Date.now(), text: note};
      if (note.localeCompare("") === 0) {
        return false;
    }
      list.push(item);
      return true;
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

