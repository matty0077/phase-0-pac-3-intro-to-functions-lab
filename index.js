
function shout(string){
  return string.toUpperCase();
  //to do
}

////expected in shout such n such test file
describe("shout(string)", function () {
    it("receives one argument and returns it in all caps", function () {
      expect(shout("hello")).toEqual("HELLO");
    });
  });
  
  //////////////////////////

function shout(string) {
return string.toUpperCase();
}
/////////////////
function whisper(string) {
return string.toLowerCase();
}
///////////////
function logWhisper(string) {
    console.log(string.toLowerCase());
}
 ///////////// 
function logShout(string) {
    console.log(string.toUpperCase());
}
//////////////

function sayHiToHeadphonedRoommate(tone){
    if tone=shout{console.log('yes indeed!!!')}
            else{console.log('cant hear ya!!!!')}
      //if string=shout{console.log('yes indeed!!!')}
            //else{console.log('cant hear ya!!!!')}
}
sayHiToHeadphonedRoommate(shout)
//logShout("hola")