class EventEmitter {
  events = {};

  subscribe(event, cb) {
    if (event in this.events) this.events[event].push(cb);
    else this.events[event] = [cb];

    return {
      unsubscribe: () => {
        this.events[event] = this.events[event].filter((item) => item !== cb);
        if (this.events[event].length === 0) delete this.events[event];
      },
    };
  }

  emit(event, args = []) {
    const results = [];

    if (event in this.events) {
      for (const cb of this.events[event]) {
        results.push(cb(...args));
      }
    }

    return results;
  }
}
