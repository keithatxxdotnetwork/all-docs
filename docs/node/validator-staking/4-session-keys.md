---
sidebar_position: 4
---
# 4. Set Session Keys

```
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933 -o /opt/xxnetwork/cred/session-keys.json
```

json file location
```
cat /opt/xxnetwork/cred/session-keys.json
```
cmix-IDF.json
```
cat /opt/xxnetwork/cred/cmix-IDF.json
```

session keys location
```
$ ls -la /opt/xxnetwork/db/chains/xxnetwork/keystore/
total 8
drwxr-xr-x 2 ubuntu ubuntu 4096 Apr 21 16:13 .
drwxr-xr-x 5 ubuntu ubuntu 4096 Apr 21 16:13 ..
```


```
grandpa					0xcfc1fe1b...3c837e59a9
babe					0xd626a332...6f8cf3d520
imOnline				0xbe5ca603...cec36fbf53
authorityDiscovery		0x72d3ddc1...392edbaa32
```