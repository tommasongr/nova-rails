import { erbTagSwitcher } from "./commands/erbTagSwitcher";
import RailsAlternateFile from "./commands/RailsAlternateFile";
import RailsMigrations from "./commands/RailsMigrations";
import RailsDocumentation from "./commands/RailsDocumentation";

export default function registerCommands() {
    nova.commands.register(
        "tommasonegri.rails.erb.tagSwitcher",
        async (editor) => {
            erbTagSwitcher(editor);
        }
    );

    nova.commands.register(
        "tommasonegri.rails.commands.migrations.openLatest",
        () => {
            const railsMigrations = new RailsMigrations();
            railsMigrations.openLatestMigration();
        }
    );

    nova.commands.register(
        "tommasonegri.rails.commands.migrations.list",
        () => {
            const railsMigrations = new RailsMigrations();
            railsMigrations.listMigrations();
        }
    );

    nova.commands.register(
        "tommasonegri.rails.commands.openAlternateFile",
        () => {
            const railsAlternateFile = new RailsAlternateFile();
            railsAlternateFile.alternate();
        }
    );

    // Register Nova commands for opening Documentations
    nova.commands.register(
        "tommasonegri.rails.commands.documentation.openRailsGuides",
        () => {
            const railsDocumentation = new RailsDocumentation();
            railsDocumentation.openDocs("https://guides.rubyonrails.org");
        }
    );
    nova.commands.register(
        "tommasonegri.rails.commands.documentation.openRailsAPI",
        () => {
            const railsDocumentation = new RailsDocumentation();
            railsDocumentation.openDocs("https://api.rubyonrails.org");
        }
    );
    nova.commands.register(
        "tommasonegri.rails.commands.documentation.openRailsForum",
        () => {
            const railsDocumentation = new RailsDocumentation();
            railsDocumentation.openDocs("https://discuss.rubyonrails.org");
        }
    );
    nova.commands.register(
        "tommasonegri.rails.commands.documentation.openTurboReference",
        () => {
            const railsDocumentation = new RailsDocumentation();
            railsDocumentation.openDocs(
                "https://turbo.hotwire.dev/reference/drive"
            );
        }
    );
    nova.commands.register(
        "tommasonegri.rails.commands.documentation.openStimulusReference",
        () => {
            const railsDocumentation = new RailsDocumentation();
            railsDocumentation.openDocs(
                "https://stimulus.hotwire.dev/reference/controllers"
            );
        }
    );

    // Register a Nova command for Searching the Documentation with the Command Palette
    nova.commands.register(
        "tommasonegri.rails.commands.documentation.search",
        () => {
            const railsDocumentation = new RailsDocumentation();
            railsDocumentation.searchDocs();
        }
    );
}