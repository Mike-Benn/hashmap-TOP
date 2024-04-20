export { Node };

function Node() {
    let value = null;
    let nextNode = null;

    const getValue = () => value;

    const getNext = () => nextNode;

    const setValue = (val) => {
        value = val;
    }

    const setNext = (next) => {
        nextNode = next;
    }

    return {
        getValue,
        getNext,
        setValue,
        setNext
    }
}