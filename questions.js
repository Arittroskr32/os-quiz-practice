const QUESTIONS = [
  {
    "id": 1,
    "section": "Linux",
    "q": "What does `echo \"Hello\"` do?",
    "options": [
      "Creates a file named Hello",
      "Prints Hello to standard output",
      "Searches for the string Hello",
      "Changes directory to Hello"
    ],
    "answer": "B",
    "why": "echo prints text/variables to stdout; it does not create files or change directories."
  },
  {
    "id": 2,
    "section": "Linux",
    "q": "Which command changes the current directory to your home directory?",
    "options": [
      "cd /",
      "cd ~",
      "ls ~",
      "pwd ~"
    ],
    "answer": "B",
    "why": "`cd ~` (and plain `cd`) moves to the user's home directory."
  },
  {
    "id": 3,
    "section": "Linux",
    "q": "Which command lists files in long format (permissions, owner, size)?",
    "options": [
      "ls -a",
      "ls -l",
      "ls -R",
      "ls -t"
    ],
    "answer": "B",
    "why": "`ls -l` shows a long listing including permissions and ownership."
  },
  {
    "id": 4,
    "section": "Linux",
    "q": "Which option with `ls` shows hidden files (dotfiles)?",
    "options": [
      "-h",
      "-a",
      "-p",
      "-s"
    ],
    "answer": "B",
    "why": "`ls -a` includes entries starting with '.' like .bashrc."
  },
  {
    "id": 5,
    "section": "Linux",
    "q": "What does `mkdir -p a/b/c` do?",
    "options": [
      "Deletes a/b/c",
      "Creates only directory a",
      "Creates intermediate directories as needed",
      "Prints directory tree"
    ],
    "answer": "C",
    "why": "`-p` tells mkdir to create parents if they don't exist."
  },
  {
    "id": 6,
    "section": "Linux",
    "q": "What is the purpose of `touch file.txt`?",
    "options": [
      "Display file contents",
      "Create empty file or update timestamp",
      "Move file.txt",
      "Compare files"
    ],
    "answer": "B",
    "why": "touch creates the file if missing, otherwise updates its timestamps."
  },
  {
    "id": 7,
    "section": "Linux",
    "q": "Which command prints the contents of a text file to the terminal?",
    "options": [
      "cat",
      "cd",
      "mv",
      "chmod"
    ],
    "answer": "A",
    "why": "`cat` outputs file contents to stdout."
  },
  {
    "id": 8,
    "section": "Linux",
    "q": "Which command opens a file for editing in a terminal text editor (as in your lab sheet)?",
    "options": [
      "nano",
      "grep",
      "diff",
      "file"
    ],
    "answer": "A",
    "why": "nano is a terminal text editor used to edit files interactively."
  },
  {
    "id": 9,
    "section": "Linux",
    "q": "What does `file hello.txt` usually report for a plain text file?",
    "options": [
      "ELF executable",
      "ASCII text",
      "Directory",
      "Socket"
    ],
    "answer": "B",
    "why": "The `file` utility detects file type; a plain text file is reported as ASCII/text."
  },
  {
    "id": 10,
    "section": "Linux",
    "q": "What does `cp source.txt copy.txt` do?",
    "options": [
      "Moves source.txt to copy.txt",
      "Creates a new copy named copy.txt",
      "Deletes source.txt",
      "Links files"
    ],
    "answer": "B",
    "why": "`cp` duplicates the source into a new destination file."
  },
  {
    "id": 11,
    "section": "Linux",
    "q": "What does `diff a.txt b.txt` show?",
    "options": [
      "Disk free space",
      "Line-by-line differences",
      "Processes running",
      "Permissions of files"
    ],
    "answer": "B",
    "why": "diff compares two files and shows differing lines."
  },
  {
    "id": 12,
    "section": "Linux",
    "q": "What does `mv old.txt new.txt` do if both are in same directory?",
    "options": [
      "Copies old.txt",
      "Renames old.txt to new.txt",
      "Deletes new.txt",
      "Shows differences"
    ],
    "answer": "B",
    "why": "mv is used for moving or renaming; in same folder it's a rename."
  },
  {
    "id": 13,
    "section": "Linux",
    "q": "Which command removes a file named copied.txt?",
    "options": [
      "rm copied.txt",
      "rmdir copied.txt",
      "del copied.txt",
      "erase copied.txt"
    ],
    "answer": "A",
    "why": "rm removes files; rmdir is for empty directories."
  },
  {
    "id": 14,
    "section": "Linux",
    "q": "What does `rm -r dir/` do?",
    "options": [
      "Removes a file named dir",
      "Removes directory dir and its contents recursively",
      "Renames dir to r",
      "Restores dir from trash"
    ],
    "answer": "B",
    "why": "`-r` recursively removes directories and everything inside."
  },
  {
    "id": 15,
    "section": "Linux",
    "q": "What does `rm -rf dir/` imply?",
    "options": [
      "Interactive removal with prompts",
      "Force + recursive removal, no prompts",
      "Read-only removal",
      "Only removes empty dirs"
    ],
    "answer": "B",
    "why": "`-r` recursive and `-f` force (suppress prompts/errors in many cases)."
  },
  {
    "id": 16,
    "section": "Linux",
    "q": "Which command searches for lines containing \"main\" in hello.txt?",
    "options": [
      "find \"main\" hello.txt",
      "grep \"main\" hello.txt",
      "cat \"main\" hello.txt",
      "ls \"main\" hello.txt"
    ],
    "answer": "B",
    "why": "grep searches for a pattern in file contents."
  },
  {
    "id": 17,
    "section": "Linux",
    "q": "Which command finds a file named hello.txt somewhere under your home directory?",
    "options": [
      "grep ~/ -name hello.txt",
      "find ~/ -name \"hello.txt\"",
      "ls ~/ -name hello.txt",
      "pwd -name hello.txt"
    ],
    "answer": "B",
    "why": "find searches directories; -name matches filenames."
  },
  {
    "id": 18,
    "section": "Linux",
    "q": "In shell globbing, what does `*.txt` match?",
    "options": [
      "Only a file literally named *.txt",
      "All files ending with .txt",
      "All hidden files",
      "All directories"
    ],
    "answer": "B",
    "why": "The wildcard * matches any string, so *.txt matches all .txt files."
  },
  {
    "id": 19,
    "section": "Linux",
    "q": "What does `>` do in `echo \"OS\" > hello.txt`?",
    "options": [
      "Appends to file",
      "Overwrites/redirects output into file",
      "Redirects stderr",
      "Pipes output to grep"
    ],
    "answer": "B",
    "why": "`>` redirects stdout and overwrites the target file."
  },
  {
    "id": 20,
    "section": "Linux",
    "q": "An absolute path in Linux typically starts with:",
    "options": [
      "~",
      ".",
      "/",
      "-"
    ],
    "answer": "C",
    "why": "Absolute paths begin at the filesystem root: /"
  },
  {
    "id": 21,
    "section": "Linux",
    "q": "A relative path like `./hello.txt` is interpreted relative to:",
    "options": [
      "The root directory",
      "The current working directory",
      "The home directory",
      "The /tmp directory"
    ],
    "answer": "B",
    "why": "`./` refers to the current directory."
  },
  {
    "id": 22,
    "section": "Linux",
    "q": "What does `chmod +x script.sh` do?",
    "options": [
      "Removes execute permission",
      "Adds execute permission",
      "Changes owner",
      "Changes group"
    ],
    "answer": "B",
    "why": "`+x` adds execute permission to the file."
  },
  {
    "id": 23,
    "section": "Linux",
    "q": "What does `chmod 644 file` set?",
    "options": [
      "rwxrwxrwx",
      "rw-r--r--",
      "r--r--r--",
      "rw-------"
    ],
    "answer": "B",
    "why": "644 means owner read+write, group read, others read."
  },
  {
    "id": 24,
    "section": "Linux",
    "q": "In `ls -l`, what does a leading `d` indicate?",
    "options": [
      "Device file",
      "Directory",
      "Deleted file",
      "Daemon"
    ],
    "answer": "B",
    "why": "File type: 'd' indicates a directory."
  },
  {
    "id": 25,
    "section": "Linux",
    "q": "In `ls -l`, what does a leading `-` indicate?",
    "options": [
      "Regular file",
      "Directory",
      "Symlink",
      "Socket"
    ],
    "answer": "A",
    "why": "A leading '-' indicates a regular file."
  },
  {
    "id": 26,
    "section": "Linux",
    "q": "In `ls -l`, what does a leading `l` indicate?",
    "options": [
      "Log file",
      "Link (symlink)",
      "Locked file",
      "Large file"
    ],
    "answer": "B",
    "why": "'l' indicates a symbolic link."
  },
  {
    "id": 27,
    "section": "Linux",
    "q": "Which command shows the current working directory?",
    "options": [
      "pwd",
      "cwd",
      "dir",
      "where"
    ],
    "answer": "A",
    "why": "pwd prints the current working directory."
  },
  {
    "id": 28,
    "section": "Linux",
    "q": "Which command can display a manual page for `ls`?",
    "options": [
      "help ls",
      "man ls",
      "info ls only",
      "doc ls"
    ],
    "answer": "B",
    "why": "man shows the manual pages for commands."
  },
  {
    "id": 29,
    "section": "Linux",
    "q": "Which `grep` option prints line numbers with matches?",
    "options": [
      "-c",
      "-n",
      "-r",
      "-i"
    ],
    "answer": "B",
    "why": "`grep -n` includes line numbers for matching lines."
  },
  {
    "id": 30,
    "section": "Linux",
    "q": "Which `grep` option searches recursively through directories?",
    "options": [
      "-p",
      "-r",
      "-l",
      "-s"
    ],
    "answer": "B",
    "why": "`grep -r` searches recursively."
  },
  {
    "id": 31,
    "section": "Linux",
    "q": "What does `grep -c pattern file` output?",
    "options": [
      "Matched lines themselves",
      "Count of matching lines",
      "Only non-matching lines",
      "File permissions"
    ],
    "answer": "B",
    "why": "`-c` prints the number of matching lines."
  },
  {
    "id": 32,
    "section": "Linux",
    "q": "What does `grep -v pattern file` do?",
    "options": [
      "Shows only matching lines",
      "Shows only non-matching lines",
      "Validates regex",
      "Shows verbose output"
    ],
    "answer": "B",
    "why": "`-v` inverts the match, printing lines that do NOT match."
  },
  {
    "id": 33,
    "section": "Linux",
    "q": "What does `cat > out.txt` do after you type lines and then press Ctrl-D?",
    "options": [
      "Appends typed lines to out.txt",
      "Overwrites out.txt with typed input",
      "Deletes out.txt",
      "Prints out.txt"
    ],
    "answer": "B",
    "why": "Redirecting stdin into cat with `>` writes/overwrites the file with what you type."
  },
  {
    "id": 34,
    "section": "Linux",
    "q": "Which redirection appends instead of overwriting?",
    "options": [
      ">",
      ">>",
      "<",
      "|"
    ],
    "answer": "B",
    "why": "`>>` appends stdout to a file."
  },
  {
    "id": 35,
    "section": "Linux",
    "q": "Which command compares two files and shows differences line-by-line?",
    "options": [
      "cmp",
      "diff",
      "comm",
      "all of these"
    ],
    "answer": "D",
    "why": "cmp/diff/comm compare in different ways; diff is most common for line diffs."
  },
  {
    "id": 36,
    "section": "Linux",
    "q": "Which command would show hidden files including .bashrc?",
    "options": [
      "ls",
      "ls -h",
      "ls -a",
      "ls -p"
    ],
    "answer": "C",
    "why": "Hidden dotfiles require `-a`."
  },
  {
    "id": 37,
    "section": "Linux",
    "q": "What does `cd -` do?",
    "options": [
      "Go to root",
      "Go to previous working directory",
      "Delete directory",
      "List directories"
    ],
    "answer": "B",
    "why": "`cd -` toggles to the previous directory."
  },
  {
    "id": 38,
    "section": "Linux",
    "q": "What does `rm` do to a file?",
    "options": [
      "Moves it to recycle bin by default",
      "Deletes it (not easily reversible)",
      "Compresses it",
      "Encrypts it"
    ],
    "answer": "B",
    "why": "rm removes directory entries; recovery isn't guaranteed."
  },
  {
    "id": 39,
    "section": "Linux",
    "q": "Which tool is typically used to search for a filename by pattern in a directory tree?",
    "options": [
      "grep",
      "find",
      "cat",
      "nano"
    ],
    "answer": "B",
    "why": "find searches the filesystem by name/attributes; grep searches content."
  },
  {
    "id": 40,
    "section": "Linux",
    "q": "Which command prints the first 10 lines of a file?",
    "options": [
      "tail",
      "head",
      "start",
      "first"
    ],
    "answer": "B",
    "why": "head prints initial lines; default is 10."
  },
  {
    "id": 41,
    "section": "Linux",
    "q": "Which command prints the last 10 lines of a file?",
    "options": [
      "tail",
      "head",
      "end",
      "last"
    ],
    "answer": "A",
    "why": "tail prints ending lines; default is 10."
  },
  {
    "id": 42,
    "section": "Linux",
    "q": "What does `sort file.txt` do?",
    "options": [
      "Sorts lines of file.txt alphabetically",
      "Sorts bytes of file.txt",
      "Sorts files in the directory",
      "Sorts processes"
    ],
    "answer": "A",
    "why": "sort outputs lines in sorted order."
  },
  {
    "id": 43,
    "section": "Linux",
    "q": "What does `uniq -d file.txt` output?",
    "options": [
      "All unique lines",
      "Only repeated (duplicate) lines",
      "Deletes duplicates in-place",
      "Counts lines"
    ],
    "answer": "B",
    "why": "`uniq -d` reports lines that are repeated."
  },
  {
    "id": 44,
    "section": "Linux",
    "q": "What does `cut -d ',' -f 1 file.csv` do?",
    "options": [
      "Deletes commas",
      "Prints only field 1 using comma delimiter",
      "Finds 1st line",
      "Formats output"
    ],
    "answer": "B",
    "why": "cut selects delimited fields; -d sets delimiter, -f selects fields."
  },
  {
    "id": 45,
    "section": "Linux",
    "q": "What does `sed -i 's/okay/great/g' file.txt` do?",
    "options": [
      "Prints only lines containing okay",
      "Replaces all 'okay' with 'great' in-place",
      "Deletes file.txt",
      "Counts occurrences"
    ],
    "answer": "B",
    "why": "sed performs substitutions; -i edits the file in-place."
  },
  {
    "id": 46,
    "section": "Linux",
    "q": "What is a dotfile?",
    "options": [
      "A file ending with '.'",
      "A file starting with '.'",
      "A file with extension .dot",
      "A directory only"
    ],
    "answer": "B",
    "why": "Dotfiles start with '.' and are hidden by default listing."
  },
  {
    "id": 47,
    "section": "Linux",
    "q": "What is the purpose of `*` globbing in `grep \"int\" *.txt`?",
    "options": [
      "Run grep in background",
      "Match all files ending with .txt",
      "Match only hidden files",
      "Match directories only"
    ],
    "answer": "B",
    "why": "*.txt expands to all .txt filenames before grep runs."
  },
  {
    "id": 48,
    "section": "Linux",
    "q": "For `cat`, Which `cat` option numbers all output lines?",
    "options": [
      "-n",
      "-l",
      "-p",
      "-a"
    ],
    "answer": "A",
    "why": "`cat -n` numbers all lines."
  },
  {
    "id": 49,
    "section": "Linux",
    "q": "For `cat`, Which `cat` option numbers only non-blank lines?",
    "options": [
      "-b",
      "-n",
      "-s",
      "-e"
    ],
    "answer": "A",
    "why": "`cat -b` numbers non-blank lines only."
  },
  {
    "id": 50,
    "section": "Linux",
    "q": "For `cat`, Which `cat` option squeezes multiple blank lines into one?",
    "options": [
      "-s",
      "-b",
      "-t",
      "-A"
    ],
    "answer": "A",
    "why": "`cat -s` squeezes repeated empty lines."
  },
  {
    "id": 51,
    "section": "Linux",
    "q": "For `cat`, Which `cat` option shows $ at end of each line (often via -E)?",
    "options": [
      "-E",
      "-q",
      "-m",
      "-U"
    ],
    "answer": "A",
    "why": "`cat -E` displays $ at line endings."
  },
  {
    "id": 52,
    "section": "Linux",
    "q": "For `cat`, Which `cat` option displays tabs as ^I (often via -T)?",
    "options": [
      "-T",
      "-Z",
      "-v",
      "-0"
    ],
    "answer": "A",
    "why": "`cat -T` shows tabs explicitly."
  },
  {
    "id": 53,
    "section": "Linux",
    "q": "For `ls`, Which `ls` option sorts by modification time (newest first)?",
    "options": [
      "-t",
      "-S",
      "-r",
      "-X"
    ],
    "answer": "A",
    "why": "`ls -t` sorts by time."
  },
  {
    "id": 54,
    "section": "Linux",
    "q": "For `ls`, Which `ls` option lists subdirectories recursively?",
    "options": [
      "-R",
      "-a",
      "-h",
      "-i"
    ],
    "answer": "A",
    "why": "`ls -R` recurses into subdirectories."
  },
  {
    "id": 55,
    "section": "Linux",
    "q": "For `ls`, Which `ls` option shows inode numbers?",
    "options": [
      "-i",
      "-n",
      "-p",
      "-g"
    ],
    "answer": "A",
    "why": "`ls -i` prints inode numbers."
  },
  {
    "id": 56,
    "section": "Linux",
    "q": "For `ls`, Which `ls` option shows human-readable sizes (e.g., 1K, 2M)?",
    "options": [
      "-h",
      "-H",
      "-u",
      "-k"
    ],
    "answer": "A",
    "why": "`ls -h` with -l shows human readable sizes."
  },
  {
    "id": 57,
    "section": "Linux",
    "q": "For `ls`, Which `ls` option shows directory entries themselves, not their contents?",
    "options": [
      "-d",
      "-D",
      "-c",
      "-f"
    ],
    "answer": "A",
    "why": "`ls -d` lists directories as entries."
  },
  {
    "id": 58,
    "section": "Linux",
    "q": "For `cp`, Which `cp` option copies directories recursively?",
    "options": [
      "-r",
      "-f",
      "-n",
      "-d"
    ],
    "answer": "A",
    "why": "`cp -r` copies directories recursively."
  },
  {
    "id": 59,
    "section": "Linux",
    "q": "For `cp`, Which `cp` option prompts before overwrite?",
    "options": [
      "-i",
      "-p",
      "-u",
      "-s"
    ],
    "answer": "A",
    "why": "`cp -i` asks before overwriting."
  },
  {
    "id": 60,
    "section": "Linux",
    "q": "For `cp`, Which `cp` option preserves mode/ownership/timestamps as much as possible?",
    "options": [
      "-p",
      "-i",
      "-v",
      "-b"
    ],
    "answer": "A",
    "why": "`cp -p` preserves attributes."
  },
  {
    "id": 61,
    "section": "Linux",
    "q": "For `cp`, Which `cp` option shows what is being copied (verbose)?",
    "options": [
      "-v",
      "-q",
      "-h",
      "-z"
    ],
    "answer": "A",
    "why": "`cp -v` prints actions."
  },
  {
    "id": 62,
    "section": "Linux",
    "q": "For `cp`, Which `cp` option does not overwrite an existing file?",
    "options": [
      "-n",
      "-o",
      "-c",
      "-x"
    ],
    "answer": "A",
    "why": "`cp -n` means no clobber."
  },
  {
    "id": 63,
    "section": "Linux",
    "q": "For `touch`, Which `touch` option changes only the access time?",
    "options": [
      "-a",
      "-m",
      "-c",
      "-t"
    ],
    "answer": "A",
    "why": "`touch -a` updates access time."
  },
  {
    "id": 64,
    "section": "Linux",
    "q": "For `touch`, Which `touch` option changes only the modification time?",
    "options": [
      "-m",
      "-a",
      "-c",
      "-r"
    ],
    "answer": "A",
    "why": "`touch -m` updates modification time."
  },
  {
    "id": 65,
    "section": "Linux",
    "q": "For `touch`, Which `touch` option does not create the file if it doesn't exist?",
    "options": [
      "-c",
      "-n",
      "-p",
      "-x"
    ],
    "answer": "A",
    "why": "`touch -c` (no create) avoids creating new files."
  },
  {
    "id": 66,
    "section": "Linux",
    "q": "For `touch`, Which `touch` option sets a specific timestamp like [[CC]YY]MMDDhhmm[.ss] ?",
    "options": [
      "-t",
      "-s",
      "-d",
      "-u"
    ],
    "answer": "A",
    "why": "`touch -t` sets an explicit timestamp format."
  },
  {
    "id": 67,
    "section": "Linux",
    "q": "For `touch`, Which `touch` option uses a reference file's timestamp?",
    "options": [
      "-r",
      "-t",
      "-c",
      "-a"
    ],
    "answer": "A",
    "why": "`touch -r ref file` copies timestamps from ref."
  },
  {
    "id": 68,
    "section": "Linux",
    "q": "For `rm`, Which `rm` option removes directories and their contents recursively?",
    "options": [
      "-r",
      "-f",
      "-i",
      "-d"
    ],
    "answer": "A",
    "why": "`rm -r` removes directories recursively."
  },
  {
    "id": 69,
    "section": "Linux",
    "q": "For `rm`, Which `rm` option forces removal without prompting for nonexistent files?",
    "options": [
      "-f",
      "-r",
      "-i",
      "-v"
    ],
    "answer": "A",
    "why": "`rm -f` forces and suppresses prompts/errors."
  },
  {
    "id": 70,
    "section": "Linux",
    "q": "For `rm`, Which `rm` option prompts before each removal?",
    "options": [
      "-i",
      "-f",
      "-q",
      "-s"
    ],
    "answer": "A",
    "why": "`rm -i` asks for confirmation."
  },
  {
    "id": 71,
    "section": "Linux",
    "q": "For `rm`, Which `rm` option explains what is being done (verbose)?",
    "options": [
      "-v",
      "-V",
      "-x",
      "-n"
    ],
    "answer": "A",
    "why": "`rm -v` prints each removal."
  },
  {
    "id": 72,
    "section": "Linux",
    "q": "For `rm`, Which combination is the most dangerous for deleting a directory tree?",
    "options": [
      "rm -i",
      "rm -r",
      "rm -rf",
      "rm -d"
    ],
    "answer": "C",
    "why": "`rm -rf` forces recursive deletion; very risky."
  },
  {
    "id": 73,
    "section": "Linux",
    "q": "For `mkdir`, Which `mkdir` option creates parent directories as needed?",
    "options": [
      "-p",
      "-r",
      "-f",
      "-v"
    ],
    "answer": "A",
    "why": "`mkdir -p` creates intermediate directories."
  },
  {
    "id": 74,
    "section": "Linux",
    "q": "For `mkdir`, Which `mkdir` option prints a message for each created directory?",
    "options": [
      "-v",
      "-q",
      "-n",
      "-s"
    ],
    "answer": "A",
    "why": "`mkdir -v` is verbose."
  },
  {
    "id": 75,
    "section": "Linux",
    "q": "For `mkdir`, How do you set permissions while creating a directory (common option)?",
    "options": [
      "-m",
      "-p",
      "-t",
      "-a"
    ],
    "answer": "A",
    "why": "`mkdir -m MODE dir` sets permissions."
  },
  {
    "id": 76,
    "section": "Linux",
    "q": "For `mkdir`, What happens if you run `mkdir existing_dir` without -p?",
    "options": [
      "It silently succeeds",
      "It errors that the file exists",
      "It deletes and recreates it",
      "It renames it"
    ],
    "answer": "B",
    "why": "Without -p, mkdir returns an error if the directory exists."
  },
  {
    "id": 77,
    "section": "Linux",
    "q": "For `mkdir`, What does `mkdir -p` return if the directory already exists?",
    "options": [
      "It errors",
      "It succeeds without error",
      "It deletes the directory",
      "It changes ownership"
    ],
    "answer": "B",
    "why": "mkdir -p is idempotent: existing directories don't cause failure."
  },
  {
    "id": 78,
    "section": "Linux",
    "q": "For `pwd`, What does `pwd` stand for?",
    "options": [
      "Print working directory",
      "Process working daemon",
      "Print wildcard directory",
      "Public web directory"
    ],
    "answer": "A",
    "why": "pwd prints the current working directory path."
  },
  {
    "id": 79,
    "section": "Linux",
    "q": "For `pwd`, Which environment variable often matches `pwd` output?",
    "options": [
      "$HOME",
      "$PWD",
      "$PATH",
      "$SHELL"
    ],
    "answer": "B",
    "why": "$PWD typically stores the current directory."
  },
  {
    "id": 80,
    "section": "Linux",
    "q": "For `pwd`, If you're in /home/user and run `cd ..`, what will `pwd` show?",
    "options": [
      "/home/user",
      "/home",
      "/",
      "user"
    ],
    "answer": "B",
    "why": "cd .. goes to parent directory, so /home."
  },
  {
    "id": 81,
    "section": "Linux",
    "q": "For `pwd`, Is `pwd` affected by your shell's current directory?",
    "options": [
      "Yes",
      "No",
      "Only on macOS",
      "Only with sudo"
    ],
    "answer": "A",
    "why": "pwd prints the shell's current directory."
  },
  {
    "id": 82,
    "section": "Linux",
    "q": "For `pwd`, Which command shows where you are before using relative paths?",
    "options": [
      "pwd",
      "ls",
      "cat",
      "touch"
    ],
    "answer": "A",
    "why": "pwd helps confirm the current directory for relative paths."
  },
  {
    "id": 83,
    "section": "Linux",
    "q": "For `grep`, Which `grep` option ignores case?",
    "options": [
      "-i",
      "-n",
      "-v",
      "-c"
    ],
    "answer": "A",
    "why": "`grep -i` matches case-insensitively."
  },
  {
    "id": 84,
    "section": "Linux",
    "q": "For `grep`, Which `grep` option treats the pattern as a fixed string (no regex)?",
    "options": [
      "-F",
      "-E",
      "-P",
      "-G"
    ],
    "answer": "A",
    "why": "`grep -F` (or fgrep) matches fixed strings."
  },
  {
    "id": 85,
    "section": "Linux",
    "q": "For `grep`, Which `grep` option prints only filenames with matches?",
    "options": [
      "-l",
      "-n",
      "-r",
      "-o"
    ],
    "answer": "A",
    "why": "`grep -l` lists matching filenames."
  },
  {
    "id": 86,
    "section": "Linux",
    "q": "For `grep`, Which `grep` option prints only the matching part of a line?",
    "options": [
      "-o",
      "-l",
      "-H",
      "-s"
    ],
    "answer": "A",
    "why": "`grep -o` outputs only the matched text."
  },
  {
    "id": 87,
    "section": "Linux",
    "q": "For `grep`, Which `grep` option matches whole words only?",
    "options": [
      "-w",
      "-x",
      "-q",
      "-m"
    ],
    "answer": "A",
    "why": "`grep -w` matches whole words."
  },
  {
    "id": 88,
    "section": "Linux",
    "q": "What does the pipe operator `|` do?",
    "options": [
      "Redirects stderr to file",
      "Passes stdout of one command as stdin to another",
      "Runs command in background",
      "Stops a running command"
    ],
    "answer": "B",
    "why": "A pipe connects stdout of the left command to stdin of the right command."
  },
  {
    "id": 89,
    "section": "Linux",
    "q": "What does `2> error.log` do?",
    "options": [
      "Redirects stdout to error.log",
      "Redirects stderr to error.log",
      "Redirects stdin from error.log",
      "Appends stdout to error.log"
    ],
    "answer": "B",
    "why": "File descriptor 2 is stderr; `2>` redirects it."
  },
  {
    "id": 90,
    "section": "Linux",
    "q": "What does `> all.log 2>&1` accomplish?",
    "options": [
      "Redirects stderr to terminal",
      "Redirects stdout to all.log and stderr to same place",
      "Redirects stdin to all.log",
      "Runs in background"
    ],
    "answer": "B",
    "why": "`2>&1` merges stderr into wherever stdout is currently going."
  },
  {
    "id": 91,
    "section": "Linux",
    "q": "Why is `2>1` usually wrong?",
    "options": [
      "It is correct syntax",
      "It redirects stderr to a file named '1' (without &)",
      "It deletes fd 2",
      "It changes umask"
    ],
    "answer": "B",
    "why": "Without &, the shell treats 1 as a filename, not file descriptor 1."
  },
  {
    "id": 92,
    "section": "Linux",
    "q": "What does `echo \"Hi\" >> file.txt` do?",
    "options": [
      "Overwrites file.txt",
      "Appends Hi to file.txt",
      "Deletes file.txt",
      "Pipes Hi into file.txt without writing"
    ],
    "answer": "B",
    "why": "`>>` appends stdout to the file."
  },
  {
    "id": 93,
    "section": "Linux",
    "q": "What does `./script.sh` mean when running a script?",
    "options": [
      "Run script from PATH",
      "Run script in current directory",
      "Open script in editor",
      "Compile script"
    ],
    "answer": "B",
    "why": "`./` specifies the current directory path explicitly."
  },
  {
    "id": 94,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 95,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 96,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 97,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 98,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 99,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 100,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 101,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 102,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 103,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 104,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 105,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 106,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 107,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 108,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 109,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 110,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 111,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 112,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 113,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 114,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 115,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 116,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 117,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 118,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 119,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 120,
    "section": "Linux",
    "q": "In `ls -l`, permissions `rwxr-xr--` mean:",
    "options": [
      "Owner: read/write/execute; Group: read/execute; Others: read",
      "Owner: read only; Group: write only; Others: execute",
      "Owner: read/write; Group: read/write; Others: read/write",
      "Owner: execute only; Group: execute only; Others: execute only"
    ],
    "answer": "A",
    "why": "Permissions are grouped as owner/group/others; rwx r-x r-- matches the first option."
  },
  {
    "id": 121,
    "section": "Bash",
    "q": "What is the purpose of the shebang line `#!/bin/bash` at the top of a script?",
    "options": [
      "It comments out the first line",
      "It tells the system which interpreter to use",
      "It sets file permissions",
      "It declares a variable"
    ],
    "answer": "B",
    "why": "The shebang selects the interpreter used to execute the script."
  },
  {
    "id": 122,
    "section": "Bash",
    "q": "In Bash, how do you assign a value to a variable correctly?",
    "options": [
      "name = Farhan",
      "name='Farhan'",
      "$name='Farhan'",
      "set name Farhan"
    ],
    "answer": "B",
    "why": "No spaces around '='; variable name is written without $ during assignment."
  },
  {
    "id": 123,
    "section": "Bash",
    "q": "Which quoting prevents variable expansion (treats `$VAR` literally)?",
    "options": [
      "Double quotes",
      "Single quotes",
      "Backticks",
      "No quotes"
    ],
    "answer": "B",
    "why": "Single quotes prevent expansion; double quotes still expand variables."
  },
  {
    "id": 124,
    "section": "Bash",
    "q": "What does `$0` represent in a Bash script?",
    "options": [
      "Exit code of last command",
      "Script name",
      "First argument",
      "PID of parent"
    ],
    "answer": "B",
    "why": "$0 is the name/path used to invoke the script."
  },
  {
    "id": 125,
    "section": "Bash",
    "q": "What does `$#` represent?",
    "options": [
      "Number of arguments",
      "All arguments",
      "PID of script",
      "Exit code"
    ],
    "answer": "A",
    "why": "$# is the count of positional parameters passed to the script."
  },
  {
    "id": 126,
    "section": "Bash",
    "q": "What does `$@` represent?",
    "options": [
      "All arguments as separate words",
      "Only the last argument",
      "Number of args",
      "The current directory"
    ],
    "answer": "A",
    "why": "$@ expands to all positional parameters."
  },
  {
    "id": 127,
    "section": "Bash",
    "q": "What does `$?` store?",
    "options": [
      "PID of current shell",
      "Exit status of last command",
      "Home directory",
      "Current user"
    ],
    "answer": "B",
    "why": "$? holds the exit code of the most recently executed command."
  },
  {
    "id": 128,
    "section": "Bash",
    "q": "What does `$$` store in a script?",
    "options": [
      "Exit code",
      "PID of the script process",
      "Parent PID",
      "Number of jobs"
    ],
    "answer": "B",
    "why": "$$ is the current shell/script PID."
  },
  {
    "id": 129,
    "section": "Bash",
    "q": "Which syntax performs integer arithmetic in Bash?",
    "options": [
      "$((a+b))",
      "$(a+b)",
      "${a+b}",
      "((a+b)) prints automatically"
    ],
    "answer": "A",
    "why": "$((...)) evaluates an arithmetic expression and expands to its value."
  },
  {
    "id": 130,
    "section": "Bash",
    "q": "Bash natively supports:",
    "options": [
      "Only floating point arithmetic",
      "Only integer arithmetic",
      "Only complex arithmetic",
      "No arithmetic"
    ],
    "answer": "B",
    "why": "Bash arithmetic expansion is integer-based; floats need tools like bc."
  },
  {
    "id": 131,
    "section": "Bash",
    "q": "Why use `bc -l` in scripts?",
    "options": [
      "To compress files",
      "To do floating point math and math functions",
      "To list processes",
      "To edit text"
    ],
    "answer": "B",
    "why": "bc -l enables floating-point and provides math library functions."
  },
  {
    "id": 132,
    "section": "Bash",
    "q": "Which sets decimal precision inside bc?",
    "options": [
      "precision=",
      "scale=",
      "digits=",
      "dp="
    ],
    "answer": "B",
    "why": "scale controls digits after decimal in bc expressions."
  },
  {
    "id": 133,
    "section": "Bash",
    "q": "Which command reads input into a variable in Bash?",
    "options": [
      "input var",
      "read var",
      "scan var",
      "get var"
    ],
    "answer": "B",
    "why": "read reads from stdin into a variable."
  },
  {
    "id": 134,
    "section": "Bash",
    "q": "Which `read` option hides typed input (useful for passwords)?",
    "options": [
      "-p",
      "-s",
      "-n",
      "-t"
    ],
    "answer": "B",
    "why": "`read -s` reads silently without echoing characters."
  },
  {
    "id": 135,
    "section": "Bash",
    "q": "What does `read -p \"Enter age: \" age` do?",
    "options": [
      "Prints age then exits",
      "Prompts then reads input into age",
      "Sets age to prompt text",
      "Reads from a file named age"
    ],
    "answer": "B",
    "why": "`-p` shows a prompt before reading into the variable."
  },
  {
    "id": 136,
    "section": "Bash",
    "q": "What does command substitution `var=$(date)` do?",
    "options": [
      "Runs date and stores output in var",
      "Sets date to var",
      "Runs var and stores in date",
      "Prints literal $(date)"
    ],
    "answer": "A",
    "why": "$(cmd) runs cmd and substitutes its stdout."
  },
  {
    "id": 137,
    "section": "Bash",
    "q": "What does `command1 && command2` mean?",
    "options": [
      "Run command2 only if command1 fails",
      "Run command2 only if command1 succeeds",
      "Run both always",
      "Run both in background"
    ],
    "answer": "B",
    "why": "&& chains commands conditionally on success (exit status 0)."
  },
  {
    "id": 138,
    "section": "Bash",
    "q": "What does `command1 || command2` mean?",
    "options": [
      "Run command2 only if command1 succeeds",
      "Run command2 only if command1 fails",
      "Always run command2",
      "Pipe output"
    ],
    "answer": "B",
    "why": "|| runs the right side only when the left side fails."
  },
  {
    "id": 139,
    "section": "Bash",
    "q": "Which is the correct structure of an if statement in Bash?",
    "options": [
      "if (cond) { }",
      "if [ cond ]; then ... fi",
      "if cond: ... endif",
      "if cond do ... done"
    ],
    "answer": "B",
    "why": "Bash uses `if [ condition ]; then ... fi`."
  },
  {
    "id": 140,
    "section": "Bash",
    "q": "Which test checks if a file exists and is a directory?",
    "options": [
      "-f",
      "-d",
      "-x",
      "-r"
    ],
    "answer": "B",
    "why": "`-d file` is true when file exists and is a directory."
  },
  {
    "id": 141,
    "section": "Bash",
    "q": "Which operator tests integer equality inside `[ ]`?",
    "options": [
      "==",
      "-eq",
      "=",
      "!="
    ],
    "answer": "B",
    "why": "Use -eq, -ne, -gt, -lt etc. for integer comparisons."
  },
  {
    "id": 142,
    "section": "Bash",
    "q": "Which operator tests string equality inside `[ ]`?",
    "options": [
      "-eq",
      "=",
      "-gt",
      "-le"
    ],
    "answer": "B",
    "why": "Strings use =/!= (or == in many shells) inside test."
  },
  {
    "id": 143,
    "section": "Bash",
    "q": "What does `-z string` test?",
    "options": [
      "String is non-empty",
      "String is empty",
      "File exists",
      "Number is zero"
    ],
    "answer": "B",
    "why": "-z is true when length of string is zero."
  },
  {
    "id": 144,
    "section": "Bash",
    "q": "What does `-n string` test?",
    "options": [
      "String is empty",
      "String is not empty",
      "File not found",
      "No newline"
    ],
    "answer": "B",
    "why": "-n is true when string length is non-zero."
  },
  {
    "id": 145,
    "section": "Bash",
    "q": "Which bracket form supports `&&` and `||` directly inside the test?",
    "options": [
      "[ ] only",
      "[[ ]] only",
      "{ } only",
      "( ) only"
    ],
    "answer": "B",
    "why": "[[ ]] supports &&/|| without -a/-o."
  },
  {
    "id": 146,
    "section": "Bash",
    "q": "In `[ ]`, what are the older logical operators for AND/OR?",
    "options": [
      "&& and ||",
      "-a and -o",
      "& and |",
      "AND and OR"
    ],
    "answer": "B",
    "why": "Within single-bracket test, -a and -o are used for AND/OR."
  },
  {
    "id": 147,
    "section": "Bash",
    "q": "What is the purpose of `case ... esac`?",
    "options": [
      "Looping over numbers",
      "Matching a variable against multiple patterns",
      "Defining arrays",
      "Creating processes"
    ],
    "answer": "B",
    "why": "case selects among patterns (like switch)."
  },
  {
    "id": 148,
    "section": "Bash",
    "q": "Which loop prints numbers 1 to 5 using brace expansion?",
    "options": [
      "for i in (1..5)",
      "for i in {1..5}; do echo $i; done",
      "for i=1..5",
      "loop i 1 5"
    ],
    "answer": "B",
    "why": "{1..5} brace expansion works in Bash for simple ranges."
  },
  {
    "id": 149,
    "section": "Bash",
    "q": "Which loop is C-style in Bash?",
    "options": [
      "for i in {1..5}",
      "for (( i=1; i<=5; i++ ))",
      "while i<=5",
      "until i==5"
    ],
    "answer": "B",
    "why": "C-style uses double parentheses with init/cond/incr."
  },
  {
    "id": 150,
    "section": "Bash",
    "q": "What does `break` do in a loop?",
    "options": [
      "Skips to next iteration",
      "Exits the loop immediately",
      "Restarts loop",
      "Ends the script"
    ],
    "answer": "B",
    "why": "break terminates the current loop."
  },
  {
    "id": 151,
    "section": "Bash",
    "q": "What does `continue` do in a loop?",
    "options": [
      "Ends the loop",
      "Skips rest of current iteration",
      "Stops the script",
      "Runs loop backwards"
    ],
    "answer": "B",
    "why": "continue moves to the next iteration."
  },
  {
    "id": 152,
    "section": "Bash",
    "q": "How do you define a Bash function correctly?",
    "options": [
      "function f: end",
      "f() { commands; }",
      "def f():",
      "func f() ->"
    ],
    "answer": "B",
    "why": "Bash functions use `name() { ... }` (or `function name { ... }`)."
  },
  {
    "id": 153,
    "section": "Bash",
    "q": "How do you access the first argument inside a Bash function?",
    "options": [
      "$0",
      "$1",
      "$@",
      "$#"
    ],
    "answer": "B",
    "why": "Inside functions, $1 refers to the first parameter passed to that function."
  },
  {
    "id": 154,
    "section": "Bash",
    "q": "How can a Bash function return a computed value commonly?",
    "options": [
      "Using echo and command substitution",
      "Using return with any integer range",
      "Using printf without capture",
      "Using exit"
    ],
    "answer": "A",
    "why": "Functions typically echo results and callers capture: result=$(func ...)."
  },
  {
    "id": 155,
    "section": "Bash",
    "q": "What is the limitation of `return` in Bash functions?",
    "options": [
      "Cannot return numbers",
      "Returns only 0\u2013255 integer status codes",
      "Returns strings only",
      "Returns arrays only"
    ],
    "answer": "B",
    "why": "return is for exit status; only 0\u2013255 are meaningful."
  },
  {
    "id": 156,
    "section": "Bash",
    "q": "What is file descriptor 0?",
    "options": [
      "stdout",
      "stdin",
      "stderr",
      "a log file"
    ],
    "answer": "B",
    "why": "FD 0 is standard input."
  },
  {
    "id": 157,
    "section": "Bash",
    "q": "What is file descriptor 1?",
    "options": [
      "stdin",
      "stdout",
      "stderr",
      "null device"
    ],
    "answer": "B",
    "why": "FD 1 is standard output."
  },
  {
    "id": 158,
    "section": "Bash",
    "q": "What is file descriptor 2?",
    "options": [
      "stdin",
      "stdout",
      "stderr",
      "process id"
    ],
    "answer": "C",
    "why": "FD 2 is standard error."
  },
  {
    "id": 159,
    "section": "Bash",
    "q": "What does `>&2` do when used like `echo \"Error\" >&2`?",
    "options": [
      "Sends output to stdout",
      "Sends output to stderr",
      "Redirects input",
      "Runs in background"
    ],
    "answer": "B",
    "why": ">&2 redirects echo\u2019s output to stderr."
  },
  {
    "id": 160,
    "section": "Bash",
    "q": "What does `sleep 30 &` do?",
    "options": [
      "Sleeps and blocks terminal for 30 seconds",
      "Runs sleep in the background",
      "Kills the current job",
      "Changes priority"
    ],
    "answer": "B",
    "why": "& backgrounds the command; it becomes a job."
  },
  {
    "id": 161,
    "section": "Bash",
    "q": "Which command lists background jobs in the current shell?",
    "options": [
      "ps",
      "jobs",
      "top",
      "fg"
    ],
    "answer": "B",
    "why": "jobs lists active background/paused jobs for that shell."
  },
  {
    "id": 162,
    "section": "Bash",
    "q": "What does `fg` do?",
    "options": [
      "Kills a job",
      "Brings a background job to foreground",
      "Sends job to background",
      "Shows file permissions"
    ],
    "answer": "B",
    "why": "fg resumes a job in the foreground."
  },
  {
    "id": 163,
    "section": "Bash",
    "q": "What does `bg` do after you press Ctrl-Z to stop a job?",
    "options": [
      "Deletes the job",
      "Resumes it in background",
      "Runs it as root",
      "Prints job ID only"
    ],
    "answer": "B",
    "why": "bg continues a stopped job in the background."
  },
  {
    "id": 164,
    "section": "Bash",
    "q": "How do you kill job number 2 using job control syntax?",
    "options": [
      "kill 2",
      "kill %2",
      "kill job2",
      "kill -job 2"
    ],
    "answer": "B",
    "why": "kill %2 targets job ID 2 (not PID)."
  },
  {
    "id": 165,
    "section": "Bash",
    "q": "Which command shows the last program's return value (exit code) in Bash?",
    "options": [
      "echo $!",
      "echo $?",
      "echo $$",
      "echo $PWD"
    ],
    "answer": "B",
    "why": "$? is the exit status of the previous command."
  },
  {
    "id": 166,
    "section": "Bash",
    "q": "What does an alias like `alias ping='ping -c 5'` do?",
    "options": [
      "Creates a new ping binary",
      "Replaces ping command name in shell expansion",
      "Changes kernel ping behavior",
      "Edits /etc/hosts"
    ],
    "answer": "B",
    "why": "Alias makes the shell substitute the command text before execution."
  },
  {
    "id": 167,
    "section": "Bash",
    "q": "How do you bypass an alias for a command name in Bash?",
    "options": [
      "Use sudo",
      "Prefix with backslash, like \\ping",
      "Use ./ping",
      "Use man ping"
    ],
    "answer": "B",
    "why": "A leading backslash escapes alias expansion."
  },
  {
    "id": 168,
    "section": "Bash",
    "q": "What is the safer way to compare a potentially empty variable in `[ ]`?",
    "options": [
      "if [ $X = 1 ]",
      "if [ \"$X\" = 1 ]",
      "if [ X = 1 ]",
      "if [ $$X = 1 ]"
    ],
    "answer": "B",
    "why": "Quoting prevents syntax errors when the variable is empty."
  },
  {
    "id": 169,
    "section": "Bash",
    "q": "What does `${#var}` return?",
    "options": [
      "Substring",
      "String length",
      "First character",
      "Exit code"
    ],
    "answer": "B",
    "why": "${#var} expands to the length of the variable value."
  },
  {
    "id": 170,
    "section": "Bash",
    "q": "What does `${var:0:3}` do?",
    "options": [
      "Replaces var",
      "Gets a substring starting at index 0 length 3",
      "Counts words",
      "Converts to uppercase"
    ],
    "answer": "B",
    "why": "It extracts a substring from the value."
  },
  {
    "id": 171,
    "section": "Bash",
    "q": "What does `${var/Some/A}` do?",
    "options": [
      "Appends A",
      "Replaces first occurrence of Some with A",
      "Deletes var",
      "Replaces all occurrences"
    ],
    "answer": "B",
    "why": "Single slash replacement substitutes only the first match."
  },
  {
    "id": 172,
    "section": "Bash",
    "q": "What does `${Foo:-default}` do when Foo is empty or unset?",
    "options": [
      "Deletes Foo",
      "Expands to default value",
      "Sets Foo to default permanently",
      "Errors out"
    ],
    "answer": "B",
    "why": "It provides a default expansion without modifying Foo."
  },
  {
    "id": 173,
    "section": "Bash",
    "q": "Which is correct for declaring an array in Bash?",
    "options": [
      "array=(one two three)",
      "array=[one,two,three]",
      "array{one two}",
      "array: one two"
    ],
    "answer": "A",
    "why": "Bash arrays use parentheses: arr=(...)."
  },
  {
    "id": 174,
    "section": "Bash",
    "q": "How do you print all array elements?",
    "options": [
      "echo $array",
      "echo ${array[@]}",
      "echo ${array}",
      "echo ${#array}"
    ],
    "answer": "B",
    "why": "${arr[@]} expands all elements."
  },
  {
    "id": 175,
    "section": "Bash",
    "q": "What does brace expansion `{a..z}` output?",
    "options": [
      "A single string a..z",
      "Letters from a to z",
      "Files matching a..z",
      "Nothing unless files exist"
    ],
    "answer": "B",
    "why": "Brace expansion generates sequences in the shell."
  },
  {
    "id": 176,
    "section": "Bash",
    "q": "Which command clears the terminal screen?",
    "options": [
      "clean",
      "clear",
      "resetpwd",
      "wipe"
    ],
    "answer": "B",
    "why": "clear clears the visible terminal output."
  },
  {
    "id": 177,
    "section": "Bash",
    "q": "What is a here-document used for (e.g., `<< EOF`)?",
    "options": [
      "Appending to a file",
      "Feeding multi-line input to a command",
      "Running in background",
      "Searching files"
    ],
    "answer": "B",
    "why": "Here-doc supplies literal multi-line stdin until the delimiter."
  },
  {
    "id": 178,
    "section": "Bash",
    "q": "What does `python hello.py > out.log 2>&1` do?",
    "options": [
      "Sends only stderr to out.log",
      "Sends stdout and stderr to out.log",
      "Sends stdin to out.log",
      "Runs python in background"
    ],
    "answer": "B",
    "why": "stdout is redirected then stderr is merged into stdout destination."
  },
  {
    "id": 179,
    "section": "Bash",
    "q": "Which file test is true if a file exists and is readable?",
    "options": [
      "-w",
      "-x",
      "-r",
      "-d"
    ],
    "answer": "C",
    "why": "-r checks readability."
  },
  {
    "id": 180,
    "section": "Bash",
    "q": "Which file test is true if a file exists and is executable?",
    "options": [
      "-x",
      "-e",
      "-a",
      "-s"
    ],
    "answer": "A",
    "why": "-x checks execute permission."
  },
  {
    "id": 181,
    "section": "Bash",
    "q": "Which file test is true if a file exists and is a regular file?",
    "options": [
      "-f",
      "-d",
      "-L",
      "-p"
    ],
    "answer": "A",
    "why": "-f checks regular file."
  },
  {
    "id": 182,
    "section": "Bash",
    "q": "In arithmetic comparison, which means 'greater than'?",
    "options": [
      "-gt",
      "-ge",
      "-lt",
      "-le"
    ],
    "answer": "A",
    "why": "-gt is strictly greater than."
  },
  {
    "id": 183,
    "section": "Bash",
    "q": "In arithmetic comparison, which means 'less than or equal'?",
    "options": [
      "-lt",
      "-le",
      "-eq",
      "-ne"
    ],
    "answer": "B",
    "why": "-le is less than or equal."
  },
  {
    "id": 184,
    "section": "Bash",
    "q": "What does an `until` loop do?",
    "options": [
      "Runs while condition is true",
      "Runs until condition becomes true",
      "Runs exactly once",
      "Runs only on errors"
    ],
    "answer": "B",
    "why": "until is the opposite of while: it loops until the condition becomes true."
  },
  {
    "id": 185,
    "section": "Bash",
    "q": "Why use `read -r` when reading lines in a loop?",
    "options": [
      "To read faster",
      "To prevent backslash escapes from being interpreted",
      "To trim spaces",
      "To convert to regex"
    ],
    "answer": "B",
    "why": "`-r` stops read from treating backslashes as escape characters."
  },
  {
    "id": 186,
    "section": "Bash",
    "q": "Why might you set `IFS=` before `read` in a loop?",
    "options": [
      "To delete input",
      "To preserve leading/trailing spaces",
      "To set file permissions",
      "To enable regex"
    ],
    "answer": "B",
    "why": "Clearing IFS helps preserve whitespace exactly as read."
  },
  {
    "id": 187,
    "section": "Bash",
    "q": "If a function does `return 1`, what does that usually indicate?",
    "options": [
      "Success",
      "Failure/non-zero status",
      "Returns string '1'",
      "Exits the whole OS"
    ],
    "answer": "B",
    "why": "Non-zero return codes typically indicate an error/failure."
  },
  {
    "id": 188,
    "section": "Bash",
    "q": "Which variable holds the PID of the most recent background process?",
    "options": [
      "$!",
      "$$",
      "$?",
      "$@"
    ],
    "answer": "A",
    "why": "$! expands to PID of the last background job started."
  },
  {
    "id": 189,
    "section": "Bash",
    "q": "What does `local var=5` inside a function do?",
    "options": [
      "Creates global var",
      "Restricts var to function scope",
      "Exports var to environment",
      "Deletes var"
    ],
    "answer": "B",
    "why": "local limits a variable to the function scope."
  },
  {
    "id": 190,
    "section": "Bash",
    "q": "Which operator redirects stdin from a file?",
    "options": [
      "<",
      ">",
      ">>",
      "|"
    ],
    "answer": "A",
    "why": "`<` redirects a file into stdin."
  },
  {
    "id": 191,
    "section": "Bash",
    "q": "What does `tee output.txt` do in a pipeline?",
    "options": [
      "Deletes output.txt",
      "Writes stdin to output.txt and stdout",
      "Counts lines",
      "Sorts output"
    ],
    "answer": "B",
    "why": "tee duplicates input to a file and also prints it."
  },
  {
    "id": 192,
    "section": "Bash",
    "q": "Where does `/dev/null` send output?",
    "options": [
      "To the printer",
      "To a black hole (discard)",
      "To kernel log",
      "To home directory"
    ],
    "answer": "B",
    "why": "/dev/null discards anything written to it."
  },
  {
    "id": 193,
    "section": "Bash",
    "q": "What does `${var:-x}` do if var is set to an empty string?",
    "options": [
      "Expands to empty string",
      "Expands to x",
      "Errors out",
      "Deletes var"
    ],
    "answer": "B",
    "why": ":- uses default when var is unset OR empty."
  },
  {
    "id": 194,
    "section": "Bash",
    "q": "How do you access the 10th positional parameter?",
    "options": [
      "$10",
      "${10}",
      "$1 0",
      "$[10]"
    ],
    "answer": "B",
    "why": "Use braces for parameters >=10: ${10}."
  },
  {
    "id": 195,
    "section": "Bash",
    "q": "What does `${!name}` (indirect expansion) do?",
    "options": [
      "Negates name",
      "Expands the variable whose name is in `name`",
      "Lists environment",
      "Runs name as command"
    ],
    "answer": "B",
    "why": "Indirect expansion treats the content as another variable name."
  },
  {
    "id": 196,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 197,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 198,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 199,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 200,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 201,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 202,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 203,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 204,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 205,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 206,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 207,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 208,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 209,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 210,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 211,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 212,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 213,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 214,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 215,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 216,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 217,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 218,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 219,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 220,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 221,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 222,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 223,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 224,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 225,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 226,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 227,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 228,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 229,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 230,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 231,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 232,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 233,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 234,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 235,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 236,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 237,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 238,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 239,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 240,
    "section": "Bash",
    "q": "In Bash, what is the safest way to reference a variable when appending text (e.g., name + 'man')?",
    "options": [
      "$name man",
      "${name}man",
      "$name-man",
      "name$man"
    ],
    "answer": "B",
    "why": "Braces avoid ambiguity: ${name}man concatenates correctly."
  },
  {
    "id": 241,
    "section": "Process",
    "q": "What does `getpid()` return in a C program on Linux?",
    "options": [
      "Parent PID",
      "Caller process ID",
      "Thread ID",
      "User ID"
    ],
    "answer": "B",
    "why": "getpid() returns the process ID of the calling process."
  },
  {
    "id": 242,
    "section": "Process",
    "q": "What does `getppid()` return?",
    "options": [
      "The PID of the process's parent",
      "The PID of the process's child",
      "The PID limit",
      "The UID of the parent"
    ],
    "answer": "A",
    "why": "getppid() returns the parent process ID."
  },
  {
    "id": 243,
    "section": "Process",
    "q": "If a parent process terminates, an orphaned child is usually adopted by:",
    "options": [
      "kernel thread 0",
      "init/systemd (PID 1)",
      "the shell",
      "cron"
    ],
    "answer": "B",
    "why": "Orphans are re-parented to PID 1; getppid() will then return 1."
  },
  {
    "id": 244,
    "section": "Process",
    "q": "Where can you find a process's parent PID shown by the kernel?",
    "options": [
      "/proc/PID/status (Ppid field)",
      "/etc/passwd",
      "/proc/PID/maps",
      "/var/log/dmesg"
    ],
    "answer": "A",
    "why": "The Ppid field in /proc/PID/status shows the parent PID."
  },
  {
    "id": 245,
    "section": "Process",
    "q": "What is `/proc/PID/cmdline` used for?",
    "options": [
      "File permissions",
      "Command-line arguments of a process",
      "Loaded shared libraries",
      "Network sockets"
    ],
    "answer": "B",
    "why": "It contains the command line args separated by null bytes."
  },
  {
    "id": 246,
    "section": "Process",
    "q": "What is an environment list in Linux processes?",
    "options": [
      "A list of open files",
      "An array of NAME=value strings inherited by child processes",
      "A list of running services",
      "A list of CPUs"
    ],
    "answer": "B",
    "why": "Processes have an environment of NAME=value strings that is inherited by children."
  },
  {
    "id": 247,
    "section": "Process",
    "q": "Which command shows the environment variables of the current shell (as in notes)?",
    "options": [
      "printenv",
      "envkill",
      "getenviron",
      "whoami"
    ],
    "answer": "A",
    "why": "printenv displays the current environment variables."
  },
  {
    "id": 248,
    "section": "Process",
    "q": "What does `unset VAR` do?",
    "options": [
      "Deletes the file VAR",
      "Removes VAR from the environment/shell variables",
      "Sets VAR to 0",
      "Exports VAR"
    ],
    "answer": "B",
    "why": "unset removes a variable so it is no longer defined."
  },
  {
    "id": 249,
    "section": "Process",
    "q": "What does `fork()` do?",
    "options": [
      "Terminates a process",
      "Creates a new child process by duplicating the parent",
      "Loads a new program into memory",
      "Waits for child"
    ],
    "answer": "B",
    "why": "fork duplicates the calling process, creating a child."
  },
  {
    "id": 250,
    "section": "Process",
    "q": "In the parent process, `fork()` returns:",
    "options": [
      "0 always",
      "Child PID on success",
      "-1 always",
      "Parent PID"
    ],
    "answer": "B",
    "why": "Parent gets the child PID; child gets 0."
  },
  {
    "id": 251,
    "section": "Process",
    "q": "In the child process, `fork()` returns:",
    "options": [
      "0",
      "Child PID",
      "Parent PID",
      "-1"
    ],
    "answer": "A",
    "why": "The child receives 0 from fork()."
  },
  {
    "id": 252,
    "section": "Process",
    "q": "What does `wait(&status)` do (main purpose)?",
    "options": [
      "Creates a child",
      "Suspends until a child terminates and collects status",
      "Replaces the program image",
      "Kills a process"
    ],
    "answer": "B",
    "why": "wait blocks until a child exits and returns its termination status."
  },
  {
    "id": 253,
    "section": "Process",
    "q": "What does `execve(path, argv, envp)` do?",
    "options": [
      "Creates a new process",
      "Replaces current process image with a new program",
      "Waits for a process",
      "Changes PID"
    ],
    "answer": "B",
    "why": "exec* loads a new program into the existing process, replacing code/data/stack/heap layout."
  },
  {
    "id": 254,
    "section": "Process",
    "q": "Which statement about `exit(status)` is correct?",
    "options": [
      "It creates a child",
      "It terminates a process and provides a status code",
      "It changes directory",
      "It replaces the program image"
    ],
    "answer": "B",
    "why": "exit ends the process and returns status to the parent/OS."
  },
  {
    "id": 255,
    "section": "Process",
    "q": "In typical process memory layout, which segment grows upward?",
    "options": [
      "Stack",
      "Heap",
      "Text",
      "Kernel mapped region"
    ],
    "answer": "B",
    "why": "Heap grows upward; stack generally grows downward."
  },
  {
    "id": 256,
    "section": "Process",
    "q": "In typical process memory layout, which segment grows downward?",
    "options": [
      "Heap",
      "Stack",
      "BSS",
      "Text"
    ],
    "answer": "B",
    "why": "Stack grows downward from high addresses."
  },
  {
    "id": 257,
    "section": "Process",
    "q": "Where are uninitialized global variables stored?",
    "options": [
      "Text segment",
      "BSS segment",
      "Stack",
      "Heap"
    ],
    "answer": "B",
    "why": "BSS holds uninitialized global/static variables."
  },
  {
    "id": 258,
    "section": "Process",
    "q": "Where are initialized global variables stored?",
    "options": [
      "Initialized data segment",
      "BSS",
      "Heap",
      "Stack"
    ],
    "answer": "A",
    "why": "Initialized globals/statics reside in the data segment."
  },
  {
    "id": 259,
    "section": "Process",
    "q": "Where is dynamically allocated memory from `malloc()` stored?",
    "options": [
      "Stack",
      "Heap",
      "Text",
      "Kernel space"
    ],
    "answer": "B",
    "why": "malloc returns pointers to heap memory."
  },
  {
    "id": 260,
    "section": "Process",
    "q": "Where can you view a process memory map on Linux?",
    "options": [
      "/proc/PID/maps",
      "/proc/PID/cmdline",
      "/proc/PID/environ",
      "/proc/PID/status only"
    ],
    "answer": "A",
    "why": "/proc/PID/maps lists mapped memory regions."
  },
  {
    "id": 261,
    "section": "Process",
    "q": "Why does Linux not reset PID counter to 1 after reaching the maximum (in notes)?",
    "options": [
      "Because 1 is reserved and many low PIDs are in use",
      "Because it causes segmentation fault",
      "Because PIDs must be prime",
      "Because user IDs collide"
    ],
    "answer": "A",
    "why": "Low-numbered PIDs are often reserved for system processes."
  },
  {
    "id": 262,
    "section": "Process",
    "q": "What file can adjust the PID limit on Linux 2.6+ (per notes)?",
    "options": [
      "/proc/sys/kernel/pid_max",
      "/etc/pid.conf",
      "/proc/pid_max",
      "/sys/proc/pid"
    ],
    "answer": "A",
    "why": "pid_max controls the maximum PID value."
  },
  {
    "id": 263,
    "section": "Process",
    "q": "What does `clearenv()` do in C (GNU extension shown)?",
    "options": [
      "Clears screen",
      "Erases entire environment list of the process",
      "Clears heap",
      "Clears /proc"
    ],
    "answer": "B",
    "why": "clearenv removes all environment variables for the process."
  },
  {
    "id": 264,
    "section": "Process",
    "q": "What does `setenv(name, value, overwrite)` do?",
    "options": [
      "Sets a shell alias",
      "Sets an environment variable (optionally overwriting)",
      "Sets file permissions",
      "Starts a daemon"
    ],
    "answer": "B",
    "why": "setenv adds/updates NAME=value in the environment."
  },
  {
    "id": 265,
    "section": "Process",
    "q": "What does `putenv(\"X=1\")` do?",
    "options": [
      "Prints X",
      "Adds/modifies environment variable X",
      "Deletes X",
      "Creates file X"
    ],
    "answer": "B",
    "why": "putenv inserts or updates a NAME=value string in environment."
  },
  {
    "id": 266,
    "section": "Process",
    "q": "If you want to send an error message to stderr in C-like shell style, which FD is used?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": "C",
    "why": "stderr is file descriptor 2."
  },
  {
    "id": 267,
    "section": "Process",
    "q": "After `fork()`, are file descriptors shared (referring to open file description)?",
    "options": [
      "No, completely independent",
      "Yes, parent/child share open file descriptions (offset/flags)",
      "Only on Windows",
      "Only for stdin"
    ],
    "answer": "B",
    "why": "After fork, both processes refer to the same open file description, so offsets/flags are shared."
  },
  {
    "id": 268,
    "section": "Process",
    "q": "Why can race conditions occur after `fork()` without synchronization?",
    "options": [
      "Because child runs before fork returns",
      "CPU scheduling order between parent/child is indeterminate",
      "Because wait always fails",
      "Because exec always runs"
    ],
    "answer": "B",
    "why": "Scheduling is nondeterministic; either process may run first."
  },
  {
    "id": 269,
    "section": "Process",
    "q": "What is the conventional meaning of `argv[0]`?",
    "options": [
      "First user argument",
      "Program name",
      "Environment list",
      "Parent PID"
    ],
    "answer": "B",
    "why": "argv[0] is conventionally the program name."
  },
  {
    "id": 270,
    "section": "Process",
    "q": "What terminates the argv list in C?",
    "options": [
      "A newline",
      "A NULL pointer at argv[argc]",
      "A space character",
      "A zero PID"
    ],
    "answer": "B",
    "why": "argv array ends with a NULL pointer."
  },
  {
    "id": 271,
    "section": "Process",
    "q": "Where can a program read its own cmdline arguments via procfs?",
    "options": [
      "/proc/self/cmdline",
      "/proc/self/args",
      "/proc/cmdline/self",
      "/proc/argv"
    ],
    "answer": "A",
    "why": "/proc/self/cmdline contains the current process's arguments."
  },
  {
    "id": 272,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 273,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 274,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 275,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 276,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 277,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 278,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 279,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 280,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 281,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 282,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 283,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 284,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 285,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 286,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 287,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 288,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 289,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 290,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 291,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 292,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 293,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 294,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 295,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 296,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 297,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 298,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 299,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  },
  {
    "id": 300,
    "section": "Process",
    "q": "Which component of the OS interprets shell commands and communicates with the kernel?",
    "options": [
      "The BIOS",
      "The shell",
      "The linker",
      "The filesystem driver"
    ],
    "answer": "B",
    "why": "A shell is a command-line interface that interprets commands and interacts with the OS/kernel."
  }
];