class Speaker {
  private message: string;
  constructor(private name: string) {}

  get Message() {
    if(!this.message.includes(this.name)) {
      throw Error("Name of user is not available");
    }
    return this.message;
  }

  set Message(value: string) {
    let tmpMessage = value;
    if (!value.includes(this.name)) {
      tmpMessage = this.name + " " + value;
    }
    this.message = tmpMessage;
  }
}

const speaker = new Speaker("Tom");
speaker.Message = "Hello";
console.log(speaker.Message);
