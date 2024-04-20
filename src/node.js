export { Node };

function Node() {
    let key = null;
    let value = null;
    let nextNode = null;

    const getValue = () => value;

    const getNext = () => nextNode;

    const getKey = () => key;

    const setValue = (val) => {
        value = val;
    }

    const setNext = (next) => {
        nextNode = next;
    }

    const setKey = (keyVal) => {
        key = keyVal;
    }

    return {
        getValue,
        getNext,
        getKey,
        setValue,
        setNext,
        setKey
    }
}