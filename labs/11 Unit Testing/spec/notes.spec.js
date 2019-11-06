describe('notes', function() {
  beforeEach(function() {
    notes.clear();
    notes.add('first note');
    notes.add('second note');
    notes.add('third note');
    notes.add('fourth note');
    notes.add('fifth note');
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
    it('should find the word you looking for note', function() {
      expect(notes.find('note')).toEqual([ 'first note', 'second note', 'third note', 'fourth note', 'fifth note' ]);
    });
    it('should find the word you looking for Note', function() {
      expect(notes.find('Note')).toEqual([ 'first note', 'second note', 'third note', 'fourth note', 'fifth note' ]);

    });
    it('should find the word you looking for th', function() {
      expect(notes.find('th')).toEqual([ 'third note', 'fourth note', 'fifth note' ]);
    });

    it('should find the word you looking for four', function() {
      expect(notes.find('four')).toEqual([ 'fourth note' ]);
    });

    it('should find the word you looking for six', function() {
      expect(notes.find('six')).toBe(false);
    });

    it('should find the word you looking for blank string', function() {
      expect(notes.find('')).toBe(false);
    });

  });

  describe('**clear()**', function() {
    it('is the noteslist empty?', function() {
      expect(notes.clear()).toBe(0);
    });
  });
});