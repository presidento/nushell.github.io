import pathlib
import scripthelper
import re

logger = scripthelper.bootstrap()

commands = {}
missing_commands = set()

for filepath in pathlib.Path('../commands/docs').glob("*.md"):
    command = filepath.stem.replace("_", " ")
    logger.verbose(f"Command found: {command}")
    commands[command] = filepath.name

def change(input):
    command = input.group(1)
    command_file = commands.get(command)
    if not command_file:
        missing_commands.add(command)
        return input.group(0)
    linked_command = f"[`{command}`](/commands/docs/{command_file})"
    return linked_command

for filepath in pathlib.Path('.').glob("*.md"):
    new_lines = []
    for line in filepath.open(encoding="utf-8"):
        line = re.sub(r'`([\w -]+)`(?!\])', change, line)
        new_lines.append(line)
    filepath.write_text(''.join(new_lines), encoding="utf-8")

for command in sorted(missing_commands):
    logger.verbose(f"Command not found: {command}")