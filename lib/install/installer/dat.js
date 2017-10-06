const Dat = require('../../utils/dat')

module.exports = (pkg, cwd) => {
  return new Promise((resolve, reject) => {
    Dat(cwd, {key: pkg.url}, (e, dat) => {
      if (e) return reject(e)
      dat.joinNetwork()

      dat.archive.download((e) => {
        if (e) reject(e)
        resolve()
      })
    })
  })
}
