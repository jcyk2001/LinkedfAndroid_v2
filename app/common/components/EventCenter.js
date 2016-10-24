var EventEmitter = require('EventEmitter');
export class MyEmitter extends EventEmitter {
  constructor() {
    super()
    this.on = this.addListener
    // this.removeListener = this.removeCurrentListener
  }
}
const EventCenter = new MyEmitter();
export default EventCenter;
