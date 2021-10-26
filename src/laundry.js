/**
 * Laundry Problem
 * Question 2
 *
 * @returns {any} Trip data analysis
 */
function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
    function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
        let dirtyPileObj = {}
        let cleanPileObj = {}
        let cleanPairs = 0
    
        //get pair of socks that are already clean
        for(let cleanSocks of cleanPile){
            if(cleanPileObj[cleanSocks]){
                cleanPileObj[cleanSocks]++
                if(cleanPileObj[cleanSocks] === 2){
                    cleanPairs++
                    cleanPileObj[cleanSocks] = 0
                }
            }else {
                cleanPileObj[cleanSocks] = 1
            }
        }
    
        if(noOfWashes === 0) return cleanPairs
        //organize the dirtySocks
        for(let dirtySocks of dirtyPile){
            if(dirtyPileObj[dirtySocks]) dirtyPileObj[dirtySocks]++
            else dirtyPileObj[dirtySocks] = 1
        }
    
        //washCleanSock form the dirtyPile First
        for(let cleanSocks in cleanPileObj){
            if(dirtyPileObj[cleanSocks]){
                dirtyPileObj[cleanSocks]--
                cleanPairs++
                delete cleanPileObj[cleanSocks]
                if(dirtyPileObj[cleanSocks] === 0) delete dirtyPileObj[cleanSocks]
                noOfWashes--
                if(noOfWashes === 0) break
            }
            else {
                delete cleanPileObj[cleanSocks]
            }
        }
    
        if(noOfWashes === 0) return cleanPairs
    
        //washDirtySocks with Pairs Next
        while(noOfWashes >= 2){
            for(let dirtySocks in dirtyPileObj){
                while(dirtyPileObj[dirtySocks] >= 2){
                    dirtyPileObj[dirtySocks] =- 2
                    cleanPairs++
                    noOfWashes =- 2
                    if(noOfWashes < 2) break
                }
                if(noOfWashes < 2) break
            }
        }
    
        return cleanPairs
    }
    
    
}

module.exports = getMaxPairs;
