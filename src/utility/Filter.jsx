

const filter = (searchDest, traveloffers, sortDest) => {


    let newTempFilter = []

    if (searchDest == "") {
        newTempFilter = [...traveloffers]
    } else {
        newTempFilter = traveloffers.filter((place, idx) => {
            if (place.destination.toUpperCase().startsWith(searchDest.toLocaleUpperCase())) return place
        })
    }
    return newTempFilter

}
export default filter