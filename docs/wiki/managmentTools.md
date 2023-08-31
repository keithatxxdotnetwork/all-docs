# Wrapper Script

The management scripts are designed to make administration of the xx network software easier and less time consuming, as well as provide data back to the xx network about the functionality of each server. However, many features that it provides require trusting the xx network. Therefore, the usage of the management scripts is not required and can be disabled. The following are the primary features of these scripts.

* **Binary restart**:The Wrapper Script will restart if the binary process stops due to a handled error. The process can crash because, in the current implementation, some errors are not entirely handled when caused by cMix failures on the network. It is highly recommended that this feature be utilized.
* **Binary update**: The Wrapper Script can accept automatic binary and Wrapper Script updates provided by the xx network. In theory, the xx network can push any code it wants if this feature is activated, but it greatly simplifies running the cMix and Gateway software. This feature includes the ability to send stop and start commands to the cMix and Gateway software. All commands are signed and can be proved to have come from the xx network. This feature is always enabled when using the Wrapper Script.
* **Log upload**: This feature uploads logs to xx network for debugging. It can be disabled and is not mandatory but is useful to the xx network for development purposes.
The Management Script is two scripts combined, the service file and the actual Wrapper Script. The service file is a systemd script that starts the Wrapper Script and ensures it stays running. The wrapper script is written in Python and does most of the heavy lifting. Both can be found in the [Elixxir wrapper repository](https://gitlab.com/elixxir/wrapper).

The service file for xx chain does not have any additional scripts. Instead, the service file runs the binary directly.

## Service File Arguments

The service files maintain the cMix, Gateway, and xx chain processes running in the background. There is a different service for each. By default, these files are;`xxnetwork-cmix.service` for Node, `xxnetwork-gateway.service` for Gateway, and `xxnetwork-chain.service` for xx chain. They are located in `/opt/xxnetwork/` and are soft linked to `/etc/systemd/system/`. They are the same script, just configured differently for cMix and Gateway. These scripts call the Wrapper Script with different options. To see the full details of the options, refer to the Wrapper Script Arguments section below.

### cMix Service File Arguments
```
ExecStart=/opt/xxnetwork/cmix-wrapper.py \
 --err-path /opt/xxnetwork/log/cmix-err.log \
 --cmd-dir /opt/xxnetwork/log/cmix-cmd \
 --wrapper-log /opt/xxnetwork/log/cmix-wrapper.log \
 --binary-path /opt/xxnetwork/bin/xxnetwork-cmix \
 --gpu-lib /opt/xxnetwork/lib/libpowmosm75.so \
 --gpu-bin /opt/xxnetwork/lib/libpow.fatbin \
 --config-path /opt/xxnetwork/config/cmix.yaml \
 --id-path /opt/xxnetwork/cred/cmix-IDF.json \
 --log-path /opt/xxnetwork/log/cmix.log \
 --management-cert /opt/xxnetwork/cred/network-management.crt \
 --s3-access-key [REDACTED] \
 --s3-secret [REDACTED] \
 --s3-management-bucket alphanet-management-default \
 --s3-bin-bucket elixxir-bins \
 --cloudwatch-log-group xxnetwork-logs-default \
 --tmp-dir /tmp/xxnetwork/cmix/
```

### Gateway Service File Arguments
```
ExecStart=/opt/xxnetwork/gateway-wrapper.py \
 --wrapper-log /opt/xxnetwork/log/gateway-wrapper.log \
 --cmd-dir /opt/xxnetwork/log/gateway-cmd \
 --gateway \
 --binary-path /opt/xxnetwork/bin/xxnetwork-gateway \
 --config-path /opt/xxnetwork/config/gateway.yaml \
 --id-path /opt/xxnetwork/cred/gateway-IDF.json \
 --log-path /opt/xxnetwork/log/gateway.log \
 --management-cert /opt/xxnetwork/cred/network-management.crt \
 --s3-access-key [REDACTED] \
 --s3-secret [REDACTED] \
 --s3-management-bucket alphanet-management-default \
 --s3-bin-bucket elixxir-bins \
 --cloudwatch-log-group xxnetwork-logs-default \
 --tmp-dir /tmp/xxnetwork/cmix/
```

### xx chain Service File Arguments (On Node Machine)
```
ExecStart=/bin/bash -c '/opt/xxnetwork/bin/xxnetwork-chain
  --validator
  --base-path /opt/xxnetwork/db
  --port 15974
  --ws-port 63007 >> /opt/xxnetwork/logs/chain.log 2>&1'
```
### xx chain Service File Arguments (On Gateway Machine)
```
ExecStart=/bin/bash -c '/opt/xxnetwork/bin/xxnetwork-chain
  --base-path /opt/xxnetwork/db
  --port 15974
  --ws-port 63007 >> /opt/xxnetwork/logs/chain.log 2>&1'
```

## Wrapper Script Arguments
The following arguments should be modified inside the service file described above.

The s3* options are set per the deployment package sent to you and should not be changed. The other options can be changed per your installation, but it is highly recommended that you go with the defaults sent with the install package.

```
usage: wrapper.py [-h] --s3-access-key S3_ACCESS_KEY --s3-secret S3_SECRET [--s3-management-bucket S3_MANAGEMENT_BUCKET] [--s3-bin-bucket S3_BIN_BUCKET] [--s3-region S3_REGION] [--verbose] [--gateway] [--disable-cloudwatch] [--management-cert MANAGEMENT_CERT] [--tmp-dir TMP_DIR] [--cmd-dir CMD_DIR] [--wrapper-log WRAPPER_LOG] --binary-path BINARY_PATH --config-path CONFIG_PATH [--log-path LOG_PATH] [--gpu-lib GPU_LIB] [--gpu-bin GPU_BIN] [--id-path ID_PATH] [--err-path ERR_PATH] [--cloudwatch-log-group CLOUDWATCH_LOG_GROUP] [--disable-consensus] [--consensus-log CONSENSUS_LOG] [--consensus-cw-group CONSENSUS_CW_GROUP] [--consensus-url CONSENSUS_URL]
```

<table>
<thead>
  <tr>
    <th>Flag</th>
    <th>Default</th>
    <th>Required</th>
    <th>Description</th>
    <th>Notes</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>-h, --help</td>
    <td></td>
    <td></td>
    <td>Show this help message and exits.</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="5">Management arguments</td>
  </tr>
  <tr>
    <td>--s3-access-key</td>
    <td>Provided via tarball</td>
    <td>#</td>
    <td>S3 access key</td>
    <td>Do not modify from the default provided in the service file of the tarball.</td>
  </tr>
  <tr>
    <td>--s3-secret</td>
    <td>Provided via tarball</td>
    <td>#</td>
    <td>S3 access key secret</td>
    <td>Do not modify from the default provided in the service file of the tarball.</td>
  </tr>
  <tr>
    <td>--s3-management-bucket</td>
    <td>elixxir-management-mainnet</td>
    <td></td>
    <td>S3 management bucket name</td>
    <td></td>
  </tr>
  <tr>
    <td>--s3-bin-bucket</td>
    <td>elixxir-bins</td>
    <td></td>
    <td>S3 binary bucket name</td>
    <td></td>
  </tr>
  <tr>
    <td>--s3-region</td>
    <td>us-west-1</td>
    <td></td>
    <td>S3 region</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="5">Wrapper arguments</td>
  </tr>
  <tr>
    <td>--verbose</td>
    <td></td>
    <td></td>
    <td>Print debug information</td>
    <td></td>
  </tr>
  <tr>
    <td>--gateway</td>
    <td></td>
    <td></td>
    <td>Enable gateway mode</td>
    <td></td>
  </tr>
  <tr>
    <td>--disable-cloudwatch</td>
    <td>False</td>
    <td></td>
    <td>Disable uploading log events to CloudWatch</td>
    <td></td>
  </tr>
  <tr>
    <td>--management-cert</td>
    <td>/opt/xxnetwork/cred/network-management.crt</td>
    <td></td>
    <td>Path of the management certificate file</td>
    <td>Do not modify from the default provided in the service file.</td>
  </tr>
  <tr>
    <td>--tmp-dir</td>
    <td>/tmp</td>
    <td></td>
    <td>Directory for placing temporary files</td>
    <td></td>
  </tr>
  <tr>
    <td>--cmd-dir</td>
    <td>/opt/xxnetwork/log/cmd</td>
    <td></td>
    <td>Directory used for saving command file history</td>
    <td></td>
  </tr>
  <tr>
    <td>--wrapper-log</td>
    <td>/opt/xxnetwork/log/wrapper.log</td>
    <td></td>
    <td>Path of the wrapper script log file</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="5">cMix/Gateway arguments</td>
  </tr>
  <tr>
    <td>--binary-path</td>
    <td></td>
    <td>#</td>
    <td>Path of the cMix/Gateway binary</td>
    <td></td>
  </tr>
  <tr>
    <td>--config-path</td>
    <td></td>
    <td>#</td>
    <td>Path of the cMix/Gateway config file</td>
    <td></td>
  </tr>
  <tr>
    <td>--log-path</td>
    <td>/opt/xxnetwork/log/[cmix/gateway].log</td>
    <td></td>
    <td>Path of the cMix/Gateway log file</td>
    <td></td>
  </tr>
  <tr>
    <td>--gpu-lib</td>
    <td>/opt/xxnetwork/lib/libpowmosm75.so</td>
    <td></td>
    <td>Path of the GPU exponentiation library</td>
    <td></td>
  </tr>
  <tr>
    <td>--gpu-bin</td>
    <td>/opt/xxnetwork/lib/libpow.fatbin</td>
    <td></td>
    <td>Path of the GPU binary file</td>
    <td></td>
  </tr>
  <tr>
    <td>--id-path</td>
    <td>/opt/xxnetwork/cred/IDF.json</td>
    <td></td>
    <td>Path of the cMix/Gateway ID file</td>
    <td>Make sure to set to the correct ID file for your binary.</td>
  </tr>
  <tr>
    <td>--err-path</td>
    <td>/opt/xxnetwork/log/cmix-err.log</td>
    <td></td>
    <td>Path of the cMix error recovery file</td>
    <td></td>
  </tr>
  <tr>
    <td>--cloudwatch-log-group</td>
    <td>xxnetwork-logs-mainnet</td>
    <td></td>
    <td>Log group for CloudWatch logging</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="5">Consensus arguments</td>
  </tr>
  <tr>
    <td>--disable-consensus</td>
    <td>False</td>
    <td></td>
    <td>Disable Consensus integration (for test environments only)</td>
    <td></td>
  </tr>
  <tr>
    <td>--consensus-log</td>
    <td>/opt/xxnetwork/log/chain.log</td>
    <td></td>
    <td>Path of the Consensus log file</td>
    <td></td>
  </tr>
  <tr>
    <td>--consensus-cw-group</td>
    <td>xxnetwork-consensus-mainnet</td>
    <td></td>
    <td>Log group for Consensus CloudWatch logging</td>
    <td></td>
  </tr>
  <tr>
    <td>--consensus-url</td>
    <td>ws://localhost:63007</td>
    <td></td>
    <td>Listening address for blockchain-provided binary updates</td>
    <td></td>
  </tr>
</tbody>
</table>