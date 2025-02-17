export async function registerGlobalComponents(root) {
  // @ts-ignore
  const components = import.meta.glob('./components/**/*.vue')
  for (const filePath in components) {
    const componentName = filePath
      .substring(filePath.lastIndexOf('/') + 1)
      .replace(/\.\w+$/, '')
    const component = await components[filePath]()
    root.component(componentName, component.default)
  }
}
