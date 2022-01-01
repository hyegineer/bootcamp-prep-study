describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create arrays", function() {
    var emptyArray = [];
    expect(typeof(emptyArray)).toBe('object'); //A mistake? - http://javascript.crockford.com/remedial.html
    expect(emptyArray.length).toBe(0);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toBe(0);
    expect(multiTypeArray[2]).toBe("two");
    expect(multiTypeArray[3]()).toBe(3);
    expect(multiTypeArray[4].value1).toBe(4);
    expect(multiTypeArray[4]["value2"]).toBe(5);
    expect(multiTypeArray[5][0]).toBe(6);
  });

  it("should understand array literals", function () {
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, 2]);

    array.push(3);
    expect(array).toEqual([1, 2, 3]);
  });

  it("should understand array length", function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(4);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(6);

    var tenEmptyElementArray = new Array(10); // [empty * 10] 이렇게 생기는구나!
    expect(tenEmptyElementArray.length).toBe(10);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(5);
  });

  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];

    // array.slice
    // 첫번째 전달인자: 추출시작 index
    // 두번째 전달인자: 추출종료한 0 기준 index, 배열형태로 return한다
    // MDN: 얕은 복사본, 원래 배열은 바뀌지않음
    expect(array.slice(0, 1)).toEqual(["peanut"]);
    expect(array.slice(0, 2)).toEqual(["peanut", "butter"]);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(["and", "jelly"]);
    expect(array.slice(3, 0)).toEqual([]);
    expect(array.slice(3, 100)).toEqual(["jelly"]);
    expect(array.slice(5, 1)).toEqual([]); // 첫번째 option 이 배열의 length보다 크다면 빈값 반환
  });

  it("should know array references", function () {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";
    }
    passedByReference(array);
    expect(array[1]).toBe("changed in function");

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toBe("changed in assignedArray");

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray"; // slice 전달인자에 아무것도 없으면 그저 얕은 복사본이고 원본엔 영향주지 않음
    expect(array[3]).toBe("three");
  });

  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual([1, 2, 3]);

    var poppedValue = array.pop(); // pop은 원본배열에 영향을 줌
    expect(poppedValue).toBe(3);
    expect(array).toEqual([1, 2]);
  });

  it("should know about shifting arrays", function () {
    var array = [1, 2];

    array.unshift(3);
    expect(array).toEqual([3, 1, 2]);

    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1, 2]);
  });
});
