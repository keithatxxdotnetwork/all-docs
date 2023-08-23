Several file paths need to be specified for a Node or Gateway to run.
Some of these paths point to existing files; others point to where a
file should be saved. Many of these are modified through the Node and
Gateway configuration files, which must be explicitly specified when
running the software.

The Node and Gateway machines have different directory structures, as
shown in their respective sections below. In each section is a typical
directory tree if set up following [Node and Gateway Set
Up](Node_and_Gateway_Set_Up "wikilink"). The files that are required at
startup are marked with a red asterisk () and the files that are
generated are marked with a blue dagger ().

## Node

<table>
<tbody>
<tr class="odd">
<td></td>
<td><p>file required at startup</p></td>
</tr>
<tr class="even">
<td></td>
<td><p>file generated</p></td>
</tr>
</tbody>
</table>
<div>
-   /opt/xxnetwork
    -   bin
        -   id-generation
        -   xxnetwork-chain
        -   xxnetwork-cmix
    -   cmix-wrapper.py
    -   config
        -   cmix.yaml
    -   cred
        -   cmix-IDF.json
        -   cmix-cert.crt
        -   cmix-key.key
        -   gateway-cert.crt
        -   network-management.crt
        -   scheduling-cert.crt
    -   db
    -   generate-certs.py
    -   lib
        -   libpow.fatbin
        -   libpowmosm75.so
    -   log
        -   chain.log
        -   cmix-err.log
        -   cmix-wrapper.log
        -   cmix.log
        -   cmix-cmd
            -   command-1591809548.jsonl
            -   version-1591166323.jsonl
        -   metrics.log
    -   xxnetwork-chain.service
    -   xxnetwork-cmix.service

</div>
The Node requires four files to run:

1.  The Node private key
2.  The Node TLS certificate
3.  The Gateway TLS certificate
4.  The Scheduling server TLS certificate

There are three different paths for logs: the normal Node log, the error
log, and the metrics logs, as well as one for the Node IDF file.

## Gateway

<table>
<tbody>
<tr class="odd">
<td></td>
<td><p>file required at startup</p></td>
</tr>
<tr class="even">
<td></td>
<td><p>file generated</p></td>
</tr>
</tbody>
</table>

<div>
-   /opt/xxnetwork
    -   bin
        -   xxnetwork-chain
        -   xxnetwork-gateway
    -   config
        -   gateway.yaml
    -   cred
        -   cmix-cert.crt
        -   gateway-IDF.json
        -   gateway-cert.crt
        -   gateway-key.key
        -   network-management.crt
        -   scheduling-cert.crt
    -   db
    -   gateway-wrapper.py
    -   log
        -   chain.log
        -   gateway-wrapper.log
        -   gateway.log
        -   gateway-cmd
            -   command-1591387138.jsonl
            -   version-1591126323.jsonl
    -   xxnetwork-chain.service
    -   xxnetwork-gateway.service
</div>
To run, Gateway requires four files:

1.  The Gateway private key
2.  The Gateway TLS certificate
3.  The Node TLS certificate
4.  The scheduling server TLS certificate

These appear in as follows.

In addition, Gateway has an optional IDF path field and an optional log
field. If no paths are supplied, defaults will be used. When the Gateway
runs, it will create files at these paths.
