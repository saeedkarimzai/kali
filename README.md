[object Object]

## Interactive cyber range (local simulation)

Open Terminal and run `lab`, then `scan 192.168.56.110` and `connect 192.168.56.110`. This opens a fictional remote machine that exists only inside the page. Explore its web directory with `ls`, `cd /var/www/html`, and `cat portal.txt`. The public training note contains the lab-only analyst credentials. Log in with `login analyst bluebird42`, inspect the analyst home directory, and use `sudo -l` to see the one permitted elevated command. The objective is to read `/root/flag.txt` using the explicitly allowed simulated command: `sudo cat /root/flag.txt`. Use `download <remote-file>` to copy a readable remote file into the local simulated Downloads folder, and `exit` to disconnect.

All target addresses, ports, accounts, passwords, files, permissions, and command results are hard-coded fictional training data. The lab does not open sockets, send packets, scan external hosts, or execute commands on the real computer. The lab shell is deliberately limited to its documented commands.
