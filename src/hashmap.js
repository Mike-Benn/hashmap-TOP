import { LinkedList } from "./list";
export { HashMap };

function HashMap() {
    let size = 23;
    let totalElements = 0;
    let hashTable = [];
    let keyArr = [];
    let valArr = [];
    const LOAD_FACTOR_LIMIT = 0.70;
    
    

    // Takes a key and produces a hash code with it
    const hash = (key) => {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % size;
        }

        return hashCode;
    }

    // Checks if the load factor limit of the hash table has been reached
    const loadFactorCheck = () => {
        if ((totalElements / size) >= LOAD_FACTOR_LIMIT) {
            return true;
        }
        return false;
    }

    const resize = () => {
        let keyArrCopy = keyArr;
        let valArrCopy = valArr;
        clear();
        size = size * 2;
        for (let i = 0; i < totalElements; i++) {
            set(keyArrCopy[i] , valArrCopy[i])
        }
    }

    // Takes a key and value and assigns a node at the hashCode index in the hashTable
    const set = (key , value) => {
        hashCode = hash(key);
        let list = hashTable[hashCode];

        if (list === undefined) {
            let newList = LinkedList();
            newList.append(key , value);
            hashTable[hashCode] = newList;
            totalElements = totalElements + 1;
            keyArr.push(key);
            valArr.push(value);
        } else {
            let currNode = list.getHead();
            let duplicateKey = false;
            while (currNode !== null) {
                if (currNode.getKey() === key) {
                    currNode.setValue(value);
                    duplicateKey = true;
                    break;
                }
                currNode = currNode.getNext();
            }
            if (duplicateKey === false) {
                list.append(key , value);
                totalElements = totalElements + 1;
                keyArr.push(key);
                valArr.push(value);
            }

        }
        if (loadFactorCheck()) {
            resize();
        }

    }


    // Returns the value that is assigned to the key 
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

    // Returns true or false based on whether or not the key is in the hash map
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

    // Returns the number of stored keys in the hash map
    const length = () => {
        return keyArr.length;
    }

    // Removes the given key if it exists in the hash map and returns true, returns false otherwise
    const remove = (key) => {
        hashCode = hash(key);
        let list = hashTable[hashCode];
        

        if (list === undefined) {
            return false;
        } else {
            let result = list.remove(key);
            if (result === true) {
                totalElements = totalElements - 1;
                updateArrays(key);
                return result;
            }
            return result;
        }
    }

    // Removes all entries from the hash map
    const clear = () => {
        hashTable = [];
        keyArr = [];
        valArr = [];


        
    }

    
    // Returns an array containing all the keys inside the hash map
    const keys = () => {
        return keyArr;
    }

    // Returns an array containing all the values inside the hash map
    const values = () => {
        return valArr;
    }


    // Removes associated key and value from their respective arrays

    const updateArrays = (key) => {
        let length = keyArr.length;
        for (let i = 0; i < length; i++) {
            if (keyArr[i] === key) {
                keyArr.splice(i , 1);
                valArr.splice(i , 1);
                break;
            }
        }
    }

    /* Old update methods 

    const updateKeys = (key) => {
        let length = keyArr.length;
        for (let i = 0; i < length; i++) {
            if (keyArr[i] === key) {
                keyArr.splice(i , 1);
                break;
            }
        }
    }

     Removes value from value array
    const updateValues = (val) => {
        let length = valArr.length;
        for (let i = 0; i < length; i++) {
            if (valArr[i] === val) {
                valArr.splice(i , 1);
                break;
            }
        }
    }*/

    // Returns an array of key value pair arrays of all sets of pairs
    const entries = () => {
        let output = [];
        let length = keyArr.length;
        for (let i = 0; i < length; i++) {
            let array = [keyArr[i] , valArr[i]]
            output.push(array);
        }
        return output;
    }
    
    return {
        hash,
        set,
        getKeyValue,
        hasKey,
        length,
        remove,
        clear,
        keys,
        values,
        entries
    }
    

}