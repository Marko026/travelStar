

const filter = (searchDest, traveloffers, sortDest) => {

    let newTempFilter = []

    if (searchDest == "") {
        newTempFilter = [...traveloffers]
    } else {
        newTempFilter = traveloffers.filter((place, idx) => {
            if (place.destination.toUpperCase().startsWith(searchDest.toLocaleUpperCase())) return place
        })
    }
    switch (sortDest) {
        case "1":
            newTempFilter.sort((a, b) => {
                const destA = a.destination.toUpperCase();
                const destB = b.destination.toUpperCase();

                if (destA < destB) {
                    return -1
                }
                if (destA > destB) {
                    return 1
                }
                return 0

            })

            break;
        case "2":
            newTempFilter.sort((a, b) => {
                const destA = a.destination.toUpperCase();
                const destB = b.destination.toUpperCase();;

                if (destA > destB) {
                    return -1
                }
                if (destA < destB) {
                    return 1
                }
                return 0

            })

            break;

        default:
            break;
    }
    return newTempFilter
}
export default filter