export class Mysting {
  constructor(value) {
    this.value = value;
  }

  concate(...arr) {
    for (let i = 0; i < arr.length; i++) {
      this.value += arr[i];
    }
    return this.value;
  }

  //saba question elementAt full newstring

  elementAt(index) {
    let arr = [];
    for (let i = 0; i < this.value.length; i++) {
      arr.push(this.value[i]);
    }

    return arr[index];
  }

  subText(startingIndex) {
    let arr = [];
    let subresult = "";
    for (let i = startingIndex; i < this.value.length; i++) {
      arr.push(this.value[i]);
    }

    for (let i = 0; i < arr.length; i++) {
      subresult += arr[i];
    }

    return subresult;
  }
}
