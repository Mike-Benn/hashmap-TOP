export { Node };

function Node() {
    let key = null;
    let value = null;
    let nextNode = null;
    let lastNode = null;

    const getValue = () => value;

    const getNext = () => nextNode;

    const getLast = () => lastNode;

    const getKey = () => key;

    const setValue = (val) => {
        value = val;
    }

    const setNext = (next) => {
        nextNode = next;
    }

    const setLast = (last) => {
        lastNode = last;
    }

    const setKey = (keyVal) => {
        key = keyVal;
    }

    return {
        getValue,
        getNext,
        getLast,
        getKey,
        setValue,
        setNext,
        setLast,
        setKey
    }
}