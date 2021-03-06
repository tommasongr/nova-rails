function reload() {
  nova.commands.invoke("tommasonegri.rails.commands.reload")
}

nova.config.onDidChange("tommasonegri.rails.config.solargraph.references", reload)
nova.workspace.config.onDidChange("tommasonegri.rails.config.solargraph.references", reload)

function getExtensionSetting() {
  return nova.config.get("tommasonegri.rails.config.solargraph.references", "boolean")
}

function getWorkspaceSetting() {
  const str = nova.workspace.config.get("tommasonegri.rails.config.solargraph.references", "string")

  switch (str) {
    case "Global Default":
      return null
    case "Enabled":
      return true
    case "Disabled":
      return false
    default:
      return null
  }
}

exports.references = function() {
  const workspaceConfig = getWorkspaceSetting()
  const extensionConfig = getExtensionSetting()

  return workspaceConfig === null ? extensionConfig : workspaceConfig
}
