let curr_counter = 0

//incrementing counter
export const increment=() =>{
    curr_counter++;
    return curr_counter

}
//reseting counter
export const reset=() =>{
    curr_counter=0
    return  curr_counter
}
   