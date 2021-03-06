const { erbTagSwitcher } = require("./commands/erbTagSwitcher")
const { RailsAlternateFile } = require("./commands/RailsAlternateFile")
const { RailsDocumentation } = require("./commands/RailsDocumentation")
const { RailsImportmap } = require("./commands/RailsImportmap")
const { RailsInfo } = require("./commands/RailsInfo")
const { RailsMigrations } = require("./commands/RailsMigrations")
const { RailsServer } = require("./commands/RailsServer")
const { RailsStimulus } = require("./commands/RailsStimulus")
const { Rubocop } = require("./commands/Rubocop")

module.exports = {
  erbTagSwitcher,
  RailsAlternateFile,
  RailsDocumentation,
  RailsImportmap,
  RailsInfo,
  RailsMigrations,
  RailsServer,
  RailsStimulus,
  Rubocop
}
