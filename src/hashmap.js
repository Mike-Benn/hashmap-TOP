


function HashMap() {
    let size = 10;

    const hash = (key) => {
        let hashCode = 0;
        const prime = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % 10;
        }

        return hashCode;
    }

    const set = (key , value)



    

}