module.exports = {
  dependency: {
    platforms: {
      android: {
        packageImportPath: 'import com.reactlibrary.RNThreadPackage;',
        packageInstance: 'new RNThreadPackage(reactNativeHost)',
      }, 
    },
  },
}
