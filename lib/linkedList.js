// pop or shift will never be called on an empty list.
// push (insert value at back);
// pop (remove value at back);
// shift (remove value at front).
// unshift (insert value at front);
// delete()
class LinkedList{
  constructor() {
      this.head = null;
      this.tail = null;
  }
  push(val) {
      let newItem = {
          value: val,
          back: null,
          forward: null,
      };
      if(this.tail) {
      } else {
          this.tail = newItem;
      }
      if(this.head) {
          this.head.forward = newItem;
          newItem.back = this.head;
          this.head = newItem;
      } else {
          this.head = newItem;
      }
  }
  pop() {
      let leavingItem = this.head;
      if(leavingItem) {
          this.head = leavingItem.back;
          if(this.head) {
              this.head.forward = null; 
          }
          if(this.tail === leavingItem) {
              this.tail = null;
          }
          return leavingItem.value;
      } else {
          return null;
      }
  }

  unshift(val) {
      let newItem = {
          value: val,
          back: null,
          forward: null,
      };
      if(this.tail) {
          this.tail.back = newItem;
          newItem.forward = this.tail;
          this.tail = newItem;
      } else {
          this.tail = newItem;
      }
      if(this.head) {
          if(this.head === newItem.forward) {
          } else {
          }
      } else {
          this.head = newItem;
      }
  }

  shift() {
      let leavingItem = this.tail;
      if(leavingItem) {
          this.tail = leavingItem.forward;
          
          if(leavingItem.forward) {
              this.tail.back = null; 
          }
          return leavingItem.value;
      } else {
          return null;
      }
  }

  count() {
      let length = 0;
      if(this.tail) {
          length++;
          let current = this.tail;
          while(current.forward) {
              length++
              current = current.forward;
          }
          return length;
      } else {
          return 0;
      }
  }

  delete(val) {
      if(this.tail) {
          let current = this.tail;
          while(current.value !== val) {
              current = current.forward;
              if(current === null) {
                  return;
              }
          }
          let next = current.forward;
          let previous = current.back;
          if(previous) {
              previous.forward = next;
          }
          if(next) {
              next.back = previous;
          }
          if(this.tail === current) {
              this.tail = next;
          }
          if(this.head === current) {
              this.head = previous;
          }
          return;
      } else {
          return;
      }
  }
}