describe('notes', function() {
  beforeEach(function() {
    notes.clear();
    notes.add('one');
    notes.add('two');
    notes.add('three');
    notes.add('four');
    notes.add('five');
  });

  describe('**add(note)**', function() {
    it('should be able to add a new note', function() {
      expect(notes.add('sixth note')).toBe(true);
      expect(notes.count()).toBe(6);
    });
    it('should ignore blank notes', function() {
      expect(notes.add('')).toBe(false);
      expect(notes.count()).toBe(5);
    });

    it('should ignore whitespace', function() {
      expect(notes.add('        ')).toBe(false);
      expect(notes.count()).toBe(5);
    });

    it('input should contain a String', function() {
      expect(notes.add('        ')).toBe(false);
      expect(notes.count()).toBe(5);
    });
  });

  describe('**remove(index)**', function() {
    it('should be able to remove index 0', function() {
      expect(notes.remove(0)).toBe(true);
    });
    it('should not be able to remove index 8', function() {
      expect(notes.remove(8)).toBe(false);
    });
  });

  describe('**count()**', function() {
    it('should have 5 notes', function() {
      expect(notes.count()).toBe(5);
    });
  });

  describe('**list()**', function() {

  });

  describe('**find(string)**', function() {
    it('should find 1 value that is equal to [\'two\']', function() {
      expect(notes.find('two')).toEqual(['two']);
    });
  });

  describe('**clear()**', function() {
    it('is the noteslist empty?', function() {
      expect(notes.clear()).toBe(0);
    });
  });
});