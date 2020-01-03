const makeCancelable = promise => {
    let _hasCanceled = false;
    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then(val => {
            _hasCanceled ? reject({ isCanceled: true }) : resolve(val)
        })
        promise.catch(error => {
            _hasCanceled ? reject({ isCanceled: true }) : reject(error)
        })
    })
    return {
        promise: wrappedPromise,
        cancel() {
            _hasCanceled = true
        }
    }
}
export default makeCancelable