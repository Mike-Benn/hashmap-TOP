import { LinkedList } from "./list";


function HashMap() {
    let size = 23;
    let hashTable = [];
    let keyArr = [];
    let valArr = [];

    const hash = (key) => {
        let hashCode = 0;
        const prime = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % size;
        }

        return hashCode;
    }

    const set = (key , value) => {
        let hashCode = hash(key);

        if (hashCode < 0 || hashCode >= size) {
            throw new Error("Trying to access index out of bound");
        } else {
            
        }

    }

    const getKeyValue = (key) => {
        hashCode = hash(key);
        let list = hashTable[hashCode];


        if (list === undefined) {
            return null;
        } else {
            let currNode = list.getHead();
            while (currNode !== null) {
                if (currNode.getKey() === key) {
                    return currNode.getValue();
                } else {
                    currNode = currNode.getNext();
                }
                
            }
            return null;
        }
    }

    const hasKey = (key) => {
        hashCode = hash(key);
        let list = hashTable[hashCode];

        if (list === undefined) {
            return false;
        } else {
            let currNode = list.getHead();
            while (currNode !== null) {
                if (currNode.getKey() === key) {
                    return true;
                } else {
                    currNode = currNode.getNext();
                }
            }
            return false;
        }
    }

    const length = () => {
        return keyArr.length;
    }

    const clear = () => {
        hashTable = [];
        keyArr = [];
        valArr = [];
    }

    

    const keys = () => {
        return keyArr;
    }

    const values = () => {
        return valArr;
    }
    const updateKeys = (key) => {
        let length = keyArr.length;
        for (let i = 0; i < length; i++) {
            if (keyArr[i] === key) {
                keyArr.splice(i , 1);
                break;
            }
        }
    }

    const updateValues = (val) => {
        let length = valArr.length;
        for (let i = 0; i < length; i++) {
            if (valArr[i] === val) {
                valArr.splice(i , 1);
                break;
            }
        }
    }



    

}