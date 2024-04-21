import { Node } from "./node";
export { LinkedList };


function LinkedList() {
    let head = null;
    let tail = null;
    let size = 0;

    const append = (key , value) => {
        let node = Node();
        node.setValue(value);
        node.setKey(key);
        if (head === null) {
            head = node;
            tail = node;
            size = size + 1;
        } else {
            tail.setNext(node);
            node.setLast(tail);
            tail = node;
            size = size + 1;
        }
    }

    const prepend = (key , value) => {
        let node = Node();
        node.setValue(value);
        node.setKey(key);
        if (head === null) {
            head = node;
            tail = node;
            size = size + 1;
        } else {
            head.setLast(node);
            node.setNext(head);
            head = node;
            size = size + 1;
        }
    }

    const getSize = () => size;

    const getHead = () => head;

    const getTail = () => tail;

    const at = (index) => {
        
        if (head === null) {
            console.log("Your list is empty! What're you doing!?");
        } else {
            let counter = 0;
            let current = head;
            while (current !== null) {
                if (index === counter) {
                    return current;
                }
                counter = counter + 1;
                current = current.getNext();

            }
            console.log("Your index is larger than the size of the list!");
        }
    };

    const pop = () => {
        if (head === null || head.getNext() === null) {
            head = null;
            tail = null;
            size = 0;
        } else if (head.getNext().getNext() === null) {
            head.setNext(null);
            tail = head;
            size = size - 1;
        } else {
            let current = head;
            while (current.getNext().getNext().getNext() !== null) {
                current = current.getNext();
            }
            current.getNext().setNext(null);
            tail = current.getNext();
            size = size - 1;
        }
    };

    const remove = (key) => {
        if (head === null) {
            return false;
        } else if (head.getNext() === null && head.getKey() === key) {
            head = null;
            tail = null;
            size = 0;
            return true;
        } else if (head.getNext() === null && head.getKey() !== key) {
            return false;
        } else if (head.getKey() === key && head.getNext() !== null) {
            head = head.getNext();
            size = size - 1;
            return true;
        } else {
            let removed = false;
            let current = head;
            let last = current;
            while (current !== null) {
                if (current.getKey() === key && current.getNext() === null) {
                    tail = current.getLast();
                    tail.setNext(null);
                    removed = true;
                    size = size - 1;
                    break;
                } else if (current.getKey() === key) {
                    last.setNext(current.getNext());
                    current.getNext().setLast(last);    
                    removed = true;
                    size = size - 1;
                    break;        
                }
                last = current;
                current = current.getNext();
            }
            return removed;
        }
            

    }
        
    

    const contains = (value) => {
        let current = head;
        while (current !== null) {
            if (current.getValue() === value) {
                return true;
            }
            current = current.getNext();

        }
        return false;

    }

    

    const find = (value) => {
        if (head === null) {
            return null;
        } else {
            let current = head;
            let counter = 0;
            while (current !== null) {
                if (current.getValue() === value) {
                    return counter;
                }
                counter++;
                current = current.getNext();
            }
            return null;
        }
    }

    const toString = () => {
        if (head === null) {
            console.log("The list is empty!");
        } else {
            let current = head.getNext();
            let output = `( ${head.getValue()} ) `;
            while (current !== null) {
                output = output + `- ( ${current.getValue()} ) `
                current = current.getNext();
            }
            console.log(output);
        }
    }
    
    return {
        append,
        prepend,
        getSize,
        getHead,
        getTail,
        at,
        pop,
        remove,
        contains,
        find,
        toString,
        
    }
    

    
}