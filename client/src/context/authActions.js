export const LoginInitial=(loginCred)=>{
    type:"LOGIN_START"
}

export const LoginSuccess=(user)=>({
    type:"LOGIN_SUCCESS",
    payload:user

})

export const LoginFailure=(error)=>({
    type:"LOGIN_FAILURE",
    payload:error
})

export const UpdateInitial=(usercred)=>{
    type:"UPDATE_START"
    
}
export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
})
  
export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",
})
  