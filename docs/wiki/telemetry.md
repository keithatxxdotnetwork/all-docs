## Add Telemetry Flags to the Node

Follow the instructions below on the Node machine.

1.  Open up the xx chain service file.
2.  Next, the name used for telemetry of your Node needs to be
    configured. Use the down key to navigate to the line that starts
    with and, after the flag, add the flag followed by your desired name
    for the Node. While not required, you may want to make the name
    unique so you can differentiate your Node from other Nodes and
    Gateways. If you do not set a name, then a random name will
    automatically be assigned to your Node.
3.  After the flag, add the flag .
4.  Once the change is made, save the file by pressing , and when
    prompted to save the buffer, press . Finally, when prompted with the
    file name, press .
5.  Reload the systemd service files.
6.  To activate the change, restart the xx chain service.
7.  Finally, check that xx chain is running properly by tailing the log
    file.
    It should print an output that looks similar to the followign
    example.
