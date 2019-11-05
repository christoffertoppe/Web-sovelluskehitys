describe("notes", function() {
  beforeEach() {
    notes.clear();
  }
});
  describe("**add(note)**", function() {
    it("should be able to add a new note", function () {
      expect(notes.add('sixth note')).toBe(true);
    });
    it("should ignore blank notes", function () {
      expect(notes.add('')).toBe(false);
    });


  });

  describe("**remove(index)**", function() {

  });

  describe("**count()**", function() {

  });

  describe("**list()**", function() {

  });

  describe("**find(string)**", function() {

  });

  describe("**clear()**", function() {
    it("is the noteslist empty?",function ()
    {
      expect(notes.clear()).toBe(undefined);
    });
  });


});