---
sidebar_position: 3
---

# 3. Check `chain.log`
To proceed you need to ensure the `xxnetwork-chain` process is running propoerly on the Node computer. This can be done by inspecting `/opt/xxnetwork/log/chain.log` on the Node computer with the following command.
```bash
fail -f /opt/xxnetwork/log/chain.log
```
The following shows the process is running and syncing. Note the presence of `Syncing`.
```
2021-07-09 11:50:40 ⚙️  Syncing 1103.2 bps, target=#115291 (6 peers), best: #11298 (0x945a…7acc), finalized #11264 (0x57a2…862e), ⬇ 355.7kiB/s ⬆ 5.2kiB/s
2021-07-09 11:50:45 ⚙️  Syncing 1075.6 bps, target=#115292 (6 peers), best: #16676 (0x4793…eb6a), finalized #16651 (0xaa77…1f73), ⬇ 298.3kiB/s ⬆ 4.8kiB/s
2021-07-09 11:50:50 ⚙️  Syncing 1091.8 bps, target=#115293 (6 peers), best: #22135 (0xf654…548c), finalized #22051 (0x3c59…1459), ⬇ 293.8kiB/s ⬆ 4.4kiB/s
2021-07-09 11:50:55 ⚙️  Syncing 1029.6 bps, target=#115294 (6 peers), best: #27283 (0x1f92…3748), finalized #27211 (0xb33e…9f3e), ⬇ 294.2kiB/s ⬆ 4.3kiB/s
```
The following shows the process is synced. Note the presence of `💤 Idle` and `✨ Imported`.
```
2021-07-14 20:45:58 💤 Idle (14 peers), best: #188381 (0x5eaa…14a7), finalized #188379 (0xe221…6885), ⬇ 11.6kiB/s ⬆ 211.7kiB/s
2021-07-14 20:46:00 ✨ Imported #188382 (0x38d3…d252)
2021-07-14 20:46:03 💤 Idle (14 peers), best: #188382 (0x38d3…d252), finalized #188380 (0x2797…d5d7), ⬇ 17.3kiB/s ⬆ 15.1kiB/s
2021-07-14 20:46:06 ✨ Imported #188383 (0x71a4…743c)
2021-07-14 20:46:08 💤 Idle (14 peers), best: #188383 (0x71a4…743c), finalized #188381 (0x5eaa…14a7), ⬇ 12.8kiB/s ⬆ 137.9kiB/s
2021-07-14 20:46:12 ✨ Imported #188384 (0xd48a…301f)
```