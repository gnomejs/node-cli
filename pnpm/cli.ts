import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("pnpm", {
    name: "pnpm",
    windows: [
        ".\\node_modules\\.bin\\pnpm.cmd",
        "${APPDATA}\\npm\\pnpm.cmd",
        "${LOCALAPPDATA}\\nvs\\default\\pnpm.cmd",
    ],
    linux: [
        "/usr/bin/pnpm",
        "${HOME}/.nvs/default/bin/pnpm",
    ],
});

/**
 * Represents a pnpm command.
 */
export class PnpmCommand extends Command {
    /**
     * Creates a new instance of the `PnpmCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("pnpm", args, options);
    }
}

/**
 * Executes the pnpm command line using the PnpmCommand class.
 * @param args The command arguments.
 * @param options The command options.
 * @returns a new instance of the PnpmCommand class.
 */
export function pnpm(args?: CommandArgs, options?: CommandOptions): PnpmCommand {
    return new PnpmCommand(args, options);
}
