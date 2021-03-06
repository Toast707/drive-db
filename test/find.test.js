/* jshint expr:true */
var fs = require('fs');
var drive = require('../index')();

// Testing that we are able to find records
describe("drive.find()", function(){


  beforeAll(function(done){
    // Overload the data with a known set
    drive.data = require('./data.js');
    done();
  });

  it('should load all records', function(){
    expect(drive.find().length).toBe(6);
  });
});



describe('drive.find(filter)', function(){

  it('should load first record', function(){
    expect(drive.find({ id: 1 }).length).toBe(1);
  });

  it('should load John record', function(){
    expect(drive.find({ firstname: "John" }).length).toBe(1);
  });

  it('should load Miller record', function(){
    expect(drive.find({ lastname: "Miller" }).length).toBe(1);
  });

  it('no records', function(){
    expect(drive.find({ lastname: "dgwse" }).length).toBe(0);
  });
});



describe('drive.find(complexfilter)', function(){

  // Retrieve the spreadsheet
  it('should load records with id > 4', function(){
    var records = drive.find({ id: {$gt: 4} });
    var none = records.filter(function(row){ return row.id <= 4; });
    if (none.length > 0)
      throw new Error("There's some record smaller than 4");
    });
  });
