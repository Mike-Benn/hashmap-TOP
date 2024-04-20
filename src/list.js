import { Node } from "./node";
export { LinkedList };


function LinkedList() {
    let head = null;
    let tail = null;
    let size = 0;

    const append = (value) => {
        let node = Node();
        node.setValue(value);
        if (head === null) {
            head = node;
            tail = node;
            size = size + 1;
        } else {
            let current = head;
            while (current.getNext() !== null) {
                current = current.getNext();
            }
            current.setNext(node);
            tail = node;
            size = size + 1;
        }
    }

    const prepend = (value) => {
        let node = Node();
        node.setValue(value);
        if (head === null) {
            head = node;
            tail = node;
            size = size + 1;
        } else {
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
        } else if (head.getNext().getNext() === null) {
            head.setNext(null);
        } else {
            let current = head;
            while (current.getNext().getNext().getNext() !== null) {
                current = current.getNext();
            }
            current.getNext().setNext(null);
        }
    };

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
            let current = head;
            while (current !== null) {
                console.log(current.getValue());
                current = current.getNext();
            }
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
        contains,
        find,
        toString,
        
    }
    

    
}