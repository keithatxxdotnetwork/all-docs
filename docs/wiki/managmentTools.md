## Wrapper Scripts Features

The management scripts are designed to make administration of the xx
network software easier and less time consuming, as well as provide data
back to the xx network about the functionality of each server. However,
many features that it provides require trusting the xx network.
Therefore, the usage of the management scripts is not required and can
be disabled. The following are the primary features of these scripts.

-   **Binary restart:**The Wrapper Script will restart if the binary
    process stops due to a handled error. The process can crash because,
    in the current implementation, some errors are not entirely handled
    when caused by cMix failures on the network. It is highly
    recommended that this feature be utilized.
-   **Binary update:** The Wrapper Script can accept automatic binary
    and Wrapper Script updates provided by the xx network. In theory,
    the xx network can push any code it wants if this feature is
    activated, but it greatly simplifies running the cMix and Gateway
    software. This feature includes the ability to send stop and start
    commands to the cMix and Gateway software. All commands are signed
    and can be proved to have come from the xx network. This feature is
    always enabled when using the Wrapper Script.
-   **Log upload:** This feature uploads logs to xx network for
    debugging. It can be disabled and is not mandatory but is useful to
    the xx network for development purposes.

The Management Script is two scripts combined, the service file and the
actual Wrapper Script. The service file is a systemd script that starts
the Wrapper Script and ensures it stays running. The wrapper script is
written in Python and does most of the heavy lifting. Both can be found
in the [Elixxir wrapper repository](https://gitlab.com/elixxir/wrapper).

The service file for xx chain does not have any additional scripts.
Instead, the service file runs the binary directly.

## Service File Arguments

The service files maintain the cMix, Gateway, and xx chain processes
running in the background. There is a different service for each. By
default, these files ( for Node, for Gateway, and for xx chain) are
located in and are soft linked to . They are the same script, just
configured differently for cMix and Gateway. These scripts call the
Wrapper Script with different options. To see the full details of the
options, refer to the [Wrapper Script
Arguments](#Wrapper_Script_Arguments "wikilink") section below.

### cMix Service File Arguments

The following are the available options in the service file configured
for cMix. The sections in should never be modified and should maintain
the original values as provided. The items in can be modified. By
default, this file is located at on the Node machine.

`/opt/xxnetwork/cmix-wrapper.py \}}`  
` `  
` `  
` `  
` `  
` `  
` `  
` `  
` `  
` `  
` `  
` `  
` `  
` `  
` `  
` `  
` `

### Gateway Service File Arguments

The following are the available options in the service file configured
for Gateway. The sections in should never be modified and should
maintain the original values as provided. The items in can be modified.
By default, this file is located at on the Gateway machine.

`/opt/xxnetwork/gateway-wrapper.py \}}`  
` `  
` `  
` `  
` `  
` `  
` `  
` `  
` `  
` `  
` `  
` `  
` `  
` `  
` `

### xx chain Service File Arguments (On Node Machine)

The following are the available options in the service file configured
for xx chain on the Node machine. The sections in should never be
modified and should maintain the original values as provided. The items
in can be modified. By default, this file is located at on both the Node
and Gateway machines.

`/bin/bash -c '/opt/xxnetwork/bin/xxnetwork-chain}}`  
`  `  
`  `  
`  `  
`  `` `` `

### xx chain Service File Arguments (On Gateway Machine)

The following are the available options in the service file configured
for xx chain on the Gateway machine. The sections in should never be
modified and should maintain the original values as provided. The items
in can be modified. By default, this file is located at on both the Node
and Gateway machines.

`/bin/bash -c '/opt/xxnetwork/bin/xxnetwork-chain}}`  
`  `  
`  `  
`  `` `` `

## Wrapper Script Arguments

The following arguments should be modified inside the service file
described above.

<div class="mw-highlight mw-content-ltr mw-code" dir="ltr" style="padding-left:calc(18ch + 1em);text-indent:-18ch;">

usage: wrapper.py \[-h\]
<span style="white-space:nowrap;">--s3-access-key S3_ACCESS_KEY</span>
<span style="white-space:nowrap;">--s3-secret S3_SECRET</span>
<span style="white-space:nowrap;">\[--s3-management-bucket
S3_MANAGEMENT_BUCKET\]</span>
<span style="white-space:nowrap;">\[--s3-bin-bucket
S3_BIN_BUCKET\]</span> <span style="white-space:nowrap;">\[--s3-region
S3_REGION\]</span>
<span style="white-space:nowrap;">\[--verbose\]</span>
<span style="white-space:nowrap;">\[--gateway\]</span>
<span style="white-space:nowrap;">\[--disable-cloudwatch\]</span>
<span style="white-space:nowrap;">\[--management-cert
MANAGEMENT_CERT\]</span> <span style="white-space:nowrap;">\[--tmp-dir
TMP_DIR\]</span> <span style="white-space:nowrap;">\[--cmd-dir
CMD_DIR\]</span> <span style="white-space:nowrap;">\[--wrapper-log
WRAPPER_LOG\]</span> <span style="white-space:nowrap;">--binary-path
BINARY_PATH</span> <span style="white-space:nowrap;">--config-path
CONFIG_PATH</span> <span style="white-space:nowrap;">\[--log-path
LOG_PATH\]</span> <span style="white-space:nowrap;">\[--gpu-lib
GPU_LIB\]</span> <span style="white-space:nowrap;">\[--gpu-bin
GPU_BIN\]</span> <span style="white-space:nowrap;">\[--id-path
ID_PATH\]</span> <span style="white-space:nowrap;">\[--err-path
ERR_PATH\]</span>
<span style="white-space:nowrap;">\[--cloudwatch-log-group
CLOUDWATCH_LOG_GROUP\]</span>
<span style="white-space:nowrap;">\[--disable-consensus\]</span>
<span style="white-space:nowrap;">\[--consensus-log
CONSENSUS_LOG\]</span>
<span style="white-space:nowrap;">\[--consensus-cw-group
CONSENSUS_CW_GROUP\]</span>
<span style="white-space:nowrap;">\[--consensus-url
CONSENSUS_URL\]</span>

</div>

<table>
<thead>
<tr class="header">
<th><p>Flag</p></th>
<th><p>Default</p></th>
<th><p>Required</p></th>
<th><p>Description</p></th>
<th><p>Notes</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>, </p></td>
<td></td>
<td></td>
<td><p>Show this help message and exits.</p></td>
<td></td>
</tr>
<tr class="even">
<td><p>Management arguments</p></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td><p>S3 access key</p></td>
<td></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td><p>S3 access key secret</p></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td><p>S3 management bucket name</p></td>
<td></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td><p>S3 binary bucket name</p></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td><p>S3 region</p></td>
<td></td>
</tr>
<tr class="even">
<td><p>Wrapper arguments</p></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td><p>Print debug information</p></td>
<td></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td><p>Enable gateway mode</p></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td><p>Disable uploading log events to CloudWatch</p></td>
<td></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td><p>Path of the management certificate file</p></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td><p>Directory for placing temporary files</p></td>
<td></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td><p>Directory used for saving command file history</p></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td><p>Path of the wrapper script log file</p></td>
<td></td>
</tr>
<tr class="even">
<td><p>cMix/Gateway arguments</p></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td><p>Path of the cMix/Gateway binary</p></td>
<td></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td><p>Path of the cMix/Gateway config file</p></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td><p>Path of the cMix/Gateway log file</p></td>
<td></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td><p>Path of the GPU exponentiation library</p></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td><p>Path of the GPU binary file</p></td>
<td></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td><p>Path of the cMix/Gateway ID file</p></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td><p>Path of the cMix error recovery file</p></td>
<td></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td><p>Log group for CloudWatch logging</p></td>
<td></td>
</tr>
<tr class="odd">
<td><p>Consensus arguments</p></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td><p>Disable Consensus integration (for test environments only)</p></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td><p>Path of the Consensus log file</p></td>
<td></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td><p>Log group for Consensus CloudWatch logging</p></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td><p>Listening address for blockchain-provided binary updates</p></td>
<td></td>
</tr>
</tbody>
</table>
