export function changeSelectedKey(data){
    return {type:'changeSelectedKey',payload:data}
  }

export function changeNavigationTabs(data){
    return {type:'changeNavigationTabs',payload:data}
  }

//   export function addGunAsync(){
//     return dispatch => {
//       setTimeout(() => {
//         dispatch(addGun())
//       }, 2000);
//     }
//   }